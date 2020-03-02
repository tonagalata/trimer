const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const SALT_ROUNDS = 6;

const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    name: {
      type: String,
      lowercase: true
    },
    email: {
      type: String,
      lowercase: true,
      required: true,
      unique: true
    },
    password: {
      type: String
    },
    isAdmin: {
      type: Boolean
    },
    profileImg: {
      type: String
    }
  },
  {
    timestamps: true
  }
);

userSchema.methods.comparePassword = function(tryPassword, callback) {
  bcrypt.compare(tryPassword, this.password, callback)
};

userSchema.set("toJSON", {
  transform: function(doc, ret) {
    delete ret.password;
    delete ret.createdAt;
    delete ret.updatedAt;
    delete ret.__v;
  }
});

userSchema.pre("save", function(next) {
  const user = this;
  if (!user.isModified("password")) return next();
  bcrypt.hash(user.password, SALT_ROUNDS, function(err, hash) {
    if (err) return next(err);
    user.password = hash;
    next();
  });
});

module.exports = mongoose.model("User", userSchema);
