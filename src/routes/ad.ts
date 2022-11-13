import { Router } from "express";
import { postAd,getAds } from "../controllers/adController";
import { uploadImage} from "../controllers/imageController"

const router = Router();

router.post("/create",postAd);
router.get("/getAds",getAds);
router.post("/uploadImage",uploadImage);

  
//  router.post("/items",getProduct);

export default router;