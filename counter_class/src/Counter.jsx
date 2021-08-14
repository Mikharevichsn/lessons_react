import React from 'react';

class Counter extends React.Component {
  state = {
    counter: 10,
  };

  str = 'KUKURUZA!';

  decrementCounter = () => {
    this.setState((prevState) => ({
      counter: prevState.counter - 1,
    }));
  }

  render() {
    return (
      <div className="wrapper">
        <h1>Йа счОтчЕг!</h1>
        <h2>{this.state.counter}</h2>
        <h3>{this.str}</h3>
        <button
          onClick={() => {
            this.setState((prevState) => ({
              counter: prevState.counter + 1,
            }));
          }}
        >
          +
        </button>
        <button
        onClick={this.decrementCounter}>-</button>
      </div>
    );
  }
}

export default Counter;
