const productmodel = require('../models/productsModels');
const ErrorHandler = require('../utils/errorhandler');
const catchAysncError=require('../middleWare/aysncError');
const ApiFeature = require('../utils/ApiFeature');
const { query } = require('express');
//Admin create product
exports.createproducts= catchAysncError( async(req,res,next)=>{
     const product=await productmodel.create(req.body);
     res.status(200).json({
         success:true,
         product
     })
})
//admin 
exports.getallproducts= catchAysncError(async(req,res)=>{
    const resultPagination=5;
   const apiFeature=new ApiFeature(productmodel.find(),req.query)
   .search()
   .filter()
   .pagination(resultPagination);
   
    const product=  await apiFeature.query;

    res.status(200).json({
        success:true,
        product
    })
})

//Admin update product
exports.updateproducts= catchAysncError(async(req,res,next)=>{
  
    let product=  productmodel.findById(req.params.id);
    if(!product){
       return  next(new ErrorHandler("Id Not Found",500))}
      product = await  productmodel.findByIdAndUpdate(req.params.id,req.body,{
        new:true,
        runValidators:true,
        useFindAndModify:true,
    })
        res.status(200).json({
        success:true,
        product
    })
})
//general product get by id
exports.getProductDetails=catchAysncError( async(req,res,next)=>{
    let product=  await productmodel.findById(req.params.id);
   if(!product){
       return  next(new ErrorHandler("pakistan",899))
}
    res.status(200).json({
        success:true,
        product
    })
})
//Admin delete product
exports.deleteproducts=catchAysncError( async(req,res,next)=>{
    let product=  await productmodel.findById(req.params.id);
   if(!product){
    return  next(new ErrorHandler("Product Not Found",500))}
    await product.remove();
    res.status(200).json({
        success:false,
        message:"Product Deleted successfully" , 
        product
    })
})