import Link from "next/link";
import FilterBtn from "./btns/filter-btn";
import MapBtn from "./btns/map-btn";
import { useRouter } from "next/router";

const Nav = () => {
  const router = useRouter();

  return (
    <nav className="border-b border-m-blue-2 flex gap-1 mobile:gap-2 items-center w-full">
      <Link className="hover:text-blue-600 px-2 py-1" href="/">
        Home
      </Link>
      <Link className="hover:text-blue-600 px-2 py-1" href="/data">
        Data
      </Link>
      <Link className="hover:text-blue-600 flex-1 px-2 py-1" href="/about">
        About
      </Link>
      {router.pathname === "/" && (
        <>
          <MapBtn />
          <FilterBtn />
        </>
      )}
    </nav>
  );
};

export default Nav;
