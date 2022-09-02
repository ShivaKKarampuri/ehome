import { Schema, model, Document } from "mongoose";
import{IcategoryHouse,InewlyAddedHouse,IrecommendedHouse,IProduct} from '../interfaces/product'

  const recommendedHouseSchema: Schema = new Schema({
    house_type: { type: String,required:true },
    location: { type: String, required: true },
     reviews: { type: String,required: true },
     price:{ type: Number,required: true}
 });

const ProductSchema: Schema = new Schema({
    location: { type: String,required:true },
     category :{type:Array},
      recommended: [recommendedHouseSchema],
      newlyAdded:[recommendedHouseSchema],
  });
  


export default model<IProduct>("Product", ProductSchema);
