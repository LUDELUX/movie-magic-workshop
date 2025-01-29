import { Router } from "express";

const movieController = Router();

movieController.get('/search',async (req,res)=>{
    const filter = req.query;
    const movies = await movieService.getAll(filter);
    res.render('search',{movies,filter});
});

import movieService from "../services/movieService.js";

movieController.get('/create',(req,res)=>{
    res.render('create');
});
movieController.post('/create',async (req,res)=>{
    const newMovie = req.body;

    await movieService.create(newMovie);
    
    res.redirect('/')
});
movieController.get('/:movieId/details',async (req,res)=>{
    const movieId = req.params.movieId;
    const movie = await movieService.getOne(movieId);
    
    res.render('movie/details',{movie});
})
export default movieController;