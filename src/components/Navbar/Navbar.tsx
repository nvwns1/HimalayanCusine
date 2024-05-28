"use client";

import React, { useEffect, useRef, useState } from "react";
import styles from "./Navbar.module.scss";
import classNames from "classnames";
import Link from "next/link";
import Button from "../component/Button/Button";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import useDeviceType from "@/hooks/useWindowDimension";
import { EDeviceType } from "@/lib/constants";
import { ConditionallyRender } from "@/lib/helper/ConditionalRender";
import HamburgerIcon from "@/lib/Svgs/HamburgerIcon";

enum NavButtonIdEnum {
  HOME = "/",
  MENU = "/menu",
  CONTACT = "/contact",
  RESERVATION = "/reservation",
}

interface INavLinks {
  name: string;
  href: NavButtonIdEnum;
  isButton?: boolean;
}

const navLinks = [
  { name: "Home", href: NavButtonIdEnum.HOME },
  { name: "Menu", href: NavButtonIdEnum.MENU },
  { name: "Contact", href: NavButtonIdEnum.CONTACT },
  { name: "Reservation", href: NavButtonIdEnum.RESERVATION, isButton: true },
];

const Navbar = () => {
  const router = useRouter();
  const pathName = usePathname();

  const deviceType = useDeviceType();

  const [hamburgerOpen, setHamburgerOpen] = useState(true);
  const handleHamburgerClick = () => setHamburgerOpen(!hamburgerOpen);

  const mobileRootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        hamburgerOpen &&
        mobileRootRef.current &&
        !mobileRootRef.current.contains(event.target as Node)
      ) {
        setHamburgerOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [hamburgerOpen]);

  const navbarClasses = {
    navbarRoot: classNames(styles.NavbarRoot, "primarySurface"),
    navbarItem: classNames(
      styles.rightLinkItem,
      pathName === "/" && styles.active
    ),
    mobileRoot: classNames(styles.mobileLinkContainer, "primarySurface"),
    mobileRootItem: classNames(
      styles.mobileLinkItem,
      pathName === "/" && styles.active
    ),
  };

  const desktopView = (
    <div className={styles.rightLink}>
      {navLinks.map((navLink: INavLinks) => {
        return navLink.isButton ? (
          <Button
            background="outline"
            key={navLink.href}
            onClick={() => router.push(navLink.href)}
          >
            {navLink.name}
          </Button>
        ) : (
          <Link
            key={navLink.href}
            className={navbarClasses.navbarItem}
            href={`${navLink.href}`}
          >
            {navLink.name}
          </Link>
        );
      })}
    </div>
  );

  const mobileView = (
    <>
      <HamburgerIcon onClick={handleHamburgerClick} />
    </>
  );

  return (
    <>
      <nav className={navbarClasses.navbarRoot}>
        <div className={styles.leftLogo}>
          <Link href={"/"}>
            <Image width={200} height={40} alt="Logo" src={"/asset/logo.png"} />
          </Link>
        </div>
        <ConditionallyRender
          condition={deviceType === EDeviceType.Desktop}
          show={desktopView}
          elseShow={mobileView}
        />
      </nav>
      {hamburgerOpen && (
        <div ref={mobileRootRef} className={navbarClasses.mobileRoot}>
          {navLinks.map((navLink: INavLinks) => {
            return (
              <Link
                onClick={handleHamburgerClick}
                key={navLink.href}
                className={navbarClasses.mobileRootItem}
                href={`${navLink.href}`}
              >
                {navLink.name}
              </Link>
            );
          })}
        </div>
      )}
    </>
  );
};

export default Navbar;
