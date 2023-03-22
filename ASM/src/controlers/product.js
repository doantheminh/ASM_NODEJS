import Product from '../models/product';
import Joi from "joi";
const productSchema =Joi.object({
    name:Joi.string().validate,
    price:Joi.number().validate,
})
export const CreateProduct = async (req, res) => {
    const {error} = productSchema.validate(req.body);
    if(error){
        return res.status(400).json({
            message: error.details[0].message
        })
    }
    try {
        const product = await Product.create(req.body);
        return res.status(200).json({
            message: "Product created successfully",
            product
        })
    } catch (error) {
        return res.status(500).json({
            message: error
        })
    }
}
export const getProduct = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        return res.status(200).json({
            message: "Product with id successfully",
            product
        })
    } catch (error) {
        return res.status(500).json({
            message: error
        })
    }
}
export const getProductAll = async (req, res) => {
    try {
        const product = await Product.find();
        return res.status(200).json({
            message: "Product is successfully",
            product
        })
    } catch (error) {
        return res.status(500).json({
            message: error
        })
    }
}
export const deleteProduct = async (req, res) => {
    try {
        const product = await Product.findByIdAndDelete(req.params.id);
        return res.status(200).json({
            message: "Delete Product successfully",
            product
        })
    } catch (error) {
        return res.status(500).json({
            message: error
        })
    }
}
export const upDateProduct = async (req, res) => {
    try {
        const product = await Product.findByIdAndUpdate(req.params.id,req.body,{new: true});
        return res.status(200).json({
            message: "Update Product successfully",
            product
        })
    } catch (error) {
        return res.status(500).json({
            message: error
        })
    }
}