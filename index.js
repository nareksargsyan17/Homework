"use strict";
const personalMovieDB = {
	count: 0,
	movies: {},
	actors: {},
	genres: [],
	privat: true,
	showMyDB() {
		if (personalMovieDB.privat === false) {
			console.log("Այս պահին տվյալները անհասանելի են!!!");
		} else {
			console.log(personalMovieDB);
		}
		personalMovieDB.isVisibleMyDB();
	},
	isVisibleMyDB() {
		console.log(personalMovieDB.privat);
		if (personalMovieDB.privat === true) {
			personalMovieDB.privat = false;
		} else {
			personalMovieDB.privat = true;
		}
		console.log(personalMovieDB.privat);
	},
	yourFavoriteGenres() {
		for (let i = 0; i < 3; i++) {
			let genre = prompt(`Ձեր նախընտրելի ժանրը ${i + 1}`, "");
			if (genre == "" || genre === null || !isNaN(genre) || genre.trim().length > 20) {
				console.log("Մուտքագրեք ժանրը");
				i--;
			} else {
				personalMovieDB.genres[i] = genre.trim();
			}
		}
		console.log("Ձեր սիրելի ժանրերը.")
		personalMovieDB.genres.forEach((item, index, array) => {
			console.log(`Ժանր ${index + 1} - ${item}`);
		})
	},
	filmNameAndPoint() {
		for (let i = 0; i < 2; i++) {
			let filmName = prompt("Ո՞ր ֆիլմն եք վերջերս դիտել", "");
			if (filmName == "" || filmName === null || !isNaN(filmName) || filmName.length > 20) {
				console.log("Մուտքագրեք ֆիլմի անունը");
				i--;
			} else {
				for (let j = 0; j < 1; j++) {
					let filmPoint = parseInt(prompt("Ինչքա՞ն այդ ֆիլմը կգնահատեիք", ""));
					if (filmPoint == "" || filmPoint.length > 20 || filmPoint === null || isNaN(filmPoint) || filmPoint > 10 || filmPoint < 1) {
						console.log("Դրեք ձեր գնահատականը 1-10");
						j--;
					} else {
						console.log(`ձեր գնահատակնն է ${filmPoint}`);
						personalMovieDB.movies[filmName] = filmPoint;
					}
				}
			}
		}
	},
	yourNumberOfFilms() {
		let numberOfFilms = parseInt(prompt("Քանի՞ ֆիլմ եք դիտել այսօր", ""));
		while (isNaN(numberOfFilms) || numberOfFilms == "" || numberOfFilms === null || numberOfFilms.length > 20 || numberOfFilms < 0) {
			if (numberOfFilms == 0) {
				break;
			} else {
				numberOfFilms = parseInt(prompt("Քանի՞ ֆիլմ եք դիտել այսօր", ""));
			}
		}
		personalMovieDB.selectYourFilmCategory(numberOfFilms);
	},
	selectYourFilmCategory(numberOfFilms) {
		if (numberOfFilms == 0) {
			console.log("Դուք այսօր ֆիլմեր չեք դիտել!!");
		}
		else if (numberOfFilms < 10) {
			console.log("Դուք նայել եք բավականին քիչ ֆիլմեր");
		} else if (numberOfFilms < 30) {
			console.log("Դուք ֆիլմի սիրահար եք");
		} else {
			console.log("Դուք կինոման եք !!!");
		}
		personalMovieDB.count = numberOfFilms;
	}
}
const { yourFavoriteGenres, filmNameAndPoint, yourNumberOfFilms, showMyDB } = personalMovieDB;
yourNumberOfFilms();
filmNameAndPoint();
yourFavoriteGenres();
showMyDB();