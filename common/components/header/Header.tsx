"use client";
import { AdminMenu } from "../admin-menu/AdminMenu";
import { BurgerMenu } from "../burger-menu/BurgerMenu";
import { FC, useState } from "react";
import { headerPageStyles } from "./style/headerStyles";
import { signIn, useSession } from "next-auth/react";
import ShoppingIcon from "../../../assets/shopping-bag.svg";
import Image from "next/legacy/image";
import Link from "next/link";
import { useAppSelector } from "@/redux/hooks";
import { checkoutSelector } from "@/app/checkout/redux/cartSlice";

export const Header: FC = () => {
  const { classes } = headerPageStyles();
  const { data: session } = useSession();
  const { totalQuantity } = useAppSelector(checkoutSelector);
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
          <li className={classes.link}>
            <Link href="/products" onClick={() => setIsMenuOpen(false)}>
              PRODUCTS
            </Link>
          </li>
          <li className={classes.link}>
            <Link href="/about" onClick={() => setIsMenuOpen(false)}>
              ABOUT
            </Link>
          </li>
          {!session?.user && (
            <li
              className={classes.link}
              style={{ cursor: "pointer" }}
              onClick={() => signIn()}>
              SIGN IN
            </li>
          )}
        </ul>
        <Link
          href="/checkout"
          className={classes.cartLink}
          onClick={() => setIsMenuOpen(false)}>
          <div className={classes.cartIcon}>
            <Image src={ShoppingIcon} alt="Cart icon" />
          </div>
          <div>{totalQuantity}</div>
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
