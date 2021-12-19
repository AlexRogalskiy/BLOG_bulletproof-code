import { useRouter } from "next/router";
import Head from "next/head";

const Container = ({ children, ...customMeta }) => {
  const router = useRouter();
  const meta = {
    title:
      "Bulletproof Blog | Front-End Developer Tips, Techniques, and Tutorials",
    description: `Front-end developer tsk`,
    image: "https://blog.bulletproof-code.com/static/images/banner.png",
    type: "website",
    ...customMeta,
  };

  return (
    <div className="bg-gray-50 dark:bg-gray-900">
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta
          property="og:url"
          content={`https://blog.bulletproof-code.com${router.asPath}`}
        />
        <link
          rel="canonical"
          href={`https://blog.bulletproof-code.com${router.asPath}`}
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
      {/* TSK: Header */}
      <main>{children}</main>
      {/* TSK: Footer */}
    </div>
  );
};

export default Container;
