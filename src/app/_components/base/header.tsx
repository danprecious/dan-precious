import Link from "next/link";
import SubText from "../utilities/subText";

const Header = () => {
  return (
    <div className="flex justify-center items-center lg:py-5 py-3 lg:px-10 px-3 ">
      <Link href="/">
        <SubText
          styles="font-bold text-transparent bg-gradient-to-b from-0% from-white to-80% to-stone-400 bg-clip-text"
          text="DanXPrecious"
        />
      </Link>
    </div>
  );
};

export default Header;
