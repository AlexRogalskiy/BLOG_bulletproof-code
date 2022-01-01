import { FireIcon, HeartIcon, ThumbUpIcon } from "@heroicons/react/solid";

// !
export const moods = [
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
    name: "Thumbsy",
    value: "thumbsy",
    icon: ThumbUpIcon,
    iconColor: "text-white",
    bgColor: "bg-sky-500",
  },
];

// !
// TSK: Memoize the values!
export function getPostReactionCount(comments) {
  let thumbsyCount =
    comments?.filter((comment) => comment.mood.value === "thumbsy").length || 0;
  let lovedCount =
    comments?.filter((comment) => comment.mood.value === "loved").length || 0;
  let excitedCount =
    comments?.filter((comment) => comment.mood.value === "excited").length || 0;
  // let totalReactions = comments.length;

  return { thumbsyCount, lovedCount, excitedCount };
}
