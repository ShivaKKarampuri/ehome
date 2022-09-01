import { Schema, model, Document } from "mongoose";

export interface IcategoryHouse extends Document {
    independent:String,
   appartment:String
   villas:String
}
export interface InewlyAddedHouse extends Document {
    recent_independent:String,
    recent_appartment:String
    recent_villas:String
}

export interface IrecommendedHouse  extends Document {
    recent_independent:String,
    recent_appartment:String
    recent_villas:String
}
export interface IProduct extends Document {
   location : String;
   category: IcategoryHouse;
   recommended: IrecommendedHouse;
  newlyAdded:InewlyAddedHouse;
}
