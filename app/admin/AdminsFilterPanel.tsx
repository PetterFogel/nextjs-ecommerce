import { FC } from "react";
import { Button } from "@mui/material";
import { adminPageStyles } from "./style/adminPageStyles";

interface Props {
  onDialogOpenClick: (productId: string | undefined) => void;
}

export const AdminFilterPanel: FC<Props> = ({ onDialogOpenClick }) => {
  const { classes } = adminPageStyles();

  const openDialogHandler = () => onDialogOpenClick(undefined);

  return (
    <div className={classes.filterPanel}>
      <Button
        variant="contained"
        color="success"
        size="medium"
        onClick={openDialogHandler}>
        Add a product
      </Button>
    </div>
  );
};
