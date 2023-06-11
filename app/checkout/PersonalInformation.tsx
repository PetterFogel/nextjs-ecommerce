import { FC } from "react";
import { Grid, Typography } from "@mui/material";
import { FormikTextField } from "@/common/components/formik-text-field/FormikTextField";
import { useFormik } from "formik";

export const PersonalInformation: FC = () => {
  const formik = useFormik({ initialValues: { test: "" } });
  return (
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
          helperText={false}
          error={false}
          formik={formik}
        />
      </Grid>
      <Grid item md={6} xs={12}>
        <FormikTextField
          id={"postalCode"}
          type={"text"}
          label={"Postal code"}
          disabled={false}
          helperText={false}
          error={false}
          formik={formik}
        />
      </Grid>
      <Grid item xs={6}>
        <FormikTextField
          id={"firstName"}
          type={"text"}
          label={"First name"}
          disabled={false}
          helperText={false}
          error={false}
          formik={formik}
        />
      </Grid>
      <Grid item xs={6}>
        <FormikTextField
          id={"lastName"}
          type={"text"}
          label={"Last name"}
          disabled={false}
          helperText={false}
          error={false}
          formik={formik}
        />
      </Grid>
      <Grid item xs={12}>
        <FormikTextField
          id={"address"}
          type={"text"}
          label={"Address"}
          disabled={false}
          helperText={false}
          error={false}
          formik={formik}
        />
      </Grid>
      <Grid item md={6} xs={12}>
        <FormikTextField
          id={"city"}
          type={"text"}
          label={"City"}
          disabled={false}
          helperText={false}
          error={false}
          formik={formik}
        />
      </Grid>
      <Grid item md={6} xs={12}>
        <FormikTextField
          id={"phone"}
          type={"text"}
          label={"Mobile phone"}
          disabled={false}
          helperText={false}
          error={false}
          formik={formik}
        />
      </Grid>
    </Grid>
  );
};
