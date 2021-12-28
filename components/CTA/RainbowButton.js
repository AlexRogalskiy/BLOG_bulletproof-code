import Link from "next/link";

const RainbowButton = ({ text, extra }) => {
  return (
    <Link href="/">
      <a className="rainbow-border">
        {text}{" "}
        {extra && (
          <span className="hidden lg:inline-block pl-1 text-gray-700">
            {extra}
          </span>
        )}
      </a>
    </Link>
  );
};

export default RainbowButton;
