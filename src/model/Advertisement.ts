import { number, string } from "joi";
import { Schema, model, Document } from "mongoose";
import { Iadvertisement } from '../interfaces/advertisement'

const AddressSchema: Schema = new Schema({
  country: { type: Array },
  streetAddress: { type: String },
  state: { type: Array },
  city: { type: Array },
  zipCode: { type: Number }
});
const PropertySchema: Schema = new Schema({
  builtyear: { type: Number },
  builtarea: { type: String },
  bedrooms: { type: Number },
  halls: { type: Number },
  bathrooms: { type: Number },
  floors: { type: Number },
  zipCode: { type: Number },
  furnshingStatus: { type: String },
  Amenties: { type: Array },
  aroundProperty: { type: Array }
});

const ContactInfoSchema: Schema = new Schema({
  role: { type: Array },
  name: { type: String },
  phone: { type: Number }, // need isverifed prperty for both email/ phone
  email: { type: String }
});

const AdvertisementSchema: Schema = new Schema({
     category :{type:Array,
      required: true},
     title:{type:String,
      required: true},
     price:{type:Number,
      required: true},
     currencyType:{type:Array,
      required: true},
     miniumAdvance:{type:Number,
      required: true},
     tags:{type:Array,
      required: true},
     description:{type:String,
      required: true},
     address: {
        type: AddressSchema,
         required: true,
      },
      property:{
        type: PropertySchema,
         required: true,
      },
      contact:{
        type:ContactInfoSchema,
         required: true,
      }

});

export default model<Iadvertisement>("Advertisement", AdvertisementSchema);





// export default model<>("Advertisement", AdvertisementSchema);