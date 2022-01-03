import Link from "next/link";
import React from "react";

export default function Blogpost({
  slug,
  title,
  publishedAt,
  summary,
  tags,
}: any) {
  return (
    <div className="mt-5 max-w-2xl w-full  border-gray-50 dark:border-gray-800 border-2 text-sm border-b-2 p-2 rounded hover:shadow-md transition">
      <Link href={`/blog/${slug}`}>
        <a className="border-b-2 dark:border-slate-500 sm:border-b-0 sm:pr-2">
          <h4 className="font-semibold text-xl dark:text-gray-100 hover:dark:text-yellow-500 hover:text-yellow-600 transition">
            {title}
          </h4>
        </a>
      </Link>
      <div className="mb-2 text-xs flex flex-col">
        <div className="flex space-x-2 flex-1 flex-wrap items-center text-sm pb-2">
          {JSON.parse(tags).map((tag: string, i: number) => (
            <span
              key={`tag-key-${i}`}
              className="cursor-pointer select-none p-1 mr-2 rounded-md bg-gray-200 dark:bg-yellow-800 text-gray-600 dark:text-gray-200 text-xs inline-block"
            >
              #{tag}
            </span>
          ))}
        </div>
        <span className="text-gray-500 py-1 dark:text-gray-300">
          {publishedAt}
        </span>
      </div>
      <p className="text-gray-300 text-md">{summary}</p>
    </div>
  );
}
