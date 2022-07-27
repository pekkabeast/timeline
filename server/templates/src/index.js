import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';


class StartButton extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <button type ='button'>Start</button>
        );

    }
}

class PlayerCard extends React.Component {
    constructor(props) {
      super(props);
      this.state={
        num : ''
      }
    }

    render() {
      return (
        <div>{this.state.num}</div>
      );
    }
  };

  class MainPage extends React.Component{
    constructor(props){
        super(props);
    }

    render() {
        return(
            <div>
                <StartButton />
                <PlayerCard />
            </div>
        );
    }
}

  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(<MainPage />);