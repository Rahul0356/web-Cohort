// Define an array of movie objects, each containing a title and an array of ratings.
let movieRatings = [
    { title: "Movie A", ratings: [4, 5, 3] },
    { title: "Movie B", ratings: [5, 5, 4] },
    { title: "Movie C", ratings: [3, 4, 2] },
];

// Use the map() function to create a new array with average ratings for each movie.
let averageRatings = movieRatings.map((movie) => {
    // Use reduce() to sum up all ratings in the 'ratings' array.
    let total = movie.ratings.reduce((sum, rating) => sum + rating, 0);

    // Calculate the average rating by dividing the total by the number of ratings.
    let average = total / movie.ratings.length;

    // Return a new object containing the movie title and the formatted average rating.
    return { 
        title: movie.title, 
        averageRating: parseFloat(average.toFixed(2)) // Convert to a float with 2 decimal places.
    };
});

// Print the result to the console.
console.log(averageRatings);
