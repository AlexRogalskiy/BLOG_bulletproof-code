import Link from "next/link";

const FancyHeaderButton = () => {
  return (
    <Link href="/">
      <a className="w-full md:w-auto flex md:inline-flex xl:whitespace-nowrap xl:ml-8 items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm xl:text-base font-medium text-white bg-lightBlue-600 hover:bg-lightBlue-700">
        FREE 100+ Page Front-End eBook
      </a>
    </Link>
  );
};

export default FancyHeaderButton;
