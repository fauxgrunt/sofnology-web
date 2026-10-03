type AccordionPanelProps = {
  id: string;
  labelledBy: string;
  open: boolean;
  children: React.ReactNode;
};

/**
 * Height accordion without Framer. Open/closed is the same on server and client,
 * so React does not hydrate with injected `style` attributes.
 */
export default function AccordionPanel({
  id,
  labelledBy,
  open,
  children,
}: AccordionPanelProps) {
  return (
    <div
      id={id}
      role="region"
      aria-labelledby={labelledBy}
      aria-hidden={!open}
      inert={!open}
      className={`grid overflow-hidden transition-[grid-template-rows] duration-chrome ease-motion ${
        open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
      }`}
    >
      <div
        className={`min-h-0 overflow-hidden transition-opacity duration-panel ease-motion ${
          open ? "opacity-100" : "opacity-0"
        }`}
      >
        {children}
      </div>
    </div>
  );
}
