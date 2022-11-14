"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.movie = void 0;
class movie {
    constructor(id_movie, title, budget, homepage, overview, popularity, release_date, revenue, runtime, movie_status, tagline, vote_average, vote_count) {
        this.id_movie = id_movie;
        this.title = title;
        this.budget = budget;
        this.homepage = homepage;
        this.overview = overview;
        this.popularity = popularity;
        this.release_date = release_date;
        this.revenue = revenue;
        this.runtime = runtime;
        this.movie_status = movie_status;
        this.tagline = tagline;
        this.vote_average = vote_average;
        this.vote_count = vote_count;
    }
    ;
}
exports.movie = movie;
;
