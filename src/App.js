import React from 'react';
import axios from 'axios';
import './App.css'; 

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      joke: "Welcome - press the button below for some Chuck Norris motivation!",
      isLoading: false
    };
  }

  getJoke = () => {
    this.setState({ isLoading: true, joke: "Loading a roundhouse kick..." });

    // Using native browser fetch instead of Axios
    fetch('https://api.chucknorris.io/jokes/random')
      .then(response => response.json())
      .then(data => {
        this.setState({ 
          joke: data.value, 
          isLoading: false 
        });
      })
      .catch(error => {
        console.error("Fetch Error:", error);
        this.setState({ 
          joke: "Chuck Norris blocked the connection. Try again!", 
          isLoading: false 
        });
      });
  };
  
  render() {
    return (
      <div className="App">
        <div className="container">
        
          <h1>Chuck Norris Random Joke Generator</h1>
          <h2>Need some motivation? You're in the right place</h2>
          
          {/* This is where the joke swaps */}
          <h3 dangerouslySetInnerHTML={{__html: this.state.joke}}></h3>
          
          <button 
            type="button" 
            className="joke-button" 
            disabled={this.state.isLoading}
            onClick={this.getJoke}
          >
            {this.state.isLoading ? "Fetching..." : "Random Joke"}
          </button>

          <img 
            src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/chuck-norris-finger-wag-1551304759.jpg?crop=0.864xw:1xh;center,top&resize=768:*" 
            alt="Chuck" 
            style={{maxWidth: '1000px', display: 'block', margin: '30px auto'}}
          />
          
          <p>Welcome to the random Chuck Norris jokes generator. This is a single-page app created using ReactJS, JSX, HTML, CSS and Sass.</p>
          <p>It was created by Denise Tench, an SEO specialist who also likes tinkering with code in her free time.</p>
          <p>Need a little pep talk? Remember, you can do it! And if you don't, Chuck will find out and come get you.</p>
          <p>Good luck and keep your goals in sight!</p>
        </div>

        <footer>
          <div className="footericons">
            <div className="text-center center-block">
              <a href="https://github.com/DeniseTench" target="_blank" rel="noreferrer">
                <i id="social-gh" className="fa fa-github-square fa-3x social"></i>
              </a>
              <a href="mailto:denise.tench@hotmail.co.uk">
                <i id="social-em" className="fa fa-envelope-square fa-3x social"></i>
              </a>
              <a href="https://twitter.com/Denise_Tench" target="_blank" rel="noreferrer">
                <i id="social-tw" className="fa fa-twitter-square fa-3x social"></i>
              </a>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default App;