"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

const LIGHT = { r: 244, g: 244, b: 245 };
const DARK = { r: 16, g: 20, b: 19 };

function channel(value: number) {
  const v = value / 255;
  return v <= 0.03928 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4;
}

function luminance(color: { r: number; g: number; b: number }) {
  return 0.2126 * channel(color.r) + 0.7152 * channel(color.g) + 0.0722 * channel(color.b);
}

function parse(color: string) {
  const match = color.match(/rgba?\(([^)]+)\)/);
  if (!match) return null;
  const parts = match[1].split(",").map((part) => parseFloat(part));
  return {
    r: parts[0],
    g: parts[1],
    b: parts[2],
    a: parts.length > 3 ? parts[3] : 1,
  };
}

function composite(
  front: { r: number; g: number; b: number; a: number },
  back: { r: number; g: number; b: number },
) {
  const alpha = front.a;
  return {
    r: front.r * alpha + back.r * (1 - alpha),
    g: front.g * alpha + back.g * (1 - alpha),
    b: front.b * alpha + back.b * (1 - alpha),
  };
}

function ratio(a: { r: number; g: number; b: number }, b: { r: number; g: number; b: number }) {
  const left = luminance(a);
  const right = luminance(b);
  return (Math.max(left, right) + 0.05) / (Math.min(left, right) + 0.05);
}

function surface(el: HTMLElement) {
  const layers: { r: number; g: number; b: number; a: number }[] = [];
  let node: HTMLElement | null = el;
  while (node) {
    const color = parse(getComputedStyle(node).backgroundColor);
    if (color && color.a > 0) layers.push(color);
    if (color && color.a > 0.98) break;
    node = node.parentElement;
  }
  let acc = { r: 18, g: 20, b: 24 };
  for (let i = layers.length - 1; i >= 0; i -= 1) acc = composite(layers[i], acc);
  return acc;
}

function restore(el: HTMLElement) {
  if (!el.dataset.contrastOriginal) return;
  el.style.color = el.dataset.contrastOriginal;
  delete el.dataset.contrastOriginal;
}

function repair(el: HTMLElement) {
  const text = (el.innerText || el.getAttribute("placeholder") || "").trim();
  if (!text) return;
  const style = getComputedStyle(el);
  if (style.display === "none" || style.visibility === "hidden") return;
  const foreground = parse(style.color);
  if (!foreground) return;
  const back = surface(el);
  const solid = composite(foreground, back);
  const size = parseFloat(style.fontSize);
  const bold = Number(style.fontWeight) >= 600;
  const needed = size >= 24 || (bold && size >= 18.5) ? 3 : 4.5;
  if (ratio(solid, back) + 0.05 >= needed) return;

  const next = ratio(LIGHT, back) >= ratio(DARK, back) ? "#f4f4f5" : "#101413";
  const current = el.style.color.replace(/\s/g, "").toLowerCase();
  if (
    current === next ||
    current === "rgb(244,244,245)" ||
    current === "rgb(16,20,19)"
  ) {
    return;
  }
  if (!el.dataset.contrastOriginal) el.dataset.contrastOriginal = el.style.color;
  el.style.color = next;
}

export default function DarkContrast() {
  const pathname = usePathname();

  useEffect(() => {
    let frame = 0;
    const run = () => {
      const dark = document.documentElement.classList.contains("dark");
      const nodes = document.querySelectorAll<HTMLElement>(
        "[style*='color'], [class*='text-[#'], [data-contrast-original]",
      );
      nodes.forEach((el) => {
        if (!dark) restore(el);
        else repair(el);
      });
    };
    const schedule = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(run);
    };

    schedule();
    const body = new MutationObserver(schedule);
    body.observe(document.body, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ["style", "class"],
    });
    const theme = new MutationObserver(schedule);
    theme.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });

    return () => {
      cancelAnimationFrame(frame);
      body.disconnect();
      theme.disconnect();
    };
  }, [pathname]);

  return null;
}
