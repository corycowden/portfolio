import Link from "next/link";

export function Navbar() {
  return (
    <nav aria-label="Primary navigation">
      <Link href="/" aria-label="Home">
        Home
      </Link>
      <Link href="/work">Work</Link>
      <Link href="/about">About</Link>
      <a href="/resume/resume.pdf" download>
        Resume
      </a>
    </nav>
  );
}
