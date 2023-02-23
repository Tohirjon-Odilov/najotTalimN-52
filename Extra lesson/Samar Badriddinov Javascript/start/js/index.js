const filmCount = +prompt("Nechta kino korgansiz?");

const film = {
  ganre: [],
  actors: {},
  series: {},
  private: false,
};

const a = prompt("Oxirgi korgan kinoyiz?"),
  b = prompt("Necah baxo berasiz?"),
  c = prompt("Oxirgi korgan kinoyiz"),
  d = prompt("Necha ball brasiz?");

  film.series[a] = b
  film.series[c] = d
  
console.log(film);
