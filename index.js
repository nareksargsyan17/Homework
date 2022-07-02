// "use strict";
const personalMovieDB = {
	count: 0,
	movies: {},
	actors: {},
	genres: [],
	privat: true,
	showMyDB() {
		if (personalMovieDB.privat == false) {
			console.log("Այս պահին տվյալները անհասանելի են!!!");
		} else {
			console.log(personalMovieDB);
		}
	},
	yourFavoriteGenres() {
		for (let i = 0; i < 3; i++) {
			let genre = prompt(`Ձեր նախընտրելի ժանրը ${i + 1}`, "");
			genre = genre.trim();
			if (genre == "" || (typeof genre) === 'object') {
				console.log("Մուտքագրեք ժանրը");
				i--;
			} else if (!isNaN(+genre)) {
				console.log("Դուք չեք կարող թիվ ներմուծել");
				i--;
			} else if (genre.length > 20) {
				console.log("Դուք չեք կարող 20-ից ավել էլեմենտներ օգտագործել");
				i--;
			}
			else {
				personalMovieDB.genres[i] = genre;
			}
		}
	},
	filmNameAndPoint() {
		for (let i = 0; i < 2; i++) {
			let filmName = prompt("Ո՞ր ֆիլմն եք վերջերս դիտել", "");
			filmName = filmName.trim();
			if (filmName == "" || (typeof filmName) === 'object') {
				console.log("Մուտքագրեք ֆիլմի անունը");
				i--;
			} else if (!isNaN(+filmName)) {
				console.log("Դուք չեք կարող թիվ ներմուծել");
				i--;
			} else if (filmName.length > 20) {
				console.log("Դուք չեք կարող 20-ից ավել էլեմենտներ օգտագործել");
				i--;
			} else {
				for (let j = 0; j < 1; j++) {
					let filmPoint = prompt("Ինչքա՞ն այդ ֆիլմը կգնահատեիք", "");
					filmPoint = filmPoint.trim();
					if (filmPoint == "") {
						console.log("Դրեք ձեր գնահատականը 0-10");
						j--;
					} else if (filmPoint.length > 20) {
						console.log("Դուք չեք կարող 20-ից ավել էլեմենտներ օգտագործել");
						j--;
					}
					else if (filmPoint > 0 && filmPoint <= 10) {
						filmPoint = Number(filmPoint);
						console.log(`ձեր գնահատակնն է ${filmPoint}`);
						personalMovieDB.movies[filmName] = filmPoint;
					} else if (filmPoint == "0") {
						filmPoint = Number(filmPoint);
						console.log(`ձեր գնահատակնն է ${filmPoint}`);
						personalMovieDB.movies[a] = filmPoint;
					} else {
						console.log("Դրեք ձեր գնահատականը 0-10");
						j--;
					}
				}
			}
		}
	},
	yourNumberOfFilms() {
		for (let i = 0; i < 1; i++) {
			let numberOfFilms = prompt("Քանի՞ ֆիլմ եք դիտել այսօր", "");
			if (numberOfFilms == "") {
				console.log("Եթե ֆիլմեր չեք նայել խնդրում եք մուտքագրեք 0");
				i--;
			} else if (numberOfFilms.length > 20) {
				console.log("Դուք չեք կարող 20-ից ավել էլեմենտներ օգտագործել");
				i--;
			}
			else if (numberOfFilms > 0) {
				numberOfFilms = Number(numberOfFilms);
				if (numberOfFilms < 10) {
					console.log("Դուք նայել եք բավականին քիչ ֆիլմեր");
				} else if (numberOfFilms < 30) {
					console.log("Դուք ֆիլմի սիրահար եք");
				} else {
					console.log("Դուք կինոման եք !!!");
				}
				personalMovieDB.count = numberOfFilms;
			} else if (numberOfFilms == "0") {
				console.log("Դուք ֆիլմեր դիտել չեք սիրում");
				numberOfFilms = Number(numberOfFilms);
			} else {
				console.log("Եթե ֆիլմեր չեք նայել խնդրում եք մուտքագրեք 0");
				i--;
			}
		}

	}
};
personalMovieDB.yourNumberOfFilms();
personalMovieDB.filmNameAndPoint();
personalMovieDB.yourFavoriteGenres();
personalMovieDB.showMyDB();