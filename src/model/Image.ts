import { Schema, model, Document, InferSchemaType } from "mongoose";

const imageShema = new Schema({
    path: String,
    url: String,
    caption: String,
    uploadedDate: Date
  });

type IPicture = InferSchemaType<typeof imageShema>;
export default model<IPicture>("Images", imageShema);