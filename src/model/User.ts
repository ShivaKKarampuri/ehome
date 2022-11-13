import { Schema, model, Document } from "mongoose";

export interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  isUserVerified: boolean;
  verfiyToken: string;
  favorites: []
}

const UserSchema: Schema = new Schema({
  name: { type: String ,required: true},
  email: { type: String, unquie: true ,required: true},
  password: { type: String},
  isUserVerified: { type: Boolean, default: false  },
  verfiyToken: { type: String },
  favorites: [
    {
      type: Schema.Types.ObjectId,
      ref: "Ad"
    }]

});

export default model<IUser>("User", UserSchema);
