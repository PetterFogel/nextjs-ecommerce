"use client";
import { BurgerMenu } from "../burger-menu/BurgerMenu";
import { FC, useState } from "react";
import { headerPageStyles } from "./style/headerStyles";
import Link from "next/link";

export const Header: FC = () => {
  const { classes } = headerPageStyles();
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
          <Link href="/about" className={classes.link}>
            <li onClick={() => setIsMenuOpen(false)}>ABOUT</li>
          </Link>
          <Link href="/admin" className={classes.link}>
            <li>ADMIN</li>
          </Link>
        </ul>
        <Link
          href="/checkout"
          className={classes.cartLink}
          onClick={() => setIsMenuOpen(false)}>
          CART
        </Link>
        <BurgerMenu
          value={isMenuOpen}
          onBurgerMenuOpenClick={() => setIsMenuOpen(!isMenuOpen)}
        />
      </nav>
    </header>
  );
};
