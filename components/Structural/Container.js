import { useRouter } from "next/router";
import Head from "next/head";

const Container = ({ children, page, ...customMeta, }) => {
  const router = useRouter();

  const meta = {
    title:
      `${page || "Bulletproof Blog"} | ${!page ? "Front-End Developer Tips, Techniques, and Tutorials" : "Bulletproof Blog"}`,
    description: `Bulletproof Code is a passion project dedicated to taking anyone with any level of technical knowledge and giving them the skills, mentality, and knowledge necessary to begin a career as a software developer!`,
    image: "https://bulletproof-code.com/static/images/banner.png",
    type: "website",
    ...customMeta,
  };

  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta
          property="og:url"
          content={`https://bulletproof-code.com${router.asPath}`}
        />
        <link
          rel="canonical"
          href={`https://bulletproof-code.com${router.asPath}`}
        />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="Bulletproof Code" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@CodeBulletproof" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
        {meta.date && (
          <meta property="article:published_time" content={meta.date} />
        )}
      </Head>
      {children}
    </>
  );
};

export default Container;
