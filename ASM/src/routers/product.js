import express from 'express';
import { CreateProduct, deleteProduct, getProduct, getProductAll, upDateProduct } from '../controlers/product';
const router=express.Router();

router.post("/products",CreateProduct);
router.get("/products",getProductAll);
router.get("/products/:id",getProduct);
router.delete("/products/:id",deleteProduct);
router.put("/products/:id",upDateProduct);




export default router;