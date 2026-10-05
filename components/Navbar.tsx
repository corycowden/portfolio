import Link from "next/link";

export function Navbar() {
  return (
    <nav aria-label="Primary navigation">
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/work">Work</Link>
    </nav>
  );
}
