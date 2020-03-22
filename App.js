import React, { PureComponent } from 'react';
import Buttonclick from './Components/buttonclick';

class App extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      
    }
  }

  render() {
    return (
      <div className="App">
        <Buttonclick />
      </div>
    );
  }
}

export default App