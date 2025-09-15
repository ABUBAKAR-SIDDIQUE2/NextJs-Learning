// import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>This is the main page</h1> <br />

      {/* PREFETCHING WITH LINK */}
      <Link href="/about">About</Link>

      {/* NOT PREFETCHING WITH LINK */}
      <Link href="/porfolio" prefetch={false}>Portfolio</Link>

      {/* PREFETCHING WITH LINK */}
      <Link href="/dashboard">dashboard</Link><br /> <br /> <hr /> <br />

      <Link href="/blog">blog</Link>
    </div>
  );
}
