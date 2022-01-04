import Image from "next/image";
import Link from "next/link";
import { v4 } from "uuid";
import CategoryBubble from "./CategoryBubble";

const BlogCard = ({ postDetails, isPriority = false }) => {
  const { title, subTitle, excerpt, coverImage, categories } =
    postDetails.frontMatter;

  return (
    <article className="bg-white shadow-md rounded-lg hover:scale-105 hover:shadow-lg hover:bg-gray-50 transition-all">
      <Link href={"/blog/" + postDetails.slug} passHref>
        <a>
          <div className="relative w-full h-52">
            <Image
              src={coverImage}
              alt={title}
              layout="fill"
              objectFit="cover"
              objectPosition="50% 15%"
              className="rounded-lg shadow-lg"
              priority={isPriority}
            />
          </div>

          <div className="px-8 space-y-2">
            {categories.map((category) => (
              <CategoryBubble category={category} key={v4()} />
            ))}

            <h2 className="font-black text-2xl">{title}</h2>
            <h3 className="font-bold text-xl">{subTitle}</h3>
            <p className="leading-7 pb-2 text-gray-600 font-light">{excerpt}</p>
          </div>
        </a>
      </Link>
      <Link href={"/blog/" + postDetails.slug}>
        <a className="text-blue-600 px-8 block py-4 font-medium text-lg hover:text-sky-700 hover:bg-gray-100 transition-colors">
          Read More
        </a>
      </Link>
    </article>
  );
};

export default BlogCard;
