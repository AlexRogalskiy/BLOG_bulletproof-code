import { Fragment, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { EmojiHappyIcon as EmojiHappyIconOutline } from "@heroicons/react/outline";
import { Listbox, Transition } from "@headlessui/react";
import {
  EmojiHappyIcon as EmojiHappyIconSolid,
  EmojiSadIcon,
  FireIcon,
  HeartIcon,
  ThumbUpIcon,
  XIcon,
} from "@heroicons/react/solid";
import { classNames } from "../../utils/css.helpers";
import Image from "next/image";

const moods = [
  {
    name: "Excited",
    value: "excited",
    icon: FireIcon,
    iconColor: "text-white",
    bgColor: "bg-red-500",
  },
  {
    name: "Loved",
    value: "loved",
    icon: HeartIcon,
    iconColor: "text-white",
    bgColor: "bg-pink-400",
  },
  {
    name: "Happy",
    value: "happy",
    icon: EmojiHappyIconSolid,
    iconColor: "text-white",
    bgColor: "bg-green-400",
  },
  {
    name: "Sad",
    value: "sad",
    icon: EmojiSadIcon,
    iconColor: "text-white",
    bgColor: "bg-sky-400",
  },
  {
    name: "Thumbsy",
    value: "thumbsy",
    icon: ThumbUpIcon,
    iconColor: "text-white",
    bgColor: "bg-sky-500",
  },
  {
    name: "I feel nothing",
    value: null,
    icon: XIcon,
    iconColor: "text-gray-400",
    bgColor: "bg-transparent",
  },
];

const CommentForm = ({ text, setText, onSubmit }) => {
  const { isAuthenticated, logout, loginWithPopup, user } = useAuth0();

  const [selected, setSelected] = useState(moods[5]);

  return (
    <form onSubmit={onSubmit}>
      <div className="flex items-start space-x-4">
        <div className="flex-shrink-0">
          <Image
            className="rounded-full"
            width={40}
            height={40}
            src={user?.picture || "/favicon/android-chrome-192x192.png"}
            alt={user?.name || "Bulletproof Logo"}
          />
        </div>
        <div className="min-w-0 flex-1">
          <div>
            <div className="border-b border-gray-200 focus-within:border-sky-500">
              <label htmlFor="comment" className="sr-only">
                Add your comment
              </label>
              <textarea
                rows={3}
                name="comment"
                id="comment"
                className="block w-full border-0 border-b border-transparent p-0 pb-2 resize-none focus:ring-0 focus:border-sky-500 sm:text-sm"
                disabled={!isAuthenticated}
                placeholder={
                  isAuthenticated
                    ? `What are your thoughts?`
                    : "Please login to leave a comment"
                }
                onChange={(e) => setText(e.target.value)}
                value={text}
              />
            </div>
            <div className="pt-2 flex justify-between">
              <div className="flex items-center space-x-5">
                <div className="flow-root"></div>
                <div className="flow-root">
                  <Listbox value={selected} onChange={setSelected}>
                    {({ open }) => (
                      <>
                        <Listbox.Label className="sr-only">
                          Your mood
                        </Listbox.Label>
                        <div className="relative">
                          <Listbox.Button className="relative -m-2 w-10 h-10 rounded-full inline-flex items-center justify-center text-gray-400 hover:text-gray-500">
                            <span className="flex items-center justify-center">
                              {selected.value === null ? (
                                <span>
                                  <EmojiHappyIconOutline
                                    className="flex-shrink-0 h-6 w-6"
                                    aria-hidden="true"
                                  />
                                  <span className="sr-only">Add your mood</span>
                                </span>
                              ) : (
                                <span>
                                  <div
                                    className={classNames(
                                      selected.bgColor,
                                      "w-8 h-8 rounded-full flex items-center justify-center"
                                    )}
                                  >
                                    <selected.icon
                                      className="flex-shrink-0 h-5 w-5 text-white"
                                      aria-hidden="true"
                                    />
                                  </div>
                                  <span className="sr-only">
                                    {selected.name}
                                  </span>
                                </span>
                              )}
                            </span>
                          </Listbox.Button>

                          <Transition
                            show={open}
                            as={Fragment}
                            leave="transition ease-in duration-100"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                          >
                            <Listbox.Options className="absolute z-10 -ml-6 w-60 bg-white shadow rounded-lg py-3 text-base ring-1 ring-black ring-opacity-5 focus:outline-none sm:ml-auto sm:w-64 sm:text-sm">
                              {moods.map((mood) => (
                                <Listbox.Option
                                  key={mood.value}
                                  className={({ active }) =>
                                    classNames(
                                      active ? "bg-gray-100" : "bg-white",
                                      "cursor-default select-none relative py-2 px-3"
                                    )
                                  }
                                  value={mood}
                                >
                                  <div className="flex items-center">
                                    <div
                                      className={classNames(
                                        mood.bgColor,
                                        "w-8 h-8 rounded-full flex items-center justify-center"
                                      )}
                                    >
                                      <mood.icon
                                        className={classNames(
                                          mood.iconColor,
                                          "flex-shrink-0 h-5 w-5"
                                        )}
                                        aria-hidden="true"
                                      />
                                    </div>
                                    <span className="ml-3 block font-medium truncate">
                                      {mood.name}
                                    </span>
                                  </div>
                                </Listbox.Option>
                              ))}
                            </Listbox.Options>
                          </Transition>
                        </div>
                      </>
                    )}
                  </Listbox>
                </div>
              </div>
              <div className="flex-shrink-0">
                {isAuthenticated ? (
                  <button
                    type="submit"
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-sky-500 hover:bg-sky-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500"
                  >
                    Post
                  </button>
                ) : (
                  <button
                    type="button"
                    className="py-2 px-4 rounded bg-sky-500 text-white disabled:opacity-40 hover:bg-sky-600"
                    onClick={() => loginWithPopup()}
                  >
                    Log In
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center mt-4">
        {isAuthenticated && (
          <button className="text-gray-500 ml-auto" onClick={() => logout()}>
            Log out
          </button>
        )}
      </div>
    </form>
  );
};

export default CommentForm;
