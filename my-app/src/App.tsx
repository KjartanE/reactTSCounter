import React, { Component, useState } from 'react';
import NavBar from './components/navbar';
import Counters from "./components/counters";
import './App.css';

interface ICounter {
  id: number;
  value: number;
}

interface IAppState {
  counters: ICounter[];
}

class App extends Component<{}, IAppState>
{
  state = {
      counters: [
          {id: 1, value: 0},
          {id: 2, value: 0},
          {id: 3, value: 0},
          {id: 4, value: 0}
      ]
  };

  handleIncrement = (counter: {id:number, value:number}) => {
      const counters = [...this.state.counters]; // clones the array
      const index = counters.indexOf(counter);
      counters[index] = {...counter};
      counters[index].value++;
      this.setState({counters});
  }

  handleDecrement = (counter: {id:number, value:number}) => {
    const counters = [...this.state.counters]; // clones the array
    const index = counters.indexOf(counter);

    if(counters[index].value > 0){
      counters[index] = {...counter};
      counters[index].value--;
      this.setState({counters}); 
    }
  }

  handleReset = () => {
      
      const counters = this.state.counters.map(c => {
          c.value =0;
          return c;
      });
      this.setState({ counters});
  }
  handleAdd = () => {

    this.setState((prevState) => {
      return {
        counters: [
          ...prevState.counters,
          { id: prevState.counters.length, value: 0 }
        ]
      }
    }, () => {
      console.log('the state updated!')
    })
  }

  handleDelete = (counterId: number) => {
      console.log('Event handler Called');
      const counters = this.state.counters.filter(c => c.id !== counterId);
      this.setState({counters: counters});
  }

  render() {
    return (
      <React.Fragment>
        <NavBar 
          totalCounters={this.state.counters.filter(c=> c.value>0).length} 
        />
        <main className="container">
          <Counters 
            counters={this.state.counters} 
            onReset={this.handleReset}
            onAdd={this.handleAdd}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
            onDelete={this.handleDelete}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
