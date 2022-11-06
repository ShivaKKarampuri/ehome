import { Router } from "express";
import { postAd } from "../controllers/adController";


const router = Router();

router.post("/create",postAd);
  
//  router.post("/items",getProduct);

export default router;