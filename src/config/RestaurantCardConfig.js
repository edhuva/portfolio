import restaurant1 from '../assets/restaurant1.jpeg';
import restaurant2 from '../assets/restaurant2.jpeg';
import restaurant3 from '../assets/restaurant3.jpeg';
import restaurant4 from '../assets/restaurant4.jpeg';
import restaurant5 from '../assets/restaurant5.jpeg';
import restaurant7 from '../assets/restaurant7.jpeg';
import restaurant8 from '../assets/restaurant8.jpeg';
import restaurant9 from '../assets/restaurant9.jpeg';
import food1 from '../assets/food1.jpeg';
import food2 from '../assets/food2.jpeg';
import food3 from '../assets/food3.jpeg';
import food4 from '../assets/food4.jpeg';
import food5 from '../assets/food5.jpeg';
import food6 from '../assets/food6.jpeg';
import food7 from '../assets/food7.jpeg';
import food8 from '../assets/food8.jpeg';

const RestaurantsData = [
    { 
        id: '1', src: restaurant1, alt: 'Restaurant', title: 'Lauwin Restaurant', rating: 4.2, countRatings: 102, open: '10:30am - 17:30pm', subTitle: 'DINING', address: 'Trumpet on Keyes Corner 40 Keyes and, Jellice Ave, Rosebank, Johannesburg, 2196',
        menu: [
            {
                id:'1', src: food1, alt: 'menu', title: 'Parsely Shrimp Meal', stars: '⭐⭐⭐⭐', rating: 12, price: 206
            },
            {
                id:'2', src: food2, alt: 'menu', title: 'Steak stew Meal', stars: '⭐⭐⭐', rating: 8, price: 129
            },
            {
                id:'3', src: food3, alt: 'menu', title: 'Kings Burger and Chips', stars: '⭐⭐', rating: 4, price: 110
            },
            {
                id:'4', src: food4, alt: 'menu', title: 'Beef Burger', stars: '⭐⭐⭐⭐', rating: 12, price: 106
            },
            {
                id:'5', src: food5, alt: 'menu', title: 'Chicken Breast Salad', stars: '⭐⭐⭐', rating: 8, price: 103
            },
            {
                id:'6', src: food6, alt: 'menu', title: 'Mariscos Fish', stars: '⭐⭐⭐⭐', rating: 12, price: 356
            },
            {
                id:'7', src: food7, alt: 'menu', title: 'Onion Rawa Meal', stars: '⭐⭐', rating: 4, price: 178
            },
            {
                id:'8', src: food8, alt: 'menu', title: 'Pork Roasted', stars: '⭐⭐⭐⭐', rating: 12, price: 206
            }
        ]

    },
    { 
        id: '2', src: restaurant2, alt: 'Restaurant', title: 'The GrillMeal Rosebank', rating: '4.4', countRatings: 102, open: '10:30am - 17:30pm', subTitle: 'DINING', address: '2, The Firs, Hyatt Center, Oxford Road & Blermann Ave, Rosebank, Johannesburg, 2196', 
        menu: [
            {
                id:'1', src: food1, alt: 'menu', title: 'Parsely Shrimp Meal', stars: '⭐⭐⭐⭐', rating: 12, price: 206
            },
            {
                id:'2', src: food2, alt: 'menu', title: 'Steak stew Meal', stars: '⭐⭐⭐', rating: 8, price: 129
            },
            {
                id:'3', src: food3, alt: 'menu', title: 'Kings Burger and Chips', stars: '⭐⭐', rating: 4, price: 110
            },
            {
                id:'4', src: food4, alt: 'menu', title: 'Beef Burger', stars: '⭐⭐⭐⭐', rating: 12, price: 106
            },
            {
                id:'5', src: food5, alt: 'menu', title: 'Chicken Breast Salad', stars: '⭐⭐⭐', rating: 8, price: 103
            },
            {
                id:'6', src: food6, alt: 'menu', title: 'Mariscos Fish', stars: '⭐⭐⭐⭐', rating: 12, price: 356
            },
            {
                id:'7', src: food7, alt: 'menu', title: 'Onion Rawa Meal', stars: '⭐⭐', rating: 4, price: 178
            },
            {
                id:'8', src: food8, alt: 'menu', title: 'Pork Roasted', stars: '⭐⭐⭐⭐', rating: 12, price: 206
            }
        ]
    },
    { 
        id: '3', src: restaurant3, alt: 'Restaurant', title: 'Skydeck - The Gateway', rating: '3.2', countRatings: 102, open: '10:30am - 17:30pm', subTitle: 'DINING', address: '2 North Ave, Continental, Chines The Gateway Johannesburg, 2196', 
        menu: [
            {
                id:'1', src: food1, alt: 'menu', title: 'Parsely Shrimp Meal', stars: '⭐⭐⭐⭐', rating: 12, price: 206
            },
            {
                id:'2', src: food2, alt: 'menu', title: 'Steak stew Meal', stars: '⭐⭐⭐', rating: 8, price: 129
            },
            {
                id:'3', src: food3, alt: 'menu', title: 'Kings Burger and Chips', stars: '⭐⭐', rating: 4, price: 110
            },
            {
                id:'4', src: food4, alt: 'menu', title: 'Beef Burger', stars: '⭐⭐⭐⭐', rating: 12, price: 106
            },
            {
                id:'5', src: food5, alt: 'menu', title: 'Chicken Breast Salad', stars: '⭐⭐⭐', rating: 8, price: 103
            },
            {
                id:'6', src: food6, alt: 'menu', title: 'Mariscos Fish', stars: '⭐⭐⭐⭐', rating: 12, price: 356
            },
            {
                id:'7', src: food7, alt: 'menu', title: 'Onion Rawa Meal', stars: '⭐⭐', rating: 4, price: 178
            },
            {
                id:'8', src: food8, alt: 'menu', title: 'Pork Roasted', stars: '⭐⭐⭐⭐', rating: 12, price: 206
            }
        ]
    },
    { 
        id: '4', src: restaurant4, alt: 'Restaurant', title: 'Signature House Restaurant', rating: '4.9', countRatings: 102, open: '10:30am - 17:30pm', subTitle: 'DINING', address: '23 Sp U13, Rivonia Rd, Sandton, johannesburg, 2057', 
        menu: [
            {
                id:'1', src: food1, alt: 'menu', title: 'Parsely Shrimp Meal', stars: '⭐⭐⭐⭐', rating: 12, price: 206
            },
            {
                id:'2', src: food2, alt: 'menu', title: 'Steak stew Meal', stars: '⭐⭐⭐', rating: 8, price: 129
            },
            {
                id:'3', src: food3, alt: 'menu', title: 'Kings Burger and Chips', stars: '⭐⭐', rating: 4, price: 110
            },
            {
                id:'4', src: food4, alt: 'menu', title: 'Beef Burger', stars: '⭐⭐⭐⭐', rating: 12, price: 106
            },
            {
                id:'5', src: food5, alt: 'menu', title: 'Chicken Breast Salad', stars: '⭐⭐⭐', rating: 8, price: 103
            },
            {
                id:'6', src: food6, alt: 'menu', title: 'Mariscos Fish', stars: '⭐⭐⭐⭐', rating: 12, price: 356
            },
            {
                id:'7', src: food7, alt: 'menu', title: 'Onion Rawa Meal', stars: '⭐⭐', rating: 4, price: 178
            },
            {
                id:'8', src: food8, alt: 'menu', title: 'Pork Roasted', stars: '⭐⭐⭐⭐', rating: 12, price: 206
            }
        ]
    },
    { 
        id: '5', src: restaurant5, alt: 'Restaurant', title: "Eddie's Restaurant", rating: '3.2', countRatings: 102, open: '10:30am - 17:30pm', subTitle: 'DINING', address: '143 St Andrews Rd, Parktown, Johannesburg, 2193', 
        menu: [
            {
                id:'1', src: food1, alt: 'menu', title: 'Parsely Shrimp Meal', stars: '⭐⭐⭐⭐', rating: 12, price: 206
            },
            {
                id:'2', src: food2, alt: 'menu', title: 'Steak stew Meal', stars: '⭐⭐⭐', rating: 8, price: 129
            },
            {
                id:'3', src: food3, alt: 'menu', title: 'Kings Burger and Chips', stars: '⭐⭐', rating: 4, price: 110
            },
            {
                id:'4', src: food4, alt: 'menu', title: 'Beef Burger', stars: '⭐⭐⭐⭐', rating: 12, price: 106
            },
            {
                id:'5', src: food5, alt: 'menu', title: 'Chicken Breast Salad', stars: '⭐⭐⭐', rating: 8, price: 103
            },
            {
                id:'6', src: food6, alt: 'menu', title: 'Mariscos Fish', stars: '⭐⭐⭐⭐', rating: 12, price: 356
            },
            {
                id:'7', src: food7, alt: 'menu', title: 'Onion Rawa Meal', stars: '⭐⭐', rating: 4, price: 178
            },
            {
                id:'8', src: food8, alt: 'menu', title: 'Pork Roasted', stars: '⭐⭐⭐⭐', rating: 12, price: 206
            }
        ]
    },
    { 
         id: '6', src: restaurant9, alt: 'Restaurant', title: 'Besalt Restaurant', rating: '4.2', countRatings: 102, open: '10:30am - 17:30pm', subTitle: 'DINING', address: '65 Corner Eastwood and, Parks Blvd, Rosebank, Johannesburg, 2196', 
         menu: [
            {
                id:'1', src: food1, alt: 'menu', title: 'Parsely Shrimp Meal', stars: '⭐⭐⭐⭐', rating: 12, price: 206
            },
            {
                id:'2', src: food2, alt: 'menu', title: 'Steak stew Meal', stars: '⭐⭐⭐', rating: 8, price: 129
            },
            {
                id:'3', src: food3, alt: 'menu', title: 'Kings Burger and Chips', stars: '⭐⭐', rating: 4, price: 110
            },
            {
                id:'4', src: food4, alt: 'menu', title: 'Beef Burger', stars: '⭐⭐⭐⭐', rating: 12, price: 106
            },
            {
                id:'5', src: food5, alt: 'menu', title: 'Chicken Breast Salad', stars: '⭐⭐⭐', rating: 8, price: 103
            },
            {
                id:'6', src: food6, alt: 'menu', title: 'Mariscos Fish', stars: '⭐⭐⭐⭐', rating: 12, price: 356
            },
            {
                id:'7', src: food7, alt: 'menu', title: 'Onion Rawa Meal', stars: '⭐⭐', rating: 4, price: 178
            },
            {
                id:'8', src: food8, alt: 'menu', title: 'Pork Roasted', stars: '⭐⭐⭐⭐', rating: 12, price: 206
            }
        ]

    },
    { 
        id: '7', src: restaurant7, alt: 'Restaurant', title: 'Cosmos Cafe & Bar', rating: '4.4', countRatings: 102, open: '10:30am - 17:30pm', subTitle: 'DINING', address: '21 Dunkeld West Shopping Centre, Jan Smuts Ave, Dunkeld West, Randburg, 2193', 
        menu: [
            {
                id:'1', src: food1, alt: 'menu', title: 'Parsely Shrimp Meal', stars: '⭐⭐⭐⭐', rating: 12, price: 206
            },
            {
                id:'2', src: food2, alt: 'menu', title: 'Steak stew Meal', stars: '⭐⭐⭐', rating: 8, price: 129
            },
            {
                id:'3', src: food3, alt: 'menu', title: 'Kings Burger and Chips', stars: '⭐⭐', rating: 4, price: 110
            },
            {
                id:'4', src: food4, alt: 'menu', title: 'Beef Burger', stars: '⭐⭐⭐⭐', rating: 12, price: 106
            },
            {
                id:'5', src: food5, alt: 'menu', title: 'Chicken Breast Salad', stars: '⭐⭐⭐', rating: 8, price: 103
            },
            {
                id:'6', src: food6, alt: 'menu', title: 'Mariscos Fish', stars: '⭐⭐⭐⭐', rating: 12, price: 356
            },
            {
                id:'7', src: food7, alt: 'menu', title: 'Onion Rawa Meal', stars: '⭐⭐', rating: 4, price: 178
            },
            {
                id:'8', src: food8, alt: 'menu', title: 'Pork Roasted', stars: '⭐⭐⭐⭐', rating: 12, price: 206
            }
        ]
    },
    { 
        id: '8', src: restaurant8, alt: 'Restaurant', title: 'The 6 Senses', rating: '4.2', countRatings: 102, open: '10:30am - 17:30pm', subTitle: 'DINING', address: '45 Saxon Rd, Sandhurst, Johannesburg, 2196', 
        menu: [
            {
                id:'1', src: food1, alt: 'menu', title: 'Parsely Shrimp Meal', stars: '⭐⭐⭐⭐', rating: 12, price: 206
            },
            {
                id:'2', src: food2, alt: 'menu', title: 'Steak stew Meal', stars: '⭐⭐⭐', rating: 8, price: 129
            },
            {
                id:'3', src: food3, alt: 'menu', title: 'Kings Burger and Chips', stars: '⭐⭐', rating: 4, price: 110
            },
            {
                id:'4', src: food4, alt: 'menu', title: 'Beef Burger', stars: '⭐⭐⭐⭐', rating: 12, price: 106
            },
            {
                id:'5', src: food5, alt: 'menu', title: 'Chicken Breast Salad', stars: '⭐⭐⭐', rating: 8, price: 103
            },
            {
                id:'6', src: food6, alt: 'menu', title: 'Mariscos Fish', stars: '⭐⭐⭐⭐', rating: 12, price: 356
            },
            {
                id:'7', src: food7, alt: 'menu', title: 'Onion Rawa Meal', stars: '⭐⭐', rating: 4, price: 178
            },
            {
                id:'8', src: food8, alt: 'menu', title: 'Pork Roasted', stars: '⭐⭐⭐⭐', rating: 12, price: 206
            }
        ]

    }
]

export default RestaurantsData