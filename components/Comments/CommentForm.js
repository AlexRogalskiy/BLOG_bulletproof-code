import { Fragment, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { EmojiHappyIcon as EmojiHappyIconOutline } from "@heroicons/react/outline";
import { Listbox, Transition } from "@headlessui/react";
import { classNames } from "../../utils/css.helpers";
import Image from "next/image";

const CommentForm = ({ text, setText, mood, setMood, moods, onSubmit }) => {
  const { isAuthenticated, logout, loginWithPopup, user } = useAuth0();

  return (
    <form onSubmit={onSubmit} className="max-w-4xl mx-auto">
      <div className="flex items-start space-x-4">
        <div className="flex-shrink-0">
          <Image
            className="rounded-full"
            width={40}
            height={40}
            src={user?.picture || "/static/favicons/android-chrome-192x192.png"}
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
                rows={5}
                name="comment"
                id="comment"
                className="block w-full border-0 border-b border-transparent p-4 pb-2 resize-none focus:ring-0 focus:border-sky-500 sm:text-base"
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
            {isAuthenticated ? (
              <div className="pt-2 flex justify-between">
                <div className="flex items-center space-x-5">
                  <div className="flow-root"></div>
                  <div className="flow-root">
                    <Listbox value={mood} onChange={setMood}>
                      {({ open }) => (
                        <>
                          <Listbox.Label className="sr-only">
                            Your mood
                          </Listbox.Label>
                          <div className="relative">
                            <Listbox.Button className="relative -m-2 w-10 h-10 rounded-full inline-flex items-center justify-center text-gray-400 hover:text-gray-500">
                              <span className="flex items-center justify-center">
                                {mood.value === null ? (
                                  <span>
                                    <EmojiHappyIconOutline
                                      className="flex-shrink-0 h-6 w-6"
                                      aria-hidden="true"
                                    />
                                    <span className="sr-only">
                                      Add your mood
                                    </span>
                                  </span>
                                ) : (
                                  <span>
                                    <div
                                      className={classNames(
                                        mood.bgColor,
                                        "w-8 h-8 rounded-full flex items-center justify-center"
                                      )}
                                    >
                                      <mood.icon
                                        className="flex-shrink-0 h-5 w-5 text-white"
                                        aria-hidden="true"
                                      />
                                    </div>
                                    <span className="sr-only">{mood.name}</span>
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
                              <Listbox.Options className="absolute z-50 -ml-6 w-60 bg-white shadow rounded-lg py-3 text-base ring-1 ring-black ring-opacity-5 focus:outline-none sm:ml-auto sm:w-64 sm:text-sm">
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
                  <button
                    type="submit"
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-sky-500 hover:bg-sky-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500"
                  >
                    Post
                  </button>
                </div>
              </div>
            ) : (
              <button
                type="button"
                className="py-2 px-4 mt-3 rounded bg-sky-500 text-white disabled:opacity-40 hover:bg-sky-600"
                onClick={() => loginWithPopup()}
              >
                Log In
              </button>
            )}
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
