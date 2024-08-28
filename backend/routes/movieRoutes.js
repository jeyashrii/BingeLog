import express from 'express';
const router=express.Router();
import { Movie } from "../models/movieModel.js";


router.post('/', async (req, res) => {

    try {
        if (
            !req.body.title ||
            !req.body.genre ||
            !req.body.rating
        ) {
            return res.status(400).send({
                message: 'send all required fields'
            })
        }
        const newMovie = {
            title: req.body.title,
            genre: req.body.genre,
            rating: req.body.rating,
        };
        const movie = await Movie.create(newMovie);
        return res.status(201).send(movie);
    }
    catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message })
    }

});
router.get('/', async (req, res) => {
    try {
        const movies = await Movie.find({});
        return res.status(200).json({  //use res.sendStatus 
            count: movies.length,
            data: movies
        });
    }
    catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }
})

router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const movies = await Movie.findById(id);
        return res.status(200).json({
            count: movies.length,
            data: movies
        })
    }
    catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message })
    }


})

router.put('/:id', async (req, res) => {
    try {
        if
            (
            !req.body.title ||
            !req.body.genre ||
            !req.body.rating) { return res.status(400).send('all the fields required enter all details') }
        const { id } = req.params;
        const result = await Movie.findByIdAndUpdate(id, req.body);
        if (!result) {
            return res.status(400).json({ message: "movie not found" })
        }
        return res.status(200).send("Movie updated successfully");
    }
    catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }
});

router.delete('/:id', async (req, res) => {
    try {

        const { id } = req.params;
        const result = await Movie.findByIdAndDelete(id);
        if (!result) {
            res.status(404).send("movie not found");
        }
        {
            return res.status(200).send("deleted successfully")
        }
    }
    catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message });

    }
}
)
export default router;