// JavaScript basics part 1 ex 3

/*jslint browser */
/*global document */

function Movie(title, director, duration, releaseDate) {
    this.title = title;
    this.director = director;
    this.duration = duration;
    this.releaseDate = releaseDate;
}

var movieArr = [
    new Movie("Inception", "Christopher Nolan", 148, "2010-07-16"),
    new Movie("The Matrix", "Lana & Lilly Wachowski", 136, "1999-03-31"),
    new Movie("Parasite", "Bong Joon-ho", 132, "2019-05-30")
];

var keys = ["title", "director", "duration", "releaseDate"];
var i;
var j;
var movie;

document.writeln("<table border='1'>");

document.writeln("<tr>");
for (i = 0; i < keys.length; i += 1) {
    document.write("<th>" + keys[i] + "</th>");
}
document.writeln("</tr>");

for (i = 0; i < movieArr.length; i += 1) {
    movie = movieArr[i];
    document.writeln("<tr>");

    for (j = 0; j < keys.length; j += 1) {
        document.write("<td>" + movie[keys[j]] + "</td>");
    }

    document.writeln("</tr>");
}

document.writeln("</table>");
