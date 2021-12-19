import Link from "next/link";
import Image from "next/image";

const CustomLink = (props) => {
  const href = props.href;
  const isInternalLink = href && (href.startsWith("/") || href.startsWith("#"));

  console.log("href:", href);

  if (isInternalLink) {
    return (
      <Link href={href}>
        <a {...props}>{props.children}</a>
      </Link>
    );
  }

  return <a target="_blank" rel="noopener noreferrer" {...props} />;
};

const CustomImage = (props) => {
  return <Image alt={props.alt} className="rounded-md" {...props} />;
};

export const MDXComponents = {
  Image: CustomImage,
  a: CustomLink,
  //   ImageWithTheme,
  //   Analytics,
  //   ConsCard,
  //   ProsCard,
  //   Step,
  //   YouTube,
};
