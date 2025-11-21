function Movie(title, director, duration, releaseDate) {
  this.title = title;
  this.director = director;
  this.duration = duration;
  this.releaseDate = releaseDate;
}

const movieArr = [
  new Movie("Iron Man", "Jon Favreau", 126, "2008-05-02"),
  new Movie("The Avengers", "Joss Whedon", 143, "2012-05-04"),
  new Movie("Black Panther", "Ryan Coogler", 134, "2018-02-16")
];

document.writeln("<table border='1' style='border-collapse: collapse; text-align: center;'>");

document.writeln("<tr>");
for (let key in movieArr[0]) {
  document.write("<th>" + key + "</th>");
}
document.writeln("</tr>");

let index = 0;
for (let movie of movieArr) {
  let rowColor = index % 2 === 0 ? "lightblue" :"#38e2d1ff";
  document.write("<tr style='background-color:" + rowColor + "'>");
  for (let key in movie) {
    document.write("<td>" + movie[key] + "</td>");
  }
  document.writeln("</tr>");
  index++;
}

document.writeln("</table>");
