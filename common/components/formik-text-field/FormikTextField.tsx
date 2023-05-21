import { FC } from "react";
import { InputAdornment, TextField } from "@mui/material";
import { FormikValues } from "formik";

interface Props {
  id: string;
  type: string;
  label: string;
  helperText: string | boolean | undefined;
  error: boolean | undefined;
  formik: FormikValues;
  adornmentSymbol?: string;
  multiline?: boolean;
  disabled?: boolean;
}

export const FormikTextField: FC<Props> = ({
  id,
  type,
  label,
  helperText,
  error,
  formik,
  adornmentSymbol,
  multiline,
  disabled
}) => {
  return (
    <TextField
      fullWidth
      multiline={multiline}
      disabled={disabled}
      rows={4}
      id={id}
      type={type}
      label={label}
      size="small"
      margin="dense"
      helperText={helperText}
      error={error}
      InputProps={{
        endAdornment: adornmentSymbol ? (
          <InputAdornment position="end">{adornmentSymbol}</InputAdornment>
        ) : null
      }}
      {...formik.getFieldProps(id)}
    />
  );
};
