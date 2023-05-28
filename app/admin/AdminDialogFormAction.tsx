import { FC, useState, MouseEvent } from "react";
import { LoadingButton } from "@mui/lab";
import { Button, Divider, Menu, MenuItem, Stack } from "@mui/material";
import { IProduct } from "@/types/product";
import { adminPageStyles } from "./style/adminPageStyles";

interface Props {
  product?: IProduct;
  isLoading: boolean;
  onDialogCloseClick: () => void;
  deleteProduct: (productId: string | undefined) => void;
}

export const AdminDialogFormAction: FC<Props> = ({
  product,
  isLoading,
  onDialogCloseClick,
  deleteProduct
}) => {
  const { classes } = adminPageStyles();

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const openMenuHandler = (event: MouseEvent<HTMLButtonElement>) =>
    setAnchorEl(event.currentTarget);

  const closeMenuHandler = () => setAnchorEl(null);

  const deleteProductHandler = async () => {
    setAnchorEl(null);
    if (product) await deleteProduct(product._id);
    onDialogCloseClick();
  };

  return (
    <Stack
      direction="row"
      justifyContent={product ? "space-between" : "flex-end"}
      spacing={1}
      padding={1}>
      {product && (
        <>
          <Button
            color="error"
            size={"small"}
            variant={"text"}
            disabled={isLoading}
            className={classes.actionButton}
            onClick={openMenuHandler}>
            DELETE
          </Button>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={closeMenuHandler}
            MenuListProps={{
              "aria-labelledby": "basic-button"
            }}>
            <MenuItem disabled>Are you sure?</MenuItem>
            <Divider />
            <MenuItem onClick={deleteProductHandler} color="error">
              Yes, delete
            </MenuItem>
            <MenuItem onClick={closeMenuHandler}>Cancel</MenuItem>
          </Menu>
        </>
      )}
      <Stack direction="row" spacing={1}>
        <Button
          size={"small"}
          color="secondary"
          variant={"outlined"}
          sx={{ marginLeft: "auto" }}
          disabled={isLoading}
          className={classes.actionButton}
          onClick={onDialogCloseClick}>
          CANCEL
        </Button>
        <LoadingButton
          type="submit"
          size={"small"}
          color="success"
          variant={"contained"}
          loading={isLoading}
          className={classes.actionButton}>
          SAVE
        </LoadingButton>
      </Stack>
    </Stack>
  );
};
