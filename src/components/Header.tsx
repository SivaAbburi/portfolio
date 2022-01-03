import React from "react";
import { useState, useEffect } from "react";
import NextLink from "next/link";
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
          ? "font-semibold bg-gray-200 hover:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
          : "font-normal text-gray-400 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200",
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
            ? "font-semibold bg-gray-200 hover:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
            : "font-normal text-gray-400 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200",
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
    <div className="flex flex-col justify-center print:hidden">
      <nav className="flex items-center justify-between w-full  max-w-6xl border-gray-200 dark:border-gray-700 mx-auto pt-8 pb-8 sm:pb-16  text-gray-900  bg-opacity-60 dark:text-gray-100">
        <Link href="/">
          <a
            className="hidden sm:block transform scale-150 hover:scale-90 transition cursor:pointer"
            aria-label="home"
          >
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M24.1666 23L18.1045 12.5002L30.2287 12.5002L24.1666 23Z"
                fill="currentColor"
              />
              <path
                d="M16.0002 12.5001L21.8335 23L10.167 23L16.0002 12.5001Z"
                fill="currentColor"
              />
              <path
                d="M7.83361 23L1.77153 12.5002L13.8957 12.5002L7.83361 23Z"
                fill="currentColor"
              />
            </svg>
          </a>
        </Link>
        <div className="ml-[-0.60rem] space-x-2 flex">
          <MobileMenu />
          <NavItem href="/" text="Home" />
          <NavItem href="/apps" text="Apps" />
          <NavItem href="/articles" text="Articles" />
          <NavItem href="/bookmarks" text="Bookmarks" />
          <NavItem href="/resources" text="Resources" />
          <NavItem href="https://blog.achuth.dev" text="Blog" external={true} />
          {/* <NavItem href="/setup" text="Setup" /> */}
        </div>
        <span className="sm:hidden flex-1"></span>
        <button
          aria-label="Toggle Dark Mode"
          type="button"
          className="w-9 h-9 bg-gray-200 rounded-full dark:bg-gray-600 flex items-center justify-center  hover:ring-2 ring-gray-300  transition-all"
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
              className="w-5 h-5 text-gray-800 dark:text-gray-200"
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
