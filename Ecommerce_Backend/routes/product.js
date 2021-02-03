const express = require('express')
const router = express.Router()

const { create, productById, read, remove, update, list, listRelated, listCategories, listBySearch, photo, listSearch } = require('../controllers/product')
const { requireSignin, isAuth, isAdmin } = require('../controllers/auth')
const { userById } = require('../controllers/user')

router.get("/product/:productId", read)
router.post("/product/create/:userId", requireSignin, isAdmin, isAdmin, create)
router.put("/product/:productId/:userId", requireSignin, isAdmin, isAdmin, update)
router.delete("/product/:productId/:userId", requireSignin, isAdmin, isAdmin, remove)

router.get('/products', list)
router.get('/products/search', listSearch)
router.get('/products/related/:productId', listRelated)
router.get('/product/categories/', listCategories)
router.post('/products/by/search', listBySearch)
router.get('/product/photo/:productId', photo)

router.param("userId", userById);
router.param("productId", productById);

module.exports = router;

