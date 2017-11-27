/**
 *   @author Essmaker, Jo'Anne (joannessmaker@gmail.com)
 *   @summary Project 4 || created: 10/15/2017
 */

"use strict";
const PROMPT = require('readline-sync');

let continueResponse;
let movieRating1, movieRating2, movieRating3, totalRatingSum, averageRating;
let movieTitle;

function main() {
    process.stdout.write('\x1Bc');
    setContinueResponse();
    while (continueResponse === 1) {
        setMovieTitle();
        setMovieRating1();
        setMovieRating2();
        setMovieRating3();
        setTotalRatingSum();
        setAverageRating();
        printAverageRating();
        setContinueResponse();
    }
        return main();
}

main();

/**
 * @method setContinueResponse
 * @desc Continue Response
 */
function setContinueResponse() {
    if (continueResponse = null) {
        continueResponse = 1;
        while (continueResponse !== 0 && continueResponse !== 1) {
            continueResponse = Number(PROMPT.question(`\nDo you want to continue? [0=no, 1=yes]: `))
        }
    } else {
        continueResponse = 1;
    }
}

/**
 * @method setMovieTitle
 * @desc Input Movie Title
 */
function setMovieTitle() {
    movieTitle = PROMPT.question(`\nPLEASE ENTER MOVIE TITLE: `);
}

/**
 * @method setMovieRating1
 * @desc Rating of Action Sequences
 */
function setMovieRating1() {
    movieRating1 = Number(PROMPT.question(`\tHow Many Stars Would You Rate the Action Sequences in ${movieTitle}? `));
    if (movieRating1 < 0 || movieRating1 > 5) {
        console.log(`\tI'M SORRY, PLEASE RATE THIS MOVIE FROM 1-5 STARS. PLEASE TRY AGAIN. `);
        return setMovieRating1();
    }
}

/**
 * @method setMovieRating2
 * @desc Rating of Plot
 */
function setMovieRating2() {
    movieRating2 = Number(PROMPT.question(`\tHow Many Stars Would You Rate the Plot for ${movieTitle}? `));
    if (movieRating2 < 0 || movieRating2 > 5) {
        console.log(`\tI'M SORRY, PLEASE RATE THIS MOVIE FROM 1-5 STARS. PLEASE TRY AGAIN. `);
        return setMovieRating2();
    }
}

/**
 * @method setMovieRating3
 * @desc Rating of Main Character
 */
function setMovieRating3() {
    movieRating3 = Number(PROMPT.question(`\tHow Many Stars Would You rate the Main Character in ${movieTitle}? `));
     if (movieRating3 < 0 || movieRating3 > 5) {
        console.log(`\tI'M SORRY, PLEASE RATE THIS MOVIE FROM 1-5 STARS. PLEASE TRY AGAIN. `);
        return setMovieRating3();
    }
}

/**
 * @method setTotalRatingSum
 * @desc Sum of all three ratings
 */
function setTotalRatingSum() {
    totalRatingSum = (movieRating1 + movieRating2 + movieRating3);
}

/**
 * @method setAverageRating
 * @desc Average of all three ratings
 */
function setAverageRating() {
    averageRating = totalRatingSum / 3;
}

/**
 * @method printAverageRating
 * @desc Print Average Rating To Screen
 */
function printAverageRating() {
    console.log(`\t${movieTitle} = ${averageRating} STARS `)
}

/*
Movie Kiosk:  Re-factor your code to run a kiosk at a movie theater.  Program should loop infinitely
to allow user to either see average rating of previous user entries or enter their own review.
 */
