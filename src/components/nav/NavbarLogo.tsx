import Link from "next/link";
import Image from "next/image";

const LOGO_SRC = "/new-logo.png";

export default function NavbarLogo() {
  return (
    <Link
      href="/"
      className="flex h-full min-w-0 shrink-0 items-center px-4 sm:px-5"
      aria-label="Sofnology home"
    >
      <Image
        src={LOGO_SRC}
        alt="Sofnology"
        width={1216}
        height={327}
        className="block h-7 w-auto max-w-full object-contain object-left sm:h-8"
        priority
      />
    </Link>
  );
}
