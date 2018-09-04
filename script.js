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

var Movie = React.createClass ({
  propTypes: {
    movie: React.PropTypes.object.isRequired,
  },

  render: function() {
    return (
      React.createElement("li", {key: this.props.movie.id},
      React.createElement(MovieTitle, {title: this.props.movie.title}),
      React.createElement(MovieDescription, {desc: this.props.movie.desc}),
      React.createElement(MovieImage, {image: this.props.movie.img})
      )
    )
  },
});

var MovieTitle = React.createClass({
	propTypes: {
		title: React.PropTypes.string.isRequired,
	},
	
	render: function() {
		return (
			React.createElement('h2', {}, this.props.title)
		)
	},
});

var MovieDescription = React.createClass({
	propTypes: {
		desc: React.PropTypes.string.isRequired,
	},
	
	render: function() {
		return (
			React.createElement('p', {}, this.props.desc)
		)
	},
});

var MovieImage = React.createClass({
	propTypes: {
		image: React.PropTypes.string.isRequired,
	},
	
	render: function() {
		return (
			React.createElement('img', {src: this.props.image})
		)
	},
});	
	
var MovieList = React.createClass({
  propTypes: {
    list: React.PropTypes.array.isRequired,
  },
  render: function() {
    var moviesElements = this.props.list.map(function(movie) {
      return React.createElement(Movie, {key: movie.id, movie: movie});
    });
    return (React.createElement('div', {},
		React.createElement('h1', {}, 'Lista filmów'),
		React.createElement('ul', {}, moviesElements))
	);
}});

var element = React.createElement(MovieList, {list: movies});

ReactDOM.render(element, document.getElementById('app'));
	