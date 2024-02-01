import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import FilterBtn from "./btns/filter-btn";
import MapBtn from "./btns/map-btn";
import Button from "../global/button/button";
import { useRouter } from "next/router";
import { burgerSvg } from "@/utils/svg";
import useOutsideClick from "../hooks/useOutsideClick";
import useScreenWidth from "../hooks/useScreenWidth";

const Nav = () => {
  const router = useRouter();
  const navRef = useRef(null);
  const { screenWidth } = useScreenWidth();
  const [toggledNav, setToggledNav] = useState(false);

  useEffect(() => {
    setToggledNav(false);
  }, [screenWidth]);

  useOutsideClick(navRef, () => setToggledNav(false));

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setToggledNav(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const navigation = () => {
    const boxStyles =
      screenWidth < 435
        ? toggledNav
          ? `flex-col min-w-[375px] absolute left-[-15px] top-[-20px] bg-m-blue-1 z-10 rounded-lg border border-m-eb border-solid py-4`
          : "hidden"
        : "";

    const linkStyles =
      screenWidth < 435
        ? "hover:bg-m-color-1 hover:text-m-blue-1 w-full px-4 py-2"
        : "hover:text-m-color-1";

    return (
      <div className={`flex items-center gap-2 min-h-[55px] ${boxStyles}`}>
        <Link
          className={`${linkStyles}  py-1`}
          href="/"
          onClick={() => setToggledNav(false)}
        >
          Home
        </Link>
        <Link
          className={`${linkStyles} hidden -blue-2 py-1`}
          href="/data"
          onClick={() => setToggledNav(false)}
        >
          Data
        </Link>
        <Link
          className={`${linkStyles}  flex-1 py-1`}
          href="/about"
          onClick={() => setToggledNav(false)}
        >
          About
        </Link>
      </div>
    );
  };

  return (
    <nav
      ref={navRef}
      className="border-b border-m-blue-2 flex gap-1 items-center w-full left-0 top-0"
    >
      <div className="flex items-center justify-between w-full relative">
        {screenWidth < 435 && !toggledNav && (
          <Button
            size="sm"
            style={{ border: "none" }}
            onClick={() => setToggledNav(!toggledNav)}
          >
            {burgerSvg()}
          </Button>
        )}
        {navigation()}
      </div>
      {router.pathname === "/" && (
        <div className="flex flex-row justify-between">
          <MapBtn />
          <FilterBtn />
        </div>
      )}
    </nav>
  );
};

export default Nav;
