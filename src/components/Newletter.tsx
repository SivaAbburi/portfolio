import React from "react";
import { useState } from "react";

export default function Newletter() {
  const [inputValue, setInputValue] = useState("");

  const SubmitValue = (e: { preventDefault: () => void }) => {
    e.preventDefault();
  };

  const onChange = (e: { target: { value: React.SetStateAction<string> } }) => {
    setInputValue(e.target.value);
  };
  return (
    <div className="mx-auto my-5 p-2 sm:p-8 max-w-xl space-y-4 border-t border-b border-gray-300 border-dashed dark:border-gray-700 bg-elevated bg-gray-100 dark:bg-gray-800 dark:text-gray-200">
      <div className="space-y-2 ">
        <p className="flex items-center font-semibold text-primary">
          Subscribe to my newsletter
        </p>
        <p className="text-tertiary  dark:text-gray-300 leading-relaxed">
          {/* {`In this weekly newsletter I'm going to share with you what's new and cool in the world of web development, with content for everyone, from beginners to pros. There's also an interview question of the week, where you can test your skills and I'll share the results the following week. I'll also send you jokes and stories. I won't spam though, I promise.`} */}
          Get weekly inspiration and tips on product building, marketing and
          growing audience.
          <a
            rel="noopener"
            href="https://twitter.com/achuth_hadnoor/"
            className="ml-1 px-2 font-normal rounded-sm p-0.5 -mx-0.5 bg-blue-500 text-primary  dark:text-gray-200"
          >
            follow me on Twitter
          </a>
        </p>
      </div>
      <form
        className="grid grid-cols-1 gap-2 mt-2 md:grid-cols-3"
        onSubmit={SubmitValue}
      >
        <label className="md:col-span-2">
          <span className="sr-only">Email address</span>
          <input
            type="email"
            className="px-2 py-1 w-full rounded dark:bg-gray-900 outline-none focus:outline-blue-900"
            placeholder="Email address"
            name="email"
            value={inputValue}
            onChange={onChange}
            required
          />
        </label>
        <button
          disabled
          type="submit"
          className="w-full bg-blue-800 text-gray-200 rounded py-2 md:py-1 cursor-pointer"
        >
          Subscribe
        </button>
      </form>
      <div className="text-xs">6,293 subscribers – 34 issues</div>
    </div>
  );
}
