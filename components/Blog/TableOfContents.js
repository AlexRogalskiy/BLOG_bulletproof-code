import Link from "next/link";
import { v4 } from "uuid";

const TableOfContents = ({ intro, partOne, partTwo, partThree, outro }) => {
  return (
    <section className="mb-12 md:mb-24">
      <h2 className="">Table of Contents</h2>

      <article className="bg-yellow-100 px-4 py-6 md:p-8 rounded-2xl space-y-12 shadow-lg">
        {/* Intro */}
        <section className="toc-section">
          <h3>Intro</h3>
          <ul>
            {intro.map((section) => (
              <li key={v4()}>
                <Link href={`#${section.split(" ").join("-")}`}>
                  <a>{section}</a>
                </Link>
              </li>
            ))}
          </ul>
        </section>

        {/* partOne */}
        <section className="toc-section">
          <h3>{partOne.name}</h3>
          <p>{partOne.description}</p>
          <ul>
            {partOne.chapters.map((chapter) => (
              <li key={v4()}>
                <Link href={`#${chapter.split(" ").join("-")}`}>
                  <a>{chapter}</a>
                </Link>
              </li>
            ))}
          </ul>
        </section>

        {/* partTwo */}
        <section className="toc-section">
          <h3>{partTwo.name}</h3>
          <p>{partOne.description}</p>
          <ul>
            {partTwo.chapters.map((chapter) => (
              <li key={v4()}>
                <Link href={`#${chapter.split(" ").join("-")}`}>
                  <a>{chapter}</a>
                </Link>
              </li>
            ))}
          </ul>
        </section>

        {/* partThree */}
        <section className="toc-section">
          <h3>{partThree.name}</h3>
          <p>{partOne.description}</p>
          <ul>
            {partThree.chapters.map((chapter) => (
              <li key={v4()}>
                <Link href={`#${chapter.split(" ").join("-")}`}>
                  <a>{chapter}</a>
                </Link>
              </li>
            ))}
          </ul>
        </section>

        {/* Outro */}
        <section className="toc-section">
          <h3>Outro</h3>
          <ul>
            {outro.map((section) => (
              <li key={v4()}>
                <Link href={`#${section.split(" ").join("-")}`}>
                  <a>{section}</a>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </article>
    </section>
  );
};

export default TableOfContents;
