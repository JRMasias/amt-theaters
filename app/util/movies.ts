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

export const MOVIES: MovieTypes[] = [
     {
          id: 1,
          title: "Super Action Movie",
          description: "Super Action Movie description will go here. This is just a placeholder.",
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
          title: "Afraid",
          description: "Afraid description will go here. This is just a placeholder.",
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
     },
     {
          id: 11,
          title: "Still Terrified",
          description: "Still Terrified description will go here. This is just a placeholder.",
          imgSrc: [ "/images/poster_11.png", "/images/movie_11_4-5.png", "/images/movie_11_4-3.png", "/images/movie_11_16-9.png" ],
          imgAspect: [ 45 ],
          imgWidths: [ 1024, 1122, 1448, 1672 ],
          imgHeights: [ 1536, 1402, 1086, 941 ],
          movieLength: "2h35m",
          movieHours: 2,
          movieMinutes: 35,
          rating: "R",
          releaseDate: new Date("10/31/2026"),
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
          id: 3,
          title: "Serious Film",
          description: "Serious Film description will go here. This is just a placeholder.",
          imgSrc: [ "/images/poster_3.png", "/images/movie_3_4-5.png", "/images/movie_3_4-3.png", "/images/movie_3_16-9.png" ],
          imgAspect: [ 45 ],
          imgWidths: [ 1024, 1122, 1448, 1672 ],
          imgHeights: [ 1536, 1402, 1086, 941 ],
          movieLength: "5h11m",
          movieHours: 5,
          movieMinutes: 11,
          rating: "R",
          releaseDate: new Date("09/28/2026"),
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
          id: 6,
          title: "Superhero Movie: The Moviefilm",
          description: "Superhero Movie: The Moviefilm description will go here. This is just a placeholder.",
          imgSrc: [ "/images/poster_6.png", "/images/movie_6_4-5.png", "/images/movie_6_4-3.png", "/images/movie_6_16-9.png" ],
          imgAspect: [ 45 ],
          imgWidths: [ 1024, 1122, 1448, 1672 ],
          imgHeights: [ 1536, 1402, 1086, 941 ],
          movieLength: "2h14m",
          movieHours: 2,
          movieMinutes: 14,
          rating: "PG-13",
          releaseDate: new Date("11/11/2026"),
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
          id: 10,
          title: "History Movie: A Journey Through The Past",
          description: "History Movie: A Journey Through The Past description will go here. This is just a placeholder.",
          imgSrc: [ "/images/poster_10.png", "/images/movie_10_4-5.png", "/images/movie_10_4-3.png", "/images/movie_10_16-9.png" ],
          imgAspect: [ 45 ],
          imgWidths: [ 1024, 1122, 1448, 1672 ],
          imgHeights: [ 1536, 1402, 1086, 941 ],
          movieLength: "3h01m",
          movieHours: 3,
          movieMinutes: 1,
          rating: "R",
          releaseDate: new Date("12/25/2026"),
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
          id: 5,
          title: "Dark of Space",
          description: "Dark of Space description will go here. This is just a placeholder.",
          imgSrc: [ "/images/poster_5.png", "/images/movie_5_4-5.png", "/images/movie_5_4-3.png", "/images/movie_5_16-9.png" ],
          imgAspect: [ 45 ],
          imgWidths: [ 1024, 1122, 1448, 1672 ],
          imgHeights: [ 1536, 1402, 1086, 941 ],
          movieLength: "1h32m",
          movieHours: 1,
          movieMinutes: 32,
          rating: "PG-13",
          releaseDate: new Date("09/01/2026"),
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
          id: 7,
          title: "My Funny Tragedy",
          description: "My Funny Tragedy description will go here. This is just a placeholder.",
          imgSrc: [ "/images/poster_7.png", "/images/movie_7_4-5.png", "/images/movie_7_4-3.png", "/images/movie_7_16-9.png" ],
          imgAspect: [ 45 ],
          imgWidths: [ 1024, 1122, 1448, 1672 ],
          imgHeights: [ 1536, 1402, 1086, 941 ],
          movieLength: "1h27m",
          movieHours: 1,
          movieMinutes: 27,
          rating: "R",
          releaseDate: new Date("11/25/2026"),
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
          id: 9,
          title: "Action Fight IV",
          description: "Action Fight IV description will go here. This is just a placeholder.",
          imgSrc: [ "/images/poster_9.png", "/images/movie_9_4-5.png", "/images/movie_9_4-3.png", "/images/movie_9_16-9.png" ],
          imgAspect: [ 45 ],
          imgWidths: [ 1024, 1122, 1448, 1672 ],
          imgHeights: [ 1536, 1402, 1086, 941 ],
          movieLength: "2h22m",
          movieHours: 2,
          movieMinutes: 22,
          rating: "R",
          releaseDate: new Date("10/16/2026"),
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
          id: 8,
          title: "New Love Again 2: Electric Boogaloo",
          description: "New Love Again 2: Electric Boogaloo description will go here. This is just a placeholder.",
          imgSrc: [ "/images/poster_8.png", "/images/movie_8_4-5.png", "/images/movie_8_4-3.png", "/images/movie_8_16-9.png" ],
          imgAspect: [ 45 ],
          imgWidths: [ 1024, 1122, 1448, 1672 ],
          imgHeights: [ 1536, 1402, 1086, 941 ],
          movieLength: "7h20m",
          movieHours: 7,
          movieMinutes: 20,
          rating: "R",
          releaseDate: new Date("10/10/2026"),
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
          id: 4,
          title: "The Princess Elf",
          description: "The Princess Elf description will go here. This is just a placeholder.",
          imgSrc: [ "/images/poster_4.png", "/images/movie_4_4-5.png", "/images/movie_4_4-3.png", "/images/movie_4_16-9.png" ],
          imgAspect: [ 45 ],
          imgWidths: [ 1024, 1122, 1448, 1672 ],
          imgHeights: [ 1536, 1402, 1086, 941 ],
          movieLength: "1h29m",
          movieHours: 1,
          movieMinutes: 29,
          rating: "PG",
          releaseDate: new Date("12/12/2026"),
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
];