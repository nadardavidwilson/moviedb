import React from 'react';
import ReactDOM from 'react-dom';
import SearchMovies from "./searchMovies";

class Main extends React.Component {
  render() {
    return (

      <div className="container">
        <div className="headerimg">
          <img src="./bgimage1.jpg"></img>
        </div>
        <h1 className="title">Welcome.</h1>
                <h2 className="title">Millions of movies, TV shows and people to discover. Explore now.</h2>
        <SearchMovies/>
      </div>
    );
  }
}

ReactDOM.render(<Main />, document.getElementById('root'));