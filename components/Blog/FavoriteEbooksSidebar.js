import { v4 } from "uuid";
import Link from "next/link";
import Image from "next/image";

const myFavoriteGuides = [
  {
    title: "Become a PAID Front-End Developer",
    image: "/static/images/bp-front-end/BP_Full-Offer-Ad.png",
    slug: "bulletproof-guide-to-becoming-a-paid-front-end-developer",
  },
];

const FavoriteEbooksSidebar = () => {
  return (
    <section className="bg-white shadow-lg w-full lg:w-3/12 h-full mt-12 lg:mt-0 text-center ">
      <h2 className="text-xl font-bold mt-6">
        Read my Favorite Bulletproof Guides!
      </h2>
      <p className="mt-2 text-gray-500">P.S. They are all FREE!</p>
      <div className="space-y-12 mt-8 mb-12">
        {myFavoriteGuides.map((guide, idx) => (
          <article key={v4()} className="hover:scale-105 transition-all">
            <Link href={"/blog/" + guide.slug} passHref>
              <a>
                <div className="relative w-full h-96 lg:h-64">
                  <Image
                    src={guide.image}
                    alt={guide.title}
                    layout="fill"
                    objectFit="contain"
                    priority={idx < 3}
                  />
                </div>
              </a>
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
};

export default FavoriteEbooksSidebar;
