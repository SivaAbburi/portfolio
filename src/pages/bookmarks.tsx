import Container from "@/components/Container";
import { BOOKMARKS as bookmarks } from "@/data/bookmarks";
export default function Bookmarks() {
  return (
    <Container
      title="Bookmarks"
      description="A collection of items on my confused mind 😜"
      image="/images/bookmarks.png"
    >
      <h1 className="px-2 font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
        Bookmarks
      </h1>
      <p className="px-2 py-4">My collection of some randome links 😝.</p>
      <div className="grid sm:grid-cols-2 mt-5">
        {bookmarks.map((bookmark, i) => (
          <>
            {bookmark.url && (
              <a
                rel="noreferrer"
                href={bookmark.url}
                target="_blank"
                key={`bookmark-${i}`}
                className="p-4 m-2 max-w-md overflow-auto bg-gray-50 dark:bg-gray-800 rounded"
                title={bookmark.url}
              >
                <div className="p-1">{bookmark.title}</div>
                <div className="text-xs text-gray-400 max-w-md overflow-hidden">
                  {bookmark.url}
                </div>
              </a>
            )}
          </>
        ))}
      </div>
    </Container>
  );
}
