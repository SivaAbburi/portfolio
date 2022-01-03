import Container from "@/components/Container";
import Image from "next/image";
import Link from "next/link";

const Apps = () => {
  return (
    <Container>
      <h1 className="px-2 font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
        Apps
      </h1>
      <p className="px-2 py-4">Apps that help you during the day 👻</p>
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
    </Container>
  );
};

export default Apps;
