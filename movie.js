function Movie(title, director, duration, releaseDate) {
  this.title = title;
  this.director = director;
  this.duration = duration;
  this.releaseDate = releaseDate;
}

const movieArr = [
  new Movie("Inception", "Christopher Nolan", 148, "2010-07-16"),
  new Movie("The Matrix", "Lana & Lilly Wachowski", 136, "1999-03-31"),
  new Movie("Parasite", "Bong Joon-ho", 132, "2019-05-30")
];

document.writeln("<table border='1'>");

document.writeln("<tr>");
for (let key in movieArr[0]) {
  document.write("<th>" + key + "</th>");
}
document.writeln("</tr>");

for (let movie of movieArr) {
  document.writeln("<tr>");
  for (let key in movie) {
    document.write("<td>" + movie[key] + "</td>");
  }
  document.writeln("</tr>");
}

document.writeln("</table>");
