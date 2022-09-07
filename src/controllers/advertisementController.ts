import { RequestHandler } from "express";
import createHttpError, { InternalServerError } from "http-errors";
import Advertisement from "../model/Advertisement";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { FRONTEND_URL, JWT_KEY, transporter } from "../config";
import nodemailer from "nodemailer";

export const createAdvertisement: RequestHandler = async (req, res, next) => {
  const { category,title,price, currencyType,miniumAdvance,tags,description, address,propertyInfo,contactInfo } = req.body;
  console.log(category,title,price, currencyType,miniumAdvance,tags,description, address,propertyInfo,contactInfo);
  try {
    const advertisement = new Advertisement({ category:category,title:title,price:price, currencyType:currencyType,miniumAdvance:miniumAdvance,tags:tags,description:description, address:address ,property:propertyInfo,contact:contactInfo });
    await advertisement.save();
    res.json({ message: "Advertisement details have been added!!" });
  } catch (error) {
    console.log(error);
    return next(InternalServerError);
  }
};


// export const updateProduct: RequestHandler = async (req, res, next) => {
//       const  reqdetails = req.body;
//     //const location:string = req.query.location!; 
//     console.log(reqdetails);
//     try {   
//         const productDetails = await Product.find({location:location});
//         console.log(productDetails );
//         if (productDetails) {
//           return res.status(200).send(productDetails);
//         }
    
//         res.status(404).send("Product details not found"); 
     
//     } catch (error) {
//       return next(InternalServerError);
//     }
//   };
