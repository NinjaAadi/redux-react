import React, { PureComponent } from 'react'
import Buttonclick from './Components/buttonclick';
import Textclick from './Components/textclick';
class App extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      
    }
  }

  render() {
    return (
      <div>
        <Buttonclick />
        <Textclick />
      </div>
    );
  }
}

export default App