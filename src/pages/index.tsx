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
      <section className="h-full max-h-screen flex flex-col align-middle sm:mb-56">
        <div className="flex flex-1 flex-col sm:flex-row-reverse w-lg dark:text-gray-200 sm:mt-40">
          <div className="flex  sm:flex-1 sm:justify-center mb-5 sm:mb-0">
            <div className="h-[176] w-[176]">
              <Image
                alt="Siva Krishna"
                height={176}
                width={176}
                src="/images/author.png"
                className=""
              />
            </div>
          </div>
          <div className="flex:1 ">
            <h1 className="font-semibold text-xl md:text-3xl  mb-1 text-black dark:text-white max-w-xl">
             Hallo! I’m <span className="text-[#0073ff]">Siva Krishna</span>
              <br/>- a designer  focused on User Centered Design, Interaction Design and Visual design to create delightful experiences.
            </h1>
          </div>
        </div>
      </section>
      <section id="work" className="">
        <h2 className="text-4xl">Work</h2>
        <div className="container grid grid-cols-1 sm:grid-cols-2">
        <Link href="/apps/lapse">
          <a className="bg-gray-50dark:bg-gray-800 hover:dark:bg-gray-800 p-4 m-2 rounded hover:transition hover:shadow-lg hover:duration-500 ease-in-out">
            <Image
              src="/images/apps/lapse.png"
              alt="Achuth Hadnoor"
              height={100}
              width={176}
              layout="responsive"
              className="h-[100] w-[180]"
            />
            <div className="flex items-center my-2">
              <h3 className="text-2xl font-semibold px-1">Lapse</h3>
              <div className="mx-2">
                <span className="bg-green-300 dark:bg-green-700 py-1 px-2 text-sm rounded mx-1">
                  new
                </span>
                <span className="bg-gray-100 dark:bg-gray-700 py-1 px-2 text-sm rounded mx-1">
                  macos
                </span>
              </div>
            </div>
            <p className="p-1">Timelapse screen recording app </p>
          </a>
        </Link>
        <div className="bg-gray-50dark:bg-gray-800 hover:dark:bg-gray-800 p-4 m-2 rounded hover:transition hover:shadow-lg hover:duration-500 ease-in-out">
          <Image
            src="/images/apps/silentshot.png"
            alt="Achuth Hadnoor"
            height={100}
            width={176}
            layout="responsive"
            className="h-[100] w-[180]"
          />
          <div className="flex items-center my-2">
            <h3 className="text-2xl font-semibold px-1">Silentshot</h3>
            <div className="mx-2">
              <span className="bg-yellow-300 dark:bg-yellow-600 py-1 px-2 text-sm rounded mx-1">
                coming soon
              </span>
              <span className="bg-gray-100 dark:bg-gray-700 py-1 px-2 text-sm rounded mx-1">
                macos
              </span>
            </div>
          </div>
          <p className="p-1">
            Capture screenshot to clipboard or save them to a directory in
            background
          </p>
        </div>

        <div className="bg-gray-50dark:bg-gray-800 hover:dark:bg-gray-800 p-4 m-2 rounded hover:transition hover:shadow-lg hover:duration-500 ease-in-out">
          <Image
            src="/images/apps/mirror-2.png"
            alt="Achuth Hadnoor"
            height={100}
            width={176}
            layout="responsive"
            className="h-[100] w-[180]"
          />
          <div className="flex items-center my-2">
            <h3 className="text-2xl font-semibold px-1">Mirror</h3>
            <div className="mx-2">
              <span className="bg-yellow-300 dark:bg-yellow-600 py-1 px-2 text-sm rounded mx-1">
                coming soon
              </span>
              <span className="bg-gray-100 dark:bg-gray-700 py-1 px-2 text-sm rounded mx-1">
                macos
              </span>
            </div>
          </div>
          <p className="p-1">
            Webcam companion for your native screen recorder and also to preview
            your zoom calls 🤭
          </p>
        </div>
        <div className="bg-gray-50dark:bg-gray-800 hover:dark:bg-gray-800 p-4 m-2 rounded hover:transition hover:shadow-lg hover:duration-500 ease-in-out">
          <Image
            src="/images/apps/today.png"
            alt="Achuth Hadnoor"
            height={100}
            width={176}
            layout="responsive"
            className="h-[100] w-[180]"
          />
          <div className="flex items-center my-2">
            <h3 className="text-2xl font-semibold px-1">Today</h3>
            <div className="mx-2">
              <span className="bg-yellow-300 dark:bg-yellow-600 py-1 px-2 text-sm rounded mx-1">
                coming soon
              </span>
              <span className="bg-gray-100 dark:bg-gray-700 py-1 px-2 text-sm rounded mx-1">
                macos
              </span>
            </div>
          </div>
          <p className="p-1">
            A simple notes app on menubar to jot down your thoughts 💭
          </p>
        </div>
        <div className="bg-gray-50dark:bg-gray-800 hover:dark:bg-gray-800 p-4 m-2 rounded hover:transition hover:shadow-lg hover:duration-500 ease-in-out">
          <Image
            src="/images/apps/snipcode.png"
            alt="Achuth Hadnoor"
            height={100}
            width={176}
            layout="responsive"
            className="h-[100] w-[180]"
          />
          <div className="flex items-center my-2">
            <h3 className="text-2xl font-semibold px-1">Snipcode</h3>
            <div className="mx-2">
              <span className="bg-yellow-300 dark:bg-yellow-600 py-1 px-2 text-sm rounded mx-1">
                coming soon
              </span>
              <span className="bg-gray-100 dark:bg-gray-700 py-1 px-2 text-sm rounded mx-1">
                macos
              </span>
              <span className="bg-gray-100da rk:bg-gray-700 py-1 px-2 text-sm rounded mx-1">
                web
              </span>
            </div>
          </div>
          <p className="p-1">
            Capture your frequently used code snippets from any app and share to
            any app instantly{" "}
          </p>
        </div>
        <div className="bg-gray-50dark:bg-gray-800 hover:dark:bg-gray-800 p-4 m-2 rounded hover:transition hover:shadow-lg hover:duration-500 ease-in-out">
          <Image
            src="/images/apps/snippy.png"
            alt="Achuth Hadnoor"
            height={100}
            width={176}
            layout="responsive"
            className="h-[100] w-[180]"
          />
          <div className="flex items-center my-2">
            <h3 className="text-2xl font-semibold px-1">Snippy</h3>
            <div className="mx-2">
              <span className="bg-yellow-300 dark:bg-yellow-600 py-1 px-2 text-sm rounded mx-1">
                coming soon
              </span>
              <span className="bg-gray-100 dark:bg-gray-700 py-1 px-2 text-sm rounded mx-1">
                macos
              </span>
              <span className="bg-gray-100 dark:bg-gray-700 py-1 px-2 text-sm rounded mx-1">
                web
              </span>
            </div>
          </div>
          <p className="p-1">A space for your creative work on the web</p>
        </div>
      </div>
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
