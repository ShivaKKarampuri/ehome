import { Schema, model, Document, InferSchemaType } from "mongoose";

const AdSchema = new Schema({
  keywords: { type: String },
  category: { type: String },
  title: { type: String, required: true },
  tags: { type: Array }, //[]
  minimumAdvance: { type: String },
  description: { type: String },
  address: {
    street: { type: String },
    Apt: { type: String, required: false },
    country: { type: String },
    city: { type: String },
    zipCode: { type: String },
  },
  location: { type: Object },
  gallery: [{ type: Object }],//{path: 'sites/uploads/images/test.png',url: '/images/test.png',caption: 'Test image'}
  propertyInfo: {
    builtYear: { type: String },
    builtArea: { type: String },
    noOfBedRooms: { type: String },
    noOfBathRooms: { type: String },
    noOfFloors: { type: String },
    furnishingStatus: { type: String },
    isOpenPlot: { type: Boolean },
    plotInfo: { type: Object } // length X Width, facing 
  },
  amenitiesInfo: [{ type: Object }],
  nearToMe: { type: Array },
  contactInfo: {
    hostAs: { type: String },
    name: { type: Object },
    phoneInfo: [{ type: Object }],
    emailInfo: [{ type: Object }],
  },
  userInfo:{ type: Object },
  reviews: [{ type: Object }]
});
type IAd = InferSchemaType<typeof AdSchema>;
export default model<IAd>("Ad", AdSchema);