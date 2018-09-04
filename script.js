var movies = [
  {
	id: 1,  
    title: 'Harry Potter',
    desc: 'film o czarodzieju',
	img: './images/harry.jpg'
  },
  {
	id: 2,  
    title: 'Król Lew',
    desc: 'Film o królu sawanny',
	img: './images/lion.jpg'
  },
  {
	id: 3,  
    title: 'Toy Story',
    desc: 'film o żywych zabawkach',
	img: './images/toy.jpg'
  },
  {
	id: 4,  
    title: 'Piraci z Karaibów',
    desc: 'film o piratach',
	img: './images/pirates.jpg'
  },
  {
	id: 5,  
    title: 'Shrek',
    desc: 'film o zielonym potworze',
	img: './images/shrek.jpg'
  }
];

var moviesElements = movies.map(function(movie) {
  return React.createElement('li', {key: movie.id},
      React.createElement('h2', {}, movie.title),
      React.createElement('p', {}, movie.desc),
	  React.createElement('img', {src: movie.img})
    );
});

var element =
  React.createElement('div', {},
    React.createElement('h1', {}, 'Lista filmów'),
    React.createElement('ul', {}, moviesElements)
  );

ReactDOM.render(element, document.getElementById('app'));