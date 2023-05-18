import { FC } from "react";
import { burgerMenuStyles } from "./style/burgerMenuStyles";

interface Props {
  onBurgerMenuOpenClick: () => void;
  value: boolean;
}

export const BurgerMenu: FC<Props> = ({ value, onBurgerMenuOpenClick }) => {
  const { classes } = burgerMenuStyles();

  const topBarRotate = value
    ? "rotate(-45deg) translate(-0.3rem, 0.4rem)"
    : "rotate(0deg)";
  const bottomBarRotate = value
    ? "rotate(45deg) translate(-0.3rem, -0.4rem)"
    : "rotate(0deg)";

  return (
    <div className={classes.burgerContainer} onClick={onBurgerMenuOpenClick}>
      <div
        className={classes.burgerBar}
        style={{ transform: topBarRotate }}></div>
      <div
        className={classes.burgerBar}
        style={{
          opacity: value ? "0" : "1"
        }}></div>
      <div
        className={classes.burgerBar}
        style={{ transform: bottomBarRotate }}></div>
    </div>
  );
};
