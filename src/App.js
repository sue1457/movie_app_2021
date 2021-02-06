import React from 'react';
import axios from 'axios';
import Movie from './Movie';
import "./App.css";
// import PropTypes from "prop-types";

class App extends React.Component {
  state = {
    isLoading: true,
    movies: []
  };
  getMovies = async() => {
    const {
      data: { 
        data :{movies}
      }
    } = await axios.get("https://yts-proxy.nomadcoders1.now.sh/list_movies.json?sort_by=rating");
    this.setState({ movies, isLoading: false});
  }
  componentDidMount() {
    this.getMovies();
  }
  render() {
    const { isLoading, movies } = this.state;
    return (
    <section className="container">
      {isLoading ? (
        <div className="loader">
          <span className="loader__text">Loading...</span>
        </div>
      ) : (
        <div className="movies">
          {movies.map(movie => (
            <Movie 
              key={movie.id}
              id={movie.id} 
              year={movie.year} 
              title={movie.title} 
              summary={movie.summary} 
              poster={movie.medium_cover_image} 
              genres={movie.genres}
            />
          ))}
        </div>
      )}
    </section>
    );
  }
}

export default App;





// Component Life Cycle

// class App extends React.Component{
//   state = {
//     count: 0
//   };

//   add = () => {
//     this.setState(current => ({ count: current.count + 1 }));
//   };
//   minus = () => {
//     this.setState(current => ({ count: current.count - 1 }));
//   };

//   componentDidMount(){
//     console.log("component rendered");
//   }

//   componentDidUpdate(){
//     console.log("component updated");
//   }

//   render() {
//     console.log("I'm rendering");
//     return(
//       <div>
//         <h1>The number is {this.state.count}</h1>
//         <button onClick={this.add}>Add</button>
//         <button onClick={this.minus}>Minus</button>
//       </div>
//     )
//   }
// }





// const foodILike = [
//   {
//     id: 1,
//     name: "kimchi",
//     image: "https://www.maangchi.com/wp-content/uploads/2014/06/whole-cabbage-kimchi.jpg",
//     rating: 5.0
//   },
//   {
//     id: 2,
//     name: "ramen",
//     image: "https://glebekitchen.com/wp-content/uploads/2017/04/tonkotsuramenfront.jpg",
//     rating: 4.9
//   },
//   {
//     id: 3,
//     name: "samgyeopsal",
//     image: "https://i1.wp.com/www.gildedgingerbread.com/wp-content/uploads/2017/08/Samgyeopsal-1.jpg?fit=900%2C600&ssl=1",
//     rating: 4.5
//   },
//   {
//     id: 4,
//     name: "jjukkumi",
//     image: "https://www.koreanbapsang.com/wp-content/uploads/2012/08/Baby-octopus.jpg",
//     rating: 4.7
//   }
// ]

// function Food({ name, picture, rating }) {
//   return (
//     <div>
//       <h2>I like {name}</h2>
//       <h4>{rating}/5.0</h4>
//       <img src={picture} alt={name} />
//     </div>
//   );
// }

// Food.propTypes = {
//   name: PropTypes.string.isRequired,
//   picture: PropTypes.string.isRequired,
//   rating: PropTypes.number.isRequired  
// }

// function App() {
//   return (
//   <div>
//     {foodILike.map(dish => (
//       <Food
//         key={dish.id}
//         name={dish.name}
//         picture={dish.image}
//         rating={dish.rating}
//       />
//     ))}
//     </div>
//   )
// }


