import Link from "next/link";
import Image from "next/image";

const LOGO_SRC = "/logo-new.png";

export default function NavbarLogo() {
  return (
    <Link
      href="/"
      className="flex h-full min-w-0 shrink-0 items-center px-4 sm:px-6 md:px-8"
      aria-label="Sofnology home"
    >
      <Image
        src={LOGO_SRC}
        alt="Sofnology"
        width={320}
        height={72}
        className="block h-9 w-auto max-w-[min(52vw,220px)] object-contain object-left sm:h-11 sm:max-w-none md:h-14"
        priority
      />
    </Link>
  );
}
