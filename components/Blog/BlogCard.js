import Image from "next/image";
import Link from "next/link";
import { v4 } from "uuid";
import CategoryBubble from "./CategoryBubble";

const BlogCard = ({ postDetails }) => {
  const { title, subTitle, excerpt, coverImage, categories } =
    postDetails.frontMatter;

  return (
    <article>
      <Link href={"/blog/" + postDetails.slug} passHref>
        <a className="">
          <div className="relative w-full h-52">
            <Image
              src={coverImage}
              alt={title}
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              className="rounded-lg shadow-lg"
              priority
            />
          </div>

          <div className="px-8 space-y-2">
            {categories.map((category) => (
              <CategoryBubble category={category} key={v4()} />
            ))}

            <h2 className="font-black text-2xl">{title}</h2>
            <h3 className="font-bold text-xl">{subTitle}</h3>
            <p className="leading-5">{excerpt}</p>
            <Link href={"/blog/" + postDetails.slug}>
              <a className="text-blue-500">Read More</a>
            </Link>
          </div>
        </a>
      </Link>
    </article>
  );
};

export default BlogCard;
