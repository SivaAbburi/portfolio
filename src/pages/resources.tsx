import Container from "@/components/Container";
import { useEffect, useState } from "react";
import { Resources as resourcesData } from "@/data/resources";

const Resources = ({ tab, tabs, resources }: any) => {
  const [selectedTab, setSelectedTab] = useState(tab);
  useEffect(() => {
    setSelectedTab(tab);
  }, [tab]);
  return (
    <Container
      title="Resources - Tools and articles"
      description="A curated list of resources for web developers"
      image="/images/resources.png"
    >
      <h1 className="px-2 font-bold text-3xl md:text-5xl tracking-tight mb-4 dark:dark:bg-gray-800 text-gray-50">
        Resources
      </h1>
      <p className="px-2 py-4">
        Intresting and usefull Portfolios, Articles,Videos around the web.
      </p>
      <div className="grid sm:grid-cols-3">
        <div className="col-span-2 p-4 sm:col-span-1">
          <h2 className="text-indigo-600 dark:text-yellow-600 font-semibold py-4">
            Categories
          </h2>
          <ul className="capitalize text-sm grid grid-cols-2 sm:grid-cols-1">
            {tabs.map((t: string, i: number) => (
              <li
                key={`t-${i}-${t}`}
                onClick={() => setSelectedTab(t)}
                className={`${
                  t === selectedTab
                    ? "bg-indigo-50 dark:bg-gray-800 text-indigo-600 dark:text-yellow-600  sm:border-indigo-600 dark:sm:border-yellow-600 sm:border-r-4"
                    : "hover:bg-indigo-50 dark:hover:bg-gray-800 "
                } mt-2 p-2 hover:text-indigo-600 dark:hover:text-yellow-600  cursor-pointer  rounded-md  text-left`}
              >
                {t}
              </li>
            ))}
          </ul>
        </div>
        <div className="sm:col-span-2">
          <div className="grid sm:grid-cols-2 mt-5">
            {resources.map((bookmark: any, i: number) => {
              if (selectedTab === "All" || selectedTab === undefined) {
                return (
                  <a
                    rel="noreferrer"
                    href={bookmark.link}
                    target="_blank"
                    key={`resources-${i}`}
                    className="rounnded p-4 m-2 max-w-md overflow-auto dark:bg-gray-800 bg-gray-50 text-a"
                    title={bookmark.url}
                  >
                    <div className="p-1 mb-4 text-2xl rounded">
                      {bookmark.title}
                    </div>
                    <span
                      className={`uppercase p-1 mx-2 mb-4 rounded-md dark:bg-gray-700 bg-indigo-50 dark:text-yellow-400 text-indigo-400 text-xs inline-block`}
                    >
                      {bookmark.tag}
                    </span>
                    <div className="p-1 text-sm text-gray-400">
                      {bookmark.description}
                    </div>
                  </a>
                );
              }
              return (
                bookmark.tag === selectedTab && (
                  <a
                    rel="noreferrer"
                    href={bookmark.link}
                    target="_blank"
                    key={`resources-${i}`}
                    className="rounnded p-4 m-2 max-w-md overflow-auto dark:bg-gray-800 bg-gray-50 text-a"
                    title={bookmark.url}
                  >
                    <div className="p-1 mb-4 text-2xl rounded">
                      {bookmark.title}
                    </div>
                    <span
                      className={`uppercase p-1 mx-2 mb-4 rounded-md dark:bg-gray-700 bg-indigo-50 dark:text-yellow-400 text-indigo-400 text-xs inline-block`}
                    >
                      {bookmark.tag}
                    </span>
                    <div className="p-1 text-sm text-gray-400">
                      {bookmark.description}
                    </div>
                  </a>
                )
              );
            })}
          </div>
        </div>
      </div>
    </Container>
  );
};

Resources.getInitialProps = ({ query }: any) => {
  let tab = "All";
  if (query.tab) {
    tab = query.tab;
  }
  let tabs = [
    "All",
    "Books",
    "Blog",
    "Color",
    "Color Generator",
    "Community",
    "Design Patterns",
    "Design Systems",
    "Design Studios",
    "Emails",
    "Gaming",
    "Guides",
    "Media",
    "Newsletters",
    "Plugins",
    "Resources",
    "Software & Tools",
    "Web Standards",
  ];
  return {
    tab: tab,
    tabs: tabs,
    resources: resourcesData,
  };
};
export default Resources;
