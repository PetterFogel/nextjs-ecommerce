"use client";
import { FC } from "react";
import { useFormik } from "formik";
import { FormikTextField } from "@/common/components/formik-text-field/FormikTextField";
import { IPersonalInformation } from "@/types/personalInformation";
import { personalInfoValidator } from "./helpers/personalInfoValidator";
import { Button, Grid, Typography } from "@mui/material";

export const PersonalInformation: FC = () => {
  const validate = (values: IPersonalInformation) =>
    personalInfoValidator(values);

  const formik = useFormik({
    initialValues: {
      email: "",
      postalCode: "",
      firstName: "",
      lastName: "",
      address: "",
      city: "",
      phone: ""
    },
    validate,
    enableReinitialize: false,
    validateOnMount: true,
    onSubmit: async (values) => {
      console.log(values);
    }
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <Typography variant="h3" fontWeight={600}>
            Your Information
          </Typography>
        </Grid>
        <Grid item md={6} xs={12}>
          <FormikTextField
            id={"email"}
            type={"email"}
            label={"Email address"}
            disabled={false}
            helperText={formik.touched.email && formik.errors.email}
            error={formik.touched.email && Boolean(formik.errors.email)}
            formik={formik}
          />
        </Grid>
        <Grid item md={6} xs={12}>
          <FormikTextField
            id={"postalCode"}
            type={"text"}
            label={"Postal code"}
            disabled={false}
            helperText={formik.touched.postalCode && formik.errors.postalCode}
            error={
              formik.touched.postalCode && Boolean(formik.errors.postalCode)
            }
            formik={formik}
          />
        </Grid>
        <Grid item xs={6}>
          <FormikTextField
            id={"firstName"}
            type={"text"}
            label={"First name"}
            disabled={false}
            helperText={formik.touched.firstName && formik.errors.firstName}
            error={formik.touched.firstName && Boolean(formik.errors.firstName)}
            formik={formik}
          />
        </Grid>
        <Grid item xs={6}>
          <FormikTextField
            id={"lastName"}
            type={"text"}
            label={"Last name"}
            disabled={false}
            helperText={formik.touched.lastName && formik.errors.lastName}
            error={formik.touched.lastName && Boolean(formik.errors.lastName)}
            formik={formik}
          />
        </Grid>
        <Grid item xs={12}>
          <FormikTextField
            id={"address"}
            type={"text"}
            label={"Address"}
            disabled={false}
            helperText={formik.touched.address && formik.errors.address}
            error={formik.touched.address && Boolean(formik.errors.address)}
            formik={formik}
          />
        </Grid>
        <Grid item md={6} xs={12}>
          <FormikTextField
            id={"city"}
            type={"text"}
            label={"City"}
            disabled={false}
            helperText={formik.touched.city && formik.errors.city}
            error={formik.touched.city && Boolean(formik.errors.city)}
            formik={formik}
          />
        </Grid>
        <Grid item md={6} xs={12}>
          <FormikTextField
            id={"phone"}
            type={"text"}
            label={"Mobile phone"}
            disabled={false}
            helperText={formik.touched.phone && formik.errors.phone}
            error={formik.touched.phone && Boolean(formik.errors.phone)}
            formik={formik}
          />
        </Grid>
        <Grid item xs={12}>
          <Button
            color="info"
            type="submit"
            variant="contained"
            sx={{ float: "right" }}>
            Submit
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};
