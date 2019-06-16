import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

// Smart Container
class App extends Component {
  constructor() {
    super()
    this.state = {
      data: []
    }
  }

  render() {
    return (
      //<BrowserRouter>
      //    <Route exact path="/" component={Home}/>
      //    <Route exact path="/students" component={AllStudents}/>
      //    <Route exact path="/campuses" component={AllCampuses}/>
      //</BrowserRouter>
    )
  }
};
  
export default App;
