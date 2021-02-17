const express = require("express")
const router = express.Router();
const Note = require('../models/noteModel')


router.route('/create').post((req, res) => {
    const title = req.body.title
    const text = req.body.text;
    const newNote = new Note({
        title,
        text
    })

    newNote.save()
})

router.route('/notes').get((req, res) => {
    Note.find()
        .then(foundNotes => res.json(foundNotes))
})

router.route('/notes/:id').get((req, res) => {
    Note.findOne({ "_id": req.params.id })
        .then(foundNote => res.json(foundNote))
})

router.route('/notes/:id').put((req, res, next) => {
    Note.findOneAndUpdate(req.params.id, {
        $set: req.body
    }, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
            console.log('Student updated successfully !')
        }
    })
})

router.route('/notes/:id').delete((req, res, next) => {
    Note.findOneAndDelete({ "_id": req.params.id })
        .then(data => res.json(data))
        .catch(next)
})


module.exports = router