import { FC, useState, MouseEvent } from "react";
import {
  Button,
  DialogContent,
  Divider,
  FormControl,
  FormHelperText,
  Grid,
  InputLabel,
  ListItemText,
  Menu,
  MenuItem,
  OutlinedInput,
  Select,
  Stack
} from "@mui/material";
import { IProduct } from "@/types/product";
import { useFormik } from "formik";
import { shoeSizes } from "@/common/constants/shoeSizes";
import { categories } from "@/common/constants/categories";
import { selectProps } from "@/common/constants/selectProps";
import { LoadingButton } from "@mui/lab";
import { adminPageStyles } from "./style/adminPageStyles";
import { FormikTextField } from "../../common/components/formik-text-field/FormikTextField";
import { productValidateHandler } from "./helpers/productValidateHandler";
import { setInitialValuesHandler } from "./helpers/setInitialValuesHandler";
import {
  useAddProductMutation,
  useDeleteProductMutation,
  useUpdateProductMutation
} from "@/redux/api/productsApi";

interface Props {
  product?: IProduct;
  onDialogCloseClick: () => void;
}

export const ProductDialogForm: FC<Props> = ({
  product,
  onDialogCloseClick
}) => {
  const { classes } = adminPageStyles();
  const [addProduct, { isLoading: isAdding }] = useAddProductMutation();
  const [updateProduct, { isLoading: isUpdating }] = useUpdateProductMutation();
  const [deleteProduct, { isLoading: isDeleting }] = useDeleteProductMutation();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const openMenuHandler = (event: MouseEvent<HTMLButtonElement>) =>
    setAnchorEl(event.currentTarget);

  const closeMenuHandler = () => setAnchorEl(null);

  const validate = (values: IProduct) => productValidateHandler(values);

  const formik = useFormik({
    initialValues: setInitialValuesHandler(product),
    validate,
    enableReinitialize: false,
    validateOnMount: true,
    onSubmit: async (values) => {
      if (product) return await updateProduct({ _id: product._id, ...values });
      await addProduct(values);
    }
  });

  const deleteProductHandler = async () => {
    setAnchorEl(null);
    if (product) await deleteProduct(product._id);
    onDialogCloseClick();
  };

  const isLoading = isAdding || isUpdating || isDeleting;

  return (
    <form onSubmit={formik.handleSubmit}>
      <DialogContent className={classes.dialogHolder}>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <FormikTextField
              id={"title"}
              type={"text"}
              label={"Title"}
              disabled={isLoading}
              helperText={formik.touched.title && formik.errors.title}
              error={formik.touched.title && Boolean(formik.errors.title)}
              formik={formik}
            />
          </Grid>
          <Grid item xs={12}>
            <FormikTextField
              id={"imageUrl"}
              type={"url"}
              label={"Image url"}
              disabled={isLoading}
              helperText={formik.touched.imageUrl && formik.errors.imageUrl}
              error={formik.touched.imageUrl && Boolean(formik.errors.imageUrl)}
              formik={formik}
            />
          </Grid>
          <Grid item md={6} xs={12}>
            <FormControl
              fullWidth
              size={"small"}
              margin="dense"
              disabled={isLoading}
              error={
                formik.touched.category && Boolean(formik.errors.category)
              }>
              <InputLabel>Category</InputLabel>
              <Select
                id={"category"}
                label="Category"
                {...formik.getFieldProps("category")}>
                {categories.map((category, index) => (
                  <MenuItem key={index} value={category}>
                    {category}
                  </MenuItem>
                ))}
              </Select>
              {formik.touched.category && (
                <FormHelperText>{formik.errors.category}</FormHelperText>
              )}
            </FormControl>
          </Grid>
          <Grid item md={6} xs={12}>
            <FormControl
              fullWidth
              size={"small"}
              margin="dense"
              disabled={isLoading}
              error={formik.touched.sizes && Boolean(formik.errors.sizes)}>
              <InputLabel>Sizes</InputLabel>
              <Select
                multiple
                id={"sizes"}
                input={<OutlinedInput label="Tag" />}
                renderValue={(selected) => selected.join(", ")}
                MenuProps={selectProps}
                {...formik.getFieldProps("sizes")}>
                {shoeSizes.map((size, index) => (
                  <MenuItem key={index} value={size}>
                    <ListItemText primary={size} />
                  </MenuItem>
                ))}
              </Select>
              {formik.touched.sizes && (
                <FormHelperText>{formik.errors.sizes}</FormHelperText>
              )}
            </FormControl>
          </Grid>
          <Grid item md={6} xs={12}>
            <FormikTextField
              id="price"
              type="number"
              label="Price"
              adornmentSymbol="SEK"
              disabled={isLoading}
              helperText={formik.touched.price && formik.errors.price}
              error={formik.touched.price && Boolean(formik.errors.price)}
              formik={formik}
            />
          </Grid>
          <Grid item md={6} xs={12}>
            <FormikTextField
              id="rating"
              type="number"
              label="Rating"
              disabled={isLoading}
              helperText={formik.touched.rating && formik.errors.rating}
              error={formik.touched.rating && Boolean(formik.errors.rating)}
              formik={formik}
            />
          </Grid>
          <Grid item xs={12}>
            <FormikTextField
              id="info"
              type="number"
              label="Product description"
              multiline
              disabled={isLoading}
              helperText={formik.touched.info && formik.errors.info}
              error={formik.touched.info && Boolean(formik.errors.info)}
              formik={formik}
            />
          </Grid>
        </Grid>
      </DialogContent>
      <Stack
        direction="row"
        justifyContent={product?._id ? "space-between" : "flex-end"}
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
            disabled={isLoading}
            className={classes.actionButton}>
            SAVE
          </LoadingButton>
        </Stack>
      </Stack>
    </form>
  );
};
