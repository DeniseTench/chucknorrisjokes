import React from 'react';
import axios from 'axios';
import './index.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      joke: "Welcome - press the button below to get your ass clicked"  
    };
    
    this.getJoke = this.getJoke.bind(this);
  }

  getJoke() {
    // Swapped to the working chucknorris.io API
    axios.get('https://api.chucknorris.io/jokes/random')
    .then((response) => {
      // Updated the object path to match the new API's structure
      this.setState({ joke: response.data.value })
      console.log(response.data)
    })
    .catch((error)=>{
      console.log(error);
      this.setState({ 
       joke: "Something has gone to shit - apologies!"
      })
   });  
  }
  
  render() {
    return(
      <div className="container">
        {/* Note: placecage.com is notoriously unstable/dead these days. If this image is broken, swap the URL */}
        <header><img src='https://www.placecage.com/gif/200/300' alt="mclogo"/></header>
        
        <h1>Manchester Codes Students' Chuck Norris Random Joke Generator</h1><br></br>
        <h2>Need a short break from your coding? You're in the right place</h2><br></br>
        
        <h3 dangerouslySetInnerHTML={{__html: this.state.joke}}></h3><br></br>
        
        <button 
          style={{color: 'white', background: '#0494cd', padding: '20px', borderRadius: '20px', fontWeight: 'bold'}}
          type="button" 
          className="joke-button"
          onClick={this.getJoke}>
          Random Joke
        </button>
        
        <p><img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/chuck-norris-finger-wag-1551304759.jpg?crop=0.864xw:1xh;center,top&resize=768:*" alt="Chuck finger wag"/></p>
      </div>
    );
  }
}

export default App;
