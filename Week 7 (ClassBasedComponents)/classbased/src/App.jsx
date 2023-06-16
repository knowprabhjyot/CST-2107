import React from 'react';
import RandomJokeContext from './context/RandomJoke';
import RandomJoke from './components/RandomJoke';

class App extends React.Component {

  constructor(props) {
    console.log("called in constructor");
    super(props);
    this.state = {
      // studentName: 'Mike',
      // collegeName: 'VCC',
      // address: 'Vancouver',
      randomJoke: {
        type: "there"
      }
    }
  }



  // MOUNTING PHASE
  // Constructor
  // Render
  // componentDidMount


  // This gets called after Render 
  componentDidMount() {
    console.log("called in component Did Mount!");
    fetch('https://official-joke-api.appspot.com/random_joke').then((data) => {
      return data.json();
    }).then((data) => {
      // this.setState(prevState => {
      //   prevState.randomJoke = randomJoke;
      // })
      this.setState(
        {
          // studentName: 'Daniel',
          // collegeName: 'VCC',
          // address: 'Vancouver',
          randomJoke: data
        }
      )
    })
  }

  // handleNameChange() {
  //   this.setState({
  //     studentName: 'Daniel',
  //     collegeName: 'VCC',
  //     address: 'Vancouver',
  //   })
  // }

  // UPDATING PHASE

  // This gets called after you update something, so if
  // it returns true, render and componentdidupdate willl be called
  // if you return false, neither render nor componentdidupdate will be called
  // shouldComponentUpdate() {
  //   console.log('should component Did Update!')
  //   return false;
  // }

  // This gets called after updating something
  componentDidUpdate() {
    console.log('called in component Did Update!')
  }

  // Unmount Phase
  componentWillUnmount() {
    console.log('called in component will unmount!')
  }

  render() {
    console.log("called in render");
    return (
      <RandomJokeContext.Provider value={this.state.randomJoke}>
        <div>
          <RandomJoke />
          {/* <ul>
            Student Information
            <li>
              {this.state.studentName}
            </li>
            <li>
              {this.state.collegeName}
            </li>
            <li>
              {this.state.address}
            </li>
          </ul>

          <button onClick={() => this.handleNameChange()}>UpdateName</button> */}
        </div>
      </RandomJokeContext.Provider>
    )
  }
}

export default App;