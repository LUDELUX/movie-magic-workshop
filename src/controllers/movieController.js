import { Router } from "express";

const movieController = Router();


import movieService from "../services/movieService.js";

movieController.get('/create',(req,res)=>{
    res.render('create');
});
movieController.get('/:movieId/details',(req,res)=>{
    const movieId = req.params.movieId;
    const movie = movieService.findOne(movieId);

    res.render('details',{movie});
})
export default movieController;