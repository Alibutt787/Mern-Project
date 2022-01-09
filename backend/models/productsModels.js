const mongose =require("mongoose");

const productScheme = mongose.Schema({
    name:{
        type:String,
        required:[true, "please enter the Name of Product"],
   trim:true  },
    description:{
        type:String,
        required:[true, "please enter the Name of Description"]
    },
    price:{
        type:Number,
        required:[true, "please enter Price"],
        maxLength:[5, "price cannot exceed 8 character"],
    },
    rating:{
        type:Number,
        default:0}
,
images:[{
    public_id:{
        type:String,
    required:true
    },
    url:{
        type:String,
    required:true
    },
}   ],
category:{
    type:String,
    required:[true, "Please Enter Product Category"]
},
stock:{
    type:Number,
    required:[true , "please enter the stock"],
    maxLength:[4,"stock cannot exceeded 4 character" ],
    default:0
},
reviews:[
    {
        name:{
            type:String,
            required:true },
            rating:{
                type:Number,
                required: true  },
                comment:{
                    type:String,
                    required :true }
    }
],
createdAt:{
    type:Date,
    default:Date.now
}

})


module.exports=mongose.model("Product",productScheme);