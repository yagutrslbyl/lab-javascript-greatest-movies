// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    const allDirectors = moviesArray.map(movie => movie.director);
    const cleanDirectors = [...new Set(allDirectors)];
    return cleanDirectors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    const spielbergDramaMovies=moviesArray.filter(movie=>movie.director==="Steven Spielberg" && movie.genre.includes("Drama"));
    return spielbergDramaMovies.length;

}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (moviesArray.length === 0) return 0;
    const totalScore = moviesArray.reduce((acc,movies) => {
        if (movies.score) {
            return acc + movies.score;
        } else {
            return acc;
        }    }, 0);
    const averageScore = totalScore / moviesArray.length;
    return Number(averageScore.toFixed(2));

}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    const dramaMovies = moviesArray.filter(movie => movie.genre.includes("Drama"));
    if (dramaMovies.length === 0) return 0;
    const totalScore = dramaMovies.reduce((acc, movie) => {
        if (movie.score) {
            return acc + movie.score;
        } else {
            return acc;
        }    }, 0);
    const averageScore = totalScore / dramaMovies.length;
    return Number(averageScore.toFixed(2));
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    const sortedMovies = [...moviesArray].sort((a, b) => {
        if (a.year === b.year) {
            return a.title.localeCompare(b.title);
        }     return a.year - b.year;   });
    return sortedMovies;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    const titles = moviesArray.map(movie => movie.title);
    const sortedTitles = titles.sort((a, b) => a.localeCompare(b));
    return sortedTitles.slice(0, 20);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
    return moviesArray.map(movie => {
    
        const newMovie = { ...movie };
        
        if (!newMovie.duration) {
            newMovie.duration = 0;
            return newMovie;
        }

        const duration = newMovie.duration;
        const hoursMatch = duration.match(/(\d+)h/);
        const minutesMatch = duration.match(/(\d+)min/);
        let totalMinutes = 0;

        if (hoursMatch) totalMinutes += parseInt(hoursMatch[1]) * 60;
        if (minutesMatch) totalMinutes += parseInt(minutesMatch[2] || minutesMatch[1]); // bəzən match qrupu dəyişə bilər

        newMovie.duration = totalMinutes;
        return newMovie;
    });
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
    if (moviesArray.length === 0) return null;

    const scoresByYear = {};
    moviesArray.forEach(movie => {
        if (!scoresByYear[movie.year]) {
            scoresByYear[movie.year] = [];
        }
        
        scoresByYear[movie.year].push(movie.score || 0);
    });

    let bestYear = null;
    let highestAvg = -1;

    
    for (const year in scoresByYear) {
        const scores = scoresByYear[year];
        const total = scores.reduce((acc, score) => acc + score, 0);
        const avg = total / scores.length;

      
        if (avg > highestAvg) {
            highestAvg = avg;
            bestYear = year;
        } else if (avg === highestAvg && year < bestYear) {
            bestYear = year;
        }
    }

    return `The best year was ${bestYear} with an average score of ${Number(highestAvg.toFixed(1))}`;
}