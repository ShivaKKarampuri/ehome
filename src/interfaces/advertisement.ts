import { Schema, model, Document } from "mongoose";

export interface Iaddress extends Document {
    country: Array<String>,
    streetAddress: String,
    state: Array<String>
    city: Array<String>,
    zipCode: Number
}
export interface Iproperty extends Document {
    builtyear: Number,
    builtarea: String,
    bedrooms: Number,
    halls: Number,
    bathrooms: Number,
    floors: Number,
    zipCode: Number,
    furnshingStatus: String,
    Amenties: Array<String>,
    aroundProperty: Array<String>
}
export interface Iaddress extends Document {
    country: Array<String>,
    streetAddress: String,
    state: Array<String>
    city: Array<String>,
    zipCode: Number
}
export interface Icontact extends Document {
    role: Array<String>,
    name: String,
    phone: Number,
    email: String
}

export interface Iadvertisement extends Document {
    category: Array<String>, // it should be an 
    title: String,
    price: String
    currencyType: Array<String>,
    miniumAdvance: String,
    tags: Array<String>,
    description: String,
    address: Iaddress,
    images: Array<String>,
    property: Iproperty,
    contact: Icontact
}