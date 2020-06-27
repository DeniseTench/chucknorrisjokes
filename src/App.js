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
    axios.get('http://api.icndb.com/jokes/random?exclude=[explicit]')
    .then((response) => {
      this.setState({ joke: response.data.value.joke })
      console.log(response.data)
    })
   
    .catch((error)=>{
      console.log(error);
      this.setState({ 
       joke: "Something has gone wrong - apologies!"
      })
   });  
  }
  
  render() {
    return(
      <div className="container">
        <header><img src='https://upload.wikimedia.org/wikipedia/commons/6/6b/The_co-operative_bank_logo.svg' alt="co-opbanklogo"/></header>
        <h1>Employee Chuck Norris Random Joke Generator</h1><br></br>
        <h2>Need a short break? You're in the right place</h2><br></br>
        <h3 dangerouslySetInnerHTML={{__html: this.state.joke}}></h3><br></br>
        <button 
          style={{color: 'white', background: '#0494cd', padding: '20px', borderRadius: '20px', fontWeight: 'bold'}
        }
          type="button" 
          className="joke-button"
          onClick={this.getJoke}>
          Random Joke</button>
      </div>
      
    );
  }
}

export default App;