import { IPersonalInformation } from "@/types/personalInformation";

export const personalInfoValidator = (values: IPersonalInformation) => {
  const errors: Record<string, string> = {};
  if (!values.email) {
    errors.email = "Please enter email";
  }
  if (!values.phone) {
    errors.phone = "Please enter phone";
  }
  if (!values.postalCode) {
    errors.postalCode = "Please enter postalCode";
  }
  if (!values.firstName) {
    errors.firstName = "Please enter firstName";
  }
  if (!values.lastName) {
    errors.lastName = "Please enter lastName";
  }
  if (!values.address) {
    errors.address = "Please enter address";
  }
  if (!values.city) {
    errors.city = "Please enter city";
  }
  if (!values.phone) {
    errors.phone = "Please enter phone";
  }

  return errors;
};
