import { FC } from "react";
import {
  Box,
  Button,
  DialogContent,
  FormControl,
  FormHelperText,
  Grid,
  InputLabel,
  ListItemText,
  MenuItem,
  OutlinedInput,
  Select,
  useMediaQuery,
  useTheme
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

interface Props {
  product?: IProduct;
  onDialogCloseClick: () => void;
}

export const ProductDialogForm: FC<Props> = ({
  product,
  onDialogCloseClick
}) => {
  const { classes } = adminPageStyles();
  const theme = useTheme();
  const isBreakpointSm = useMediaQuery(theme.breakpoints.down("sm"));

  const validate = (values: IProduct) => productValidateHandler(values);

  const formik = useFormik({
    initialValues: setInitialValuesHandler(product),
    validate,
    enableReinitialize: false,
    validateOnMount: true,
    onSubmit: (values) => {
      console.log(values);
    }
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <DialogContent sx={{ p: isBreakpointSm ? 1 : 2 }}>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <FormikTextField
              id={"title"}
              type={"text"}
              label={"Title"}
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
              helperText={formik.touched.info && formik.errors.info}
              error={formik.touched.info && Boolean(formik.errors.info)}
              formik={formik}
            />
          </Grid>
        </Grid>
      </DialogContent>
      <Box
        className={
          product
            ? classes.editDialogButtonHolder
            : classes.addDialogButtonHolder
        }>
        {product && (
          <Button
            className={classes.actionButton}
            variant={"text"}
            size={isBreakpointSm ? "small" : "medium"}
            color="error">
            DELETE
          </Button>
        )}
        <Button
          className={classes.actionButton}
          variant={"outlined"}
          size={isBreakpointSm ? "small" : "medium"}
          color="secondary"
          sx={{ marginLeft: "auto" }}
          onClick={onDialogCloseClick}>
          CANCEL
        </Button>
        <LoadingButton
          className={classes.actionButton}
          variant={"contained"}
          color="success"
          size={isBreakpointSm ? "small" : "medium"}
          type="submit">
          SAVE
        </LoadingButton>
      </Box>
    </form>
  );
};
