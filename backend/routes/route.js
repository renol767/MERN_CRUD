// eslint-disable-next-line no-unused-vars
let mongoose = require('mongoose'),
    express = require('express'),
    router = express.Router();

// Model
let dataSchema = require('../Models/Model');

// Create ROUTE
router.route('/create').post((req, res, next) => {
    dataSchema.create(req.body, (error, data) => {
        if (error) {
            return next(error)
        } else {
            console.log(data)
            res.json(data)
        }
    })
});

// Read ROUTE
router.route('/').get((req, res, next) => {
    // eslint-disable-next-line array-callback-return
    dataSchema.find((error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
});

// Read Single ROUTE
router.route('/edit/:id').get((req, res, next) => {
    dataSchema.findById(req.params.id, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})

// UPDATE ROUTE
router.route('/update/:id').put((req, res, next) => {
    dataSchema.findByIdAndUpdate(req.params.id, {
        $set: req.body
    }, (error, data) => {
        if (error) {
            console.log(error)
            return next(error);
        } else {
            res.json(data)
            console.log('Student updated successfully !')
        }
    })
})

// DELETE ROUTE
router.route('/delete/:id').delete((req, res, next) => {
    dataSchema.findByIdAndRemove(req.params.id, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.status(200).json({
                msg: data
            })
        }
    })
})

module.exports = router;