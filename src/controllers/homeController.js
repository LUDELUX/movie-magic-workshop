import { Router } from 'express';

import movies from '../movies.js';
import movieService from '../services/movieService.js';
const router = Router();

router.get('/', (req, res) => {
    const movies = movieService.getAll();
    
    res.render('home',{ movies });
})
router.get('/about', (req, res) => {
    res.render('about')
})
export default router;