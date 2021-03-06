import { useState, useEffect } from "react";
import Link from "next/link";
import Container from "../components/Structural/Container";

const SqueezeLayout = ({ children, offer }) => {
  const [loadScript, setLoadScript] = useState(false);

  useEffect(() => {
    setLoadScript(true);
  }, []);

  return (
    <>
      <Container
        title={`${offer.title} | Bulletproof Code`}
        description={offer.name}
        image={`https://bulletproof-code.com${offer.image}`}
      >
        <main className="max-w-7xl mx-auto px-6 mt-12 min-h-screen">
          {children}
        </main>
        <footer className="text-center my-12">
          <Link href="/blog">
            <a className="text-gray-500 text-sm underline mx-auto hover:no-underline">
              No thanks, take me to the blog instead.
            </a>
          </Link>
        </footer>
      </Container>
    </>
  );
};

export default SqueezeLayout;
