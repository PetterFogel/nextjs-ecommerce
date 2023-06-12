"use client";
import { Badge } from "@mui/material";
import { AdminMenu } from "../admin-menu/AdminMenu";
import { BurgerMenu } from "../burger-menu/BurgerMenu";
import { FC, useEffect, useState } from "react";
import { useAppSelector } from "@/redux/hooks";
import { headerPageStyles } from "./style/headerStyles";
import { checkoutSelector } from "@/redux/slices/checkout/cartSlice";
import { signIn, useSession } from "next-auth/react";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import Link from "next/link";

export const Header: FC = () => {
  const { classes } = headerPageStyles();
  const { data: session } = useSession();
  const { totalQuantity } = useAppSelector(checkoutSelector);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cartQty, setCartQty] = useState(0);

  useEffect(() => {
    setCartQty(totalQuantity);
  }, [totalQuantity]);

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
          <Badge color="primary" badgeContent={cartQty}>
            <WorkOutlineIcon fontSize="small" />
          </Badge>
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
