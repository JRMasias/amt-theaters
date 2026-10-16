interface CastTypes
{
     name: string,
     role: string,
}

interface MovieTypes
{
     id: number,
     title: string,
     description: string,
     movieLength: string,
     movieHours: number,
     movieMinutes: number,
     rating: string,
     imgSrc: string[],
     imgAspect: number[],
     imgWidths: number[],
     imgHeights: number[],
     releaseDate: Date,
     cast: CastTypes[],
}

export const MOVIES: MovieTypes[] = [ {
     id: 1,
     title: "Movie1",
     description: "Movie 1 description will go here. This is just a placeholder.",
     imgSrc: [ "/images/poster_1.png", "/images/movie_1_4-5.png", "/images/movie_1_4-3.png", "/images/movie_1_16-9.png" ],
     imgAspect: [ 45 ],
     imgWidths: [ 1024, 1122, 1448, 1672 ],
     imgHeights: [ 1536, 1402, 1086, 941 ],
     movieLength: "1h52m",
     movieHours: 1,
     movieMinutes: 52,
     rating: "R",
     releaseDate: new Date("9/22/2026"),
     cast: [
          {
               name: "Actor 1",
               role: "Actor"
          },
          {
               name: "Actor 2",
               role: "Actor"
          },
          {
               name: "Actor 3",
               role: "Actor"
          },
          {
               name: "Director Person",
               role: "Director"
          },
          {
               name: "Writer Person",
               role: "Writer"
          },
          {
               name: "Producer Person 1",
               role: "Producer"
          },
          {
               name: "Producer Person 2",
               role: "Producer"
          }
     ]
},
{
     id: 2,
     title: "Movie2",
     description: "Movie 2 description will go here. This is just a placeholder.",
     imgSrc: [ "/images/poster_2.png", "/images/movie_2_4-5.png", "/images/movie_2_4-3.png", "/images/movie_2_16-9.png" ],
     imgAspect: [ 45 ],
     imgWidths: [ 1024, 1122, 1448, 1672 ],
     imgHeights: [ 1536, 1402, 1086, 941 ],
     movieLength: "2h14m",
     movieHours: 2,
     movieMinutes: 14,
     rating: "R",
     releaseDate: new Date("10/28/2026"),
     cast: [
          {
               name: "Actor 1",
               role: "Actor"
          },
          {
               name: "Actor 2",
               role: "Actor"
          },
          {
               name: "Actor 3",
               role: "Actor"
          },
          {
               name: "Director Person",
               role: "Director"
          },
          {
               name: "Writer Person",
               role: "Writer"
          },
          {
               name: "Producer Person 1",
               role: "Producer"
          },
          {
               name: "Producer Person 2",
               role: "Producer"
          }
     ]
} ];