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
     house_type:String,
    location:String,
    reviews:String,
    price:Number
}
export interface IProduct extends Document {
   location : String;
   category: IcategoryHouse;
   recommended: IrecommendedHouse;
  newlyAdded:InewlyAddedHouse;
}

// export interface IProduct extends Document {
//     location : String;
//     resta: { restaurant_details: Object, restaurant_rank: number }[];
//     category:{house_type: String,
//     location: String,
//      reviews: String,
//      price:String
//     }[],
   
//    newlyAdded:InewlyAddedHouse;
//  }
 