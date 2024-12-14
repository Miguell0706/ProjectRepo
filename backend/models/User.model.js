import mongoose from "mongoose";
import bcrypt from "bcryptjs";

// Define the user schema
const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    image: { type: String, default: "https://example.com/default-avatar.png" }, // Default value
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
  },
  { timestamps: true }
);

// Hash the password before saving it to the database
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next(); // If password isn't modified, skip hashing

  // Generate a salt and hash the password
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

// Method to compare password during login
userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

// Create the model
const User = mongoose.model("User", userSchema);

export default User;
