
import Movie from '../models/Movie.js';

export default {
    getAll(filter = {}) {
        let query =Movie.find({});

        if (filter.search) {
            query = query.where({title: filter.search})
        }
        if (filter.genre) {
            query = query.where({genre: filter.genre});
        }
        if (filter.year) {
            query = query.where({year: Number(filter.year)});
        }
        return query;
    },

    getOne(movieId) {

        const result = Movie.findById(movieId).populate('casts');

        return result;
    },
    getOneWithCats(movieId) {
        return this.getOne(movieId).populate('casts');
    },
    create(movieData) {
        const result = Movie.create({
            
            ...movieData,
            rating: Number(movieData.rating),
            year: Number(movieData.year),
        });

        
        return result;
    },
    async attachCast(movieId,castId){
      //  if (movie.casts.includes(castId)) {
     //       return;
      //  }
       // const movie =await Movie.findById(movieId);
       // movie.casts.push(castId);
       // await movie.save();
        //return movie;
        return Movie.findByIdAndUpdate(movieId,{$push: {casts:{cast:castId}}});
    }
}