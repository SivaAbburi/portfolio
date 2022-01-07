import React from "react";
import { useState, useEffect } from "react";
import NextLink from "next/link";
import NextImage from 'next/image'
import cn from "classnames";
import { useRouter } from "next/router";
import Link from "next/link";
import MobileMenu from "@/components/Mobilemenu";

function NavItem({ href, text, external = false }: any) {
  const router = useRouter();
  const isActive = router.asPath === href;
  return external ? (
    <a
      rel="noreferrer"
      href={href}
      target="_blank"
      className={cn(
        isActive
          ? "line-through text-[#0073ff]  "
          : "hover:text-[#0073ff] ",
        "hidden md:inline-block p-1 sm:px-3 sm:py-2 rounded-lg transition-all"
      )}
    >
      <span className="capsize">{text}</span>
    </a>
  ) : (
    <NextLink href={href}>
      <a
        className={cn(
          isActive
            ? "line-through text-[#0073ff] "
            : "hover:text-[#0073ff] ",
          "hidden md:inline-block p-1 sm:px-3 sm:py-2 rounded-lg transition-all"
        )}
      >
        <span className="capsize">{text}</span>
      </a>
    </NextLink>
  );
}

export default function Header() {
  const [mounted, setMounted] = useState(false);
  const [resolvedTheme, setTheme] = useState("");

  // After mounting, we have access to the theme
  useEffect(() => setMounted(true), []);

  useEffect(() => {
    const initialTheme = () => {
      // On page load or when changing themes, best to add inline in `head` to avoid FOUC
      if (
        localStorage.theme === "dark" ||
        (!("theme" in localStorage) &&
          window.matchMedia("(prefers-color-scheme: dark)").matches)
      ) {
        document.documentElement.classList.add("dark");
        setTheme("dark");
      }
      if (resolvedTheme === "light") {
        // Whenever the user explicitly chooses light mode
        document.documentElement.classList.remove("dark");
        localStorage.theme = "light";
        setTheme("light");
      } else if (resolvedTheme === "dark") {
        // Whenever the user explicitly chooses dark mode
        document.documentElement.classList.add("dark");
        localStorage.theme = "dark";
        setTheme("dark");
      }
    };
    initialTheme();
  }, [mounted, resolvedTheme]);
  return (
    <div className="flex flex-col justify-center print:hidden z-10 sticky top-0 bg-gray-0 dark:bg-gray-900">
      <nav className="flex items-center justify-between w-full  max-w-6xl border-gray-200 dark:border-gray-700 mx-auto pt-4 pb-8   text-gray-900  bg-opacity-60 dark:text-gray-100">
        <Link href="/">
          <a
            className="cursor:pointer"
            aria-label="home"
          >
            <svg width="61" height="32" viewBox="0 0 61 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="1" y="1" width="58.8042" height="30" rx="1" stroke="#0073FF" strokeWidth="2" />
              <rect width="9.06832" height="1.7781" rx="0.889051" transform="matrix(0.732736 0.680513 -0.732736 0.680513 40.7158 15.1279)" fill="#0073FF" />
              <rect width="9.0536" height="1.78098" rx="0.890492" transform="matrix(0.717617 -0.696438 0.747454 0.664313 39.3643 16.1865)" fill="#0073FF" />
              <rect width="5.41681" height="1.7802" rx="0.8901" transform="matrix(0.721782 0.69212 -0.743478 0.668761 29.6074 17.584)" fill="#0073FF" />
              <rect width="5.41681" height="1.7802" rx="0.8901" transform="matrix(0.721782 0.69212 -0.743478 0.668761 33.5693 9.9668)" fill="#0073FF" />
              <rect width="11.2204" height="1.7802" rx="0.8901" transform="matrix(0.721782 0.69212 -0.743478 0.668761 29.4229 11.7617)" fill="#0073FF" />
              <rect width="13.3599" height="1.82008" rx="0.910039" transform="matrix(0.445963 0.895052 -0.918748 0.394844 19.9453 9.7959)" fill="#0073FF" />
              <rect width="13.5299" height="1.82033" rx="0.910165" transform="matrix(-0.44354 0.896255 -0.919716 -0.392584 20.665 10.4688)" fill="#0073FF" />
            </svg>
          </a>
        </Link>
        <span className="flex-1"></span>
        <div className="ml-[-0.60rem] space-x-2 flex mr-2">
          <MobileMenu />
          <NextLink href="/#work">
            <a
              className="hidden md:inline-block p-1 sm:px-3 sm:py-2 rounded-lg transition-all hover:text-[#0073ff] "
            >
              <span className="capsize">Work</span>
            </a>
          </NextLink>
          <NavItem href="/about" text="About" />
        </div>
        <button
          aria-label="Toggle Dark Mode"
          type="button"
          className="w-9 h-9  flex items-center justify-center  transition-all"
          onClick={() => {
            setTheme(resolvedTheme === "dark" ? "light" : "dark");
          }}
        >
          {mounted && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              className="w-5 h-5 text-gray-800 dark:text-gray-200 hover:text-[#0073ff] "
              onClick={() => {
                setTheme(resolvedTheme === "light" ? "dark" : "light");
              }}
            >
              {resolvedTheme === "dark" ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                />
              )}
            </svg>
          )}
        </button>
      </nav>
    </div>
  );
}
