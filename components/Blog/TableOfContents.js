import Link from "next/link";
import { v4 } from "uuid";

const TableOfContents = ({ intro, partOne, partTwo, partThree, outro }) => {
  return (
    <section className="">
      {/* Intro */}
      <p className="">Intro</p>
      <ul className="flex flex-col list-roman">
        {intro.map((section) => (
          <Link href={`#${section.split(" ").join("-")}`} key={v4()}>
            <a className="">{section}</a>
          </Link>
        ))}
      </ul>

      {/* partOne */}
      <p>{partOne.name}</p>
      <ul className="flex flex-col list-roman">
        {partOne.chapters.map((chapter) => (
          <Link href={`#${chapter.split(" ").join("-")}`} key={v4()}>
            <a className="">{chapter}</a>
          </Link>
        ))}
      </ul>

      {/* partTwo */}

      {/* partThree */}

      {/* Outro */}
    </section>
  );
};

export default TableOfContents;
