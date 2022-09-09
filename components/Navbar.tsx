import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <Image src="/next.svg" width={128} height={77} alt="Next.js logo" />
      </div>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
      <Link href="/nexts">
        <a>Next Listing</a>
      </Link>
    </nav>
  );
};

export default Navbar;
