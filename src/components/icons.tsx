type IconProps = {
  className?: string;
};

export function ArrowUpRightIcon({ className = "h-5 w-5 shrink-0" }: IconProps) {
  return (
    <svg
      viewBox="0 0 20 20"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden="true"
    >
      <path d="M6 14L14 6M14 6H7M14 6V13" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function UploadIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg
      viewBox="0 0 20 20"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      aria-hidden="true"
    >
      <path d="M10 14V4M10 4L6.5 7.5M10 4l3.5 3.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M4 14v1.5A1.5 1.5 0 005.5 17h9a1.5 1.5 0 001.5-1.5V14" strokeLinecap="round" />
    </svg>
  );
}
