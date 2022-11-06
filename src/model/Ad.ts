import { Schema, model, Document,InferSchemaType } from "mongoose";

const AdSchema = new Schema({
    keywords : {type:String},
    category : {type:String},
    title:{type:String},
    tags:{type:Array}, //[]
    minimumAdvance:{type:String},
    description:{type:String},
    address :{
      street:{type:String},
      country:{type:String},
      city:{type:String},
      zipCode:{type:String},
    },
    location:{type:Object},
    gallery:{type:Array},
    propertyInfo:{
      builtYear:{type:String},
      builtArea:{type:String},
      noOfBedRooms:{type:String},
      noOfBathRooms:{type:String},
      noOfFloors:{type:String},
      furnishingStatus:{type:String}
    },
    amenitiesInfo:[{type:Object}],
    nearToMe:{type:Array},
    contactInfo:{
      hostAs:{type:String},
      name:{type:Object},
      phoneNumber:{type:Object},
      emailInfo:[{type:Object}],
    },
    reviews:[{type:Object}]
   });
   type IAd = InferSchemaType<typeof AdSchema>;
  export default model<IAd>("Ad", AdSchema);