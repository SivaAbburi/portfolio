import React from "react";
import type { InferGetStaticPropsType, NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { allBlogs } from ".contentlayer/data";
import { pick } from "@contentlayer/client";
import { parseISO, format } from "date-fns";

import Container from "@/components/Container";
import Newletter from "@/components/Newletter";
import Social from "@/components/Social";

type Props = InferGetStaticPropsType<typeof getStaticProps>;

const RecentArticles = ({ posts }: { posts: any }) => {
  return (
    <div className="grid sm:grid-cols-2 sm:mx-0 mb-2 ">
      {posts.map(
        ({ slug, title, summary, publishedAt, tags }: any, i: number) => (
          <div
            className="my-2 sm:odd:mr-2  sm:border-b-0 sm:px-2 rounded"
            key={`link-${i}`}
          >
            <div className=" border-gray-50 dark:border-gray-800 border-2 text-sm border-b-2 p-2 rounded hover:shadow-md transition">
              <Link href={`/blog/${slug}`}>
                <a className="flex  ">
                  <h4 className="font-semibold  dark:text-gray-100 hover:dark:text-yellow-500 hover:text-yellow-600 transition ">
                    {title}
                  </h4>
                </a>
              </Link>
              <div className="my-2 text-xs flex flex-col">
                <div className="flex space-x-2 flex-1 flex-wrap items-center text-sm pb-2">
                  {tags &&
                    JSON.parse(tags).map((tag: string, i: number) => (
                      <span
                        key={`tag-key-${i}`}
                        className="cursor-pointer select-none p-1 mr-2 rounded-md bg-gray-200 dark:bg-yellow-800 text-gray-600 dark:text-gray-200 text-xs inline-block"
                      >
                        #{tag}
                      </span>
                    ))}
                </div>
                <span className="text-gray-500 py-1 dark:text-gray-300">
                  {format(parseISO(publishedAt), "MMMM dd, yyyy")}
                </span>
              </div>
              <p className="text-gray-300 text-md">{summary}</p>
            </div>
          </div>
        )
      )}
    </div>
  );
};

const Home: NextPage<Props> = ({ posts }) => {
  return (
    <Container>
      <section className="pt-5">
        <div className="flex flex-col sm:flex-row-reverse w-lg dark:text-gray-200">
          <div className="relative flex flex-1 sm:justify-center mb-5 sm:mb-0">
            <div className="h-[176] w-[176]">
              <Image
                alt="Achuth Hadnoor"
                height={176}
                width={176}
                src="/images/achuth.jpg"
                className="rounded-full filter block absolute dark:grayscale"
              />
            </div>
          </div>
          <div className="flex:1 ">
            <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-1 text-black dark:text-white">
              Achuth Hadnoor
            </h1>
            <h2 className="text-gray-700 dark:text-gray-200 mb-4">
              Developer {"&"} UI/UX Designer
            </h2>
            <p className="text-md max-w-prose leading-loose text-gray-400 flex-wrap">
              👋 Hey, I am a
              <a
                target="_blank"
                rel="noreferrer"
                href="https://achuth.dev/dribbble"
                className="p-1 ml-1 bg-yellow-50 dark:bg-gray-900 rounded text-yellow-400"
              >
                designer
              </a>
              ,
              <a
                target="_blank"
                rel="noreferrer"
                href="https://achuth.dev/github"
                className="p-1 ml-1 bg-yellow-50 dark:bg-gray-900 rounded text-yellow-400"
              >
                developer
              </a>
              ,<br className="sm:show hidden" />
              <a
                target="_blank"
                rel="noreferrer"
                href="https://achuth.dev/medium"
                className="p-1 ml-1 mr-2 bg-yellow-50 dark:bg-gray-900 rounded text-yellow-400"
              >
                writer
              </a>
              and
              <a
                target="_blank"
                rel="noreferrer"
                href="https://achuth.dev/producthunt"
                className="p-1 ml-1 bg-yellow-50 dark:bg-gray-900 rounded text-yellow-400"
              >
                maker
              </a>
              . <br />I craft digital products that are used by creators.
            </p>
            <div className="mt-5 flex items-center">
              <hr className="w-16" />
              <Social />
            </div>
          </div>
        </div>
      </section>
      <section id="articles" className="my-10">
        <div className="flex mt-5">
          <h3 className=" font-bold flex-1 text-gray-600 dark:text-gray-200 text-2xl">
            Recent Articles
          </h3>
          <Link href="/blog">
            <a className="p-1 text-gray-400 hover:text-gray-500 text-xs">
              Read all posts →
            </a>
          </Link>
        </div>
        <RecentArticles posts={posts} />
      </section>
      <section>
        <div className="flex items-center mt-5">
          <h3 className=" font-bold flex-1 text-gray-600 dark:text-gray-200 text-2xl">
            Apps
          </h3>
          <a
            rel="noreferrer"
            className="p-1 text-gray-400 hover:text-gray-500  text-sm"
            href="https://achuth.dev/producthunt"
            target="_blank"
          >
            View all apps →
          </a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 px-2">
          <a rel="noreferrer" href="https://lapse.achuth.dev" target="_blank">
            <div className="mt-5 mb-3 flex items-center sm-pr-2">
              <div>
                <svg
                  width="65"
                  height="65"
                  viewBox="0 0 65 65"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="5"
                    y="5"
                    width="54.9331"
                    height="54.9331"
                    rx="10"
                    fill="#63E697"
                  ></rect>
                  <g filter="url(#filter0_d)">
                    <path
                      d="M21.2447 18.5H44C45.3807 18.5 46.5 19.6193 46.5 21V43.0956C46.5 44.7972 44.8368 46.0017 43.2201 45.4708L24.0029 39.1607C23.1664 38.886 22.536 38.1914 22.3434 37.3322L18.8053 21.5468C18.4551 19.9843 19.6435 18.5 21.2447 18.5Z"
                      stroke="black"
                      strokeWidth="5"
                    ></path>
                  </g>
                  <defs>
                    <filter
                      id="filter0_d"
                      x="13.2427"
                      y="13"
                      width="38.7573"
                      height="38.0993"
                      filterUnits="userSpaceOnUse"
                      colorInterpolationFilters="sRGB"
                    >
                      <feFlood
                        floodOpacity="0"
                        result="BackgroundImageFix"
                      ></feFlood>
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      ></feColorMatrix>
                      <feOffset></feOffset>
                      <feGaussianBlur stdDeviation="1.5"></feGaussianBlur>
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                      ></feColorMatrix>
                      <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow"
                      ></feBlend>
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_dropShadow"
                        result="shape"
                      ></feBlend>
                    </filter>
                  </defs>
                </svg>
              </div>
              <div className="px-2">
                <h3 className="font-semibold inline-block rounded-md px-2 text-sm text-gray-600 dark:text-gray-200 ">
                  lapse
                </h3>
                <p className="text-sm leading-relaxed text-gray-400  px-2">
                  An instant time-lapse screen recording app for mac and
                  windows.
                </p>
              </div>
            </div>
          </a>
          <a rel="noreferrer" href="https://lapse.achuth.dev" target="_blank">
            <div className="mt-5 mb-3 flex items-center sm-pr-2">
              <div>
                <svg
                  className=" shadow-md rounded"
                  width="55"
                  height="55"
                  viewBox="0 0 55 55"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    width="54.9331"
                    height="54.9331"
                    rx="10"
                    className="fill-gray-50"
                  ></rect>
                  <rect
                    x="12"
                    y="18"
                    width="29"
                    height="3"
                    rx="1"
                    fill="black"
                  ></rect>
                  <rect
                    x="12"
                    y="26"
                    width="15"
                    height="3"
                    rx="1"
                    fill="black"
                  ></rect>
                  <rect
                    x="12"
                    y="33"
                    width="26"
                    height="3"
                    rx="1"
                    fill="black"
                  ></rect>
                </svg>
              </div>
              <div className="px-2">
                <h3 className="font-semibold inline-block rounded-md px-2 text-sm text-gray-600 dark:text-gray-200 ">
                  Today HQ
                </h3>
                <p className="text-sm leading-relaxed text-gray-400  px-2">
                  Notes app for prodductive users.
                </p>
              </div>
            </div>
          </a>
        </div>
      </section>
      <section className="px-4 mt-10" id="newsletter">
        <Newletter />
      </section>
    </Container>
  );
};

export const getStaticProps = async () => {
  const posts = allBlogs.map((post) =>
    pick(post, ["slug", "title", "summary", "publishedAt", "image", "tags"])
  );

  const sortedPosts = posts.sort(
    (a, b) => Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt))
  );

  return { props: { posts: sortedPosts.slice(0, 4) } };
};

export default Home;
