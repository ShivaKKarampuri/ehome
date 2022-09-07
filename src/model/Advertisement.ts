import { number, string } from "joi";
import { Schema, model, Document } from "mongoose";
import{Iadvertisement} from '../interfaces/advertisement'

const AddressSchema: Schema = new Schema ({
     country:{type:Array},
    streetAddress:{type:String},
    state:{type:Array},
    city: {type:Array},
   zipCode:{type:Number}
  });
  const PropertySchema: Schema = new Schema ({
    builtyear:{type:Number},
   builtarea:{type:String},
   bedrooms:{type:Number},
   halls:{type:Number},
   bathrooms:{type:Number},
   floors:{type:Number},
  zipCode:{type:Number},
  furnshingStatus:{type:String},
  Amenties:{type:Array},
  aroundProperty:{type:Array}
 });

 const ContactInfoSchema: Schema = new Schema ({
  role:{type:Array},
  name:{type:String},
  phone:{type:Number},
  email:{type:String}
});

const AdvertisementSchema: Schema = new Schema({
     category :{type:Array},
     title:{type:String},
     price:{type:Number},
     currencyType:{type:Array},
     miniumAdvance:{type:Number},
     tags:{type:Array},
     description:{type:String},
     address: {
        type: AddressSchema,
        // required: true,
      },
      property:{
        type: PropertySchema,
        // required: true,
      },
      contact:{
        type:ContactInfoSchema,
        // required: true,
      }

  });

  export default model<Iadvertisement>("Advertisement", AdvertisementSchema);





// export default model<>("Advertisement", AdvertisementSchema);