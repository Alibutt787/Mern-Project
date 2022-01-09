const express = require('express');
const { getallproducts,createproducts,updateproducts,deleteproducts,getProductDetails } = require('../controler/productcontroler');

const router= express.Router();

router.route("/Product").get(getallproducts);
router.route("/Product/new").post(createproducts)
router.route("/Product/:id").put(updateproducts).delete(deleteproducts).get(getProductDetails)

module.exports =router;