import { Schema, model, Document } from "mongoose";
import{IcategoryHouse,InewlyAddedHouse,IrecommendedHouse} from '../interfaces/product'
export interface IProduct extends Document {
   location : String;
   category: IcategoryHouse;
   recommended: IrecommendedHouse;
  newlyAdded:InewlyAddedHouse;
}

const newlyAddedHouseSchema: Schema = new Schema({
     recent_independent: { type: String,required:true },
     recent_appartment: { type: String, required: true },
      recent_villas: { type: String,required: true }
  });
  const recommendedHouseSchema: Schema = new Schema({
    house_type: { type: String,required:true },
    location: { type: String, required: true },
     reviews: { type: String,required: true },
     price:{ type: Number,required: true}
 });


const CategoryHouseSchema: Schema = new Schema({
  independent: { type: String,required:true },
   appartment: { type: String, required: true },
   villas: { type: String,required: true }
});
const ProductSchema: Schema = new Schema({
    location: { type: String,required:true },
     category : CategoryHouseSchema,
      recommended: recommendedHouseSchema,
      newlyAdded:newlyAddedHouseSchema
  });
  


export default model<IProduct>("Product", ProductSchema);
