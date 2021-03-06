import { useAuth0 } from "@auth0/auth0-react";
import Image from "next/image";
import { distanceToNow } from "../../utils/time.helpers";

const CommentList = ({ comments, onDelete }) => {
  const { user } = useAuth0();

  return (
    <section className="space-y-6 mt-10">
      {comments?.map((comment) => {
        const isAuthor = user && user.sub === comment.user.sub;
        const isAdmin =
          user && user.email === process.env.NEXT_PUBLIC_AUTH0_ADMIN_EMAIL;

        return (
          <div key={comment.created_at} className="flex space-x-4 mt-12">
            <div className="flex-shrink-0">
              <Image
                src={comment.user.picture}
                alt={comment.user.name}
                width={40}
                height={40}
                className="rounded-full"
              />
            </div>

            <div className="flex-grow">
              <div className="flex space-x-2">
                <b>{comment.user.name}</b>
                <time className="text-gray-400 mr-auto">
                  {distanceToNow(comment.created_at)}
                </time>
                {(isAdmin || isAuthor) && (
                  <button
                    className="text-gray-400 hover:text-red-500"
                    onClick={() => onDelete(comment)}
                    aria-label="Close"
                  >
                    x
                  </button>
                )}
              </div>

              <div>{comment.text}</div>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default CommentList;
