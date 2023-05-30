"use client";
import { BurgerMenu } from "../burger-menu/BurgerMenu";
import { FC, useState } from "react";
import { headerPageStyles } from "./style/headerStyles";
import ShoppingIcon from "../../../assets/shopping-bag.svg";
import Image from "next/legacy/image";

import Link from "next/link";
import { signIn, useSession } from "next-auth/react";
import { AdminMenu } from "../admin-menu/AdminMenu";

export const Header: FC = () => {
  const { classes } = headerPageStyles();
  const { data: session } = useSession();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className={classes.header}>
      <Link
        href="/"
        className={classes.logo}
        onClick={() => setIsMenuOpen(false)}>
        THE MANY SAINTS
      </Link>
      <nav className={classes.nav}>
        <ul
          className={classes.ul}
          style={{
            right: isMenuOpen ? "0%" : "-100%"
          }}>
          <Link
            href="/products"
            className={classes.link}
            onClick={() => setIsMenuOpen(false)}>
            <li className="link">PRODUCTS</li>
          </Link>
          <Link
            href="/about"
            className={classes.link}
            onClick={() => setIsMenuOpen(false)}>
            <li>ABOUT</li>
          </Link>
          {!session?.user && (
            <Link
              href="/about"
              className={classes.link}
              onClick={() => signIn()}>
              <li>SIGN IN</li>
            </Link>
          )}
        </ul>
        <Link
          href="/checkout"
          className={classes.cartLink}
          onClick={() => setIsMenuOpen(false)}>
          <div className={classes.cartIcon}>
            <Image src={ShoppingIcon} alt="Cart icon" />
          </div>
        </Link>
        <AdminMenu />
        <BurgerMenu
          value={isMenuOpen}
          onBurgerMenuOpenClick={() => setIsMenuOpen(!isMenuOpen)}
        />
      </nav>
    </header>
  );
};
