"use client";

import { useRouter } from "next/navigation";
import { areaFilters, workCategoryPath } from "@/content/work";

export default function WorkFilterSelect({ value }: { value: string }) {
  const router = useRouter();

  return (
    <div className="flex min-h-12 border-t border-neutral-200 bg-[#ececee] sm:min-h-14">
      <label className="flex min-h-12 flex-1 items-center gap-3 px-5 sm:min-h-14 sm:px-6 md:px-10 lg:px-16">
        <span className="text-[13px] font-semibold tracking-[-0.02em] text-neutral-800">Work</span>
        <select
          value={value}
          onChange={(event) => {
            const next = event.target.value;
            if (next === value) return;
            router.push(workCategoryPath(next));
          }}
          className="min-h-11 flex-1 cursor-pointer bg-transparent text-[16px] tracking-tight text-neutral-700 outline-none sm:text-[15px]"
          aria-label="Filter work"
        >
          {areaFilters.map((option) => (
            <option key={option.id} value={option.id}>
              {option.label}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
}
