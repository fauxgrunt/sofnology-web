const LOGO_SRC = "/logo-new.png";

export default function NavbarLogo() {
  return (
    <a
      href="#"
      className="flex h-full shrink-0 items-center px-6 md:px-8"
      aria-label="Sofnology home"
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={LOGO_SRC}
        alt="Sofnology"
        width={320}
        height={72}
        className="block h-11 w-auto max-w-none object-contain object-left md:h-14"
        decoding="async"
      />
    </a>
  );
}
