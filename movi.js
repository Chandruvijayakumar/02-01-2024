class Movie {
  constructor(title, studio, rating = "PG") {
    this.title = title;
    this.studio = studio;
    this.rating = rating;
  }
  static getPG(input) {
    let val = input.filter((Movie) => Movie.rating === "PG");
    return val;
  }
}
let ListOfMovies = [
  new Movie("Sing 2", "Illumination", "PG"),
  new Movie("The Impossible", "Telecinco Cinema", "R"),
  new Movie("Pretty Woman", "Disney studios", "PG"),
  new Movie("200 Pounds Beauty", "Colorpix Studio", "PG"),
  new Movie("Hunger", "B&W Studio.", "PG"),
];

console.log(Movie.getPG(ListOfMovies));

let CasinoRoyale = new Movie("Casino Royale", "Eon Productions", "PG­13");
console.log(CasinoRoyale);
