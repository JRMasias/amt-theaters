interface MovieTypes
{
     title: string,
     description: string,
     movieLength: string,
     rating: string,
     imgSrc: string[],
     imgAspect: number[],
     releaseDate: Date,
}

export const MOVIES: MovieTypes[] = [ {
     title: "Movie1",
     description: "Movie 1 description will go here. This is just a placeholder.",
     imgSrc: [ "/images/poster_1.png", "/images/movie_1_4-5.png", ],
     imgAspect: [ 45 ],
     movieLength: "1h52m",
     rating: "R",
     releaseDate: new Date("9/22/2026"),
},
{
     title: "Movie2",
     description: "Movie 2 description will go here. This is just a placeholder.",
     imgSrc: [ "/images/poster_2.png", "/images/movie_1_4-5.png", ],
     imgAspect: [ 45 ],
     movieLength: "2h14m",
     rating: "R",
     releaseDate: new Date("10/28/2026"),
} ];