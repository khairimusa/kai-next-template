"use client";
import Image from "next/image";
import { ModeToggle } from "./ui/toggle-mode";

export default function Nav() {
  return (
    <header>
      <nav>
        <ul className="flex items-center justify-between">
          <li>
            <a href="https://khaairi.com" target="_blank"></a>
            <Image
              src="/kai-next-template/vercel.svg"
              alt="vecel logo"
              className="dark:invert"
              width={100}
              height={24}
              priority
            />
          </li>
          <li>
            <ModeToggle />
          </li>
        </ul>
      </nav>
    </header>
  );
}
