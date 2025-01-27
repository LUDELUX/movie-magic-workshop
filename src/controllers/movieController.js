import { Router } from "express";

const movieController = Router();

movieController.get('/search',(req,res)=>{
    const filter = req.query;
    const movies = movieService.getAll(filter);
    res.render('search',{movies,filter});
});

import movieService from "../services/movieService.js";

movieController.get('/create',(req,res)=>{
    res.render('create');
});
movieController.post('/create',(req,res)=>{
    const newMovie = req.body;

    movieService.create(newMovie);
    
    res.redirect('/')
});
movieController.get('/:movieId/details',(req,res)=>{
    const movieId = req.params.movieId;
    const movie = movieService.findOne(movieId);
    
    res.render('details',{movie});
})
export default movieController;