import soda from "@/public/images/food_1.jpg";
import candy1 from "@/public/images/food_2.jpg";
import candy2 from "@/public/images/food_3.jpg";
import popcorn from "@/public/images/food_4.jpg";
import nachos from "@/public/images/food_5.jpg";
import hotdog from "@/public/images/food_6.jpg";
import combo from "@/public/images/food_7.jpg";
import ccFries from "@/public/images/food_8.jpg";

export const FOOD = [
     {
          id: 0,
          name: "Popcorn",
          description: "A classic movie snack, our popcorn is freshly popped and lightly salted for the perfect balance of flavor.",
          price: 5.00,
          imgSrc: popcorn,
     },
     {
          id: 1,
          name: "Spike & Like",
          description: "A delicious combination of spikes and likes, perfect for moviegoers who want the best of both worlds.",
          price: 7.00,
          imgSrc: candy1,
     },
     {
          id: 2,
          name: "Caramel Chunks",
          description: "Sweet and crunchy caramel chunks, perfect for satisfying your sweet tooth during the movie.",
          price: 6.00,
          imgSrc: candy2,
     },
     {
          id: 3,
          name: "Nachos",
          description: "Crispy tortilla chips topped with melted cheese and jalapenos, perfect for sharing with friends during the movie.",
          price: 8.00,
          imgSrc: nachos,
     },
     {
          id: 4,
          name: "Hot Dog",
          description: "A classic movie snack, our hot dogs are made with high-quality beef and served with your choice of toppings.",
          price: 4.00,
          imgSrc: hotdog,
     },
     {
          id: 5,
          name: "Chili Cheese Fries",
          description: "Crispy fries topped with savory chili and melted cheese, perfect for satisfying your hunger during the movie.",
          price: 7.00,
          imgSrc: ccFries,
     },
     {
          id: 6,
          name: "Combo Meal",
          description: "Get the best of both worlds with our combo meal, which includes popcorn and a drink.",
          price: 8.00,
          imgSrc: combo,
     },
     {
          id: 7,
          name: "Soda",
          description: "Quench your thirst with our refreshing soda, available in a variety of flavors.",
          price: 4.00,
          imgSrc: soda,
     }
];