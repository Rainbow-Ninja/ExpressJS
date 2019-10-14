const express = require("express");
const router = express.Router();
const ProductController = require("./controller/product_controller");
const { celebrate, Joi, errors } = require('celebrate');

router.get("/", (req,res, next) => {
    // return next(new HttpError(404, "page not found"));
    return next(new HttpError(404, "page not found"));
    res.send("Welcome");
})

// create a products page
router.get("/products", (req, res) => {
    res.send("PRODUCTS");
})

const validate = (req, res, next) => {
    console.log("validation middleware")
    if (req.body) {
        if (!req.body.name) {
            // res.status(422).send("Name is required");
            return next(HttpError(422, "Name is required"));
        }
        if (req.body.price && req.body.price < 0) {
            return next(HttpError(422, "Price must be greater than 0"));
            // res.status(422).send("Price must be geater than 0");
        }
    }
    next();
}

// router.post("/products",validate, ProductController.create);
router.post("/products", celebrate({
    body: {
        name: Joi.string().required(),
        price: Joi.number().min(0).integer(),
    },
}) , ProductController.create);

router.use(errors());

module.exports = router;