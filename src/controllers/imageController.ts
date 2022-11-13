import { RequestHandler } from "express";
import createHttpError, { InternalServerError } from "http-errors";
import Ad from "../model/Ad";
import Image from "../model/Image";
const insertImage = function(adId: any, data: any) {
    let imageData = {
        path: data.path,
        url: data.url,
        caption: data.caption,
        uploadedDate: Date.now()
      }
    return Image.create(imageData).then(docImage => {
      console.log("\n>> Created Image:\n", docImage);
      return Ad.findByIdAndUpdate(
        adId,
        {
          $push: {
            gallery: {
              _id: docImage._id,
              url: docImage.url,
              caption: docImage.caption
            }
          }
        },
        { new: true, useFindAndModify: false }
      );
    });
  };
  export const uploadImage: RequestHandler = async (req, res, next) => {
    try {
        let request = req.body;
        let response = await insertImage(request.adId,request.imageData);
        res.json({ message: "Image uploaded successfully!",body:response });
      } catch (error) {
        console.log(error);
        return next(InternalServerError);
      }
  }