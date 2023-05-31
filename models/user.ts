import { Schema, model, models } from "mongoose";

const UserSchema = new Schema({
  email: {
    type: String,
    unique: [true, "Email already exist."],
    required: [true, "Email is required."]
  },
  name: {
    type: String,
    required: [true, "name is required."]
  },
  image: {
    type: String
  },
  role: {
    type: String,
    required: [true, "Role is required."]
  }
});

const User = models.User || model("User", UserSchema);
export default User;
