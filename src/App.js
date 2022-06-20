import React, { Component } from 'react';
import './App.css';
import {getRandomNumber} from './Helper/utils';
import {registerTicket} from './Helper/actions';
import Lottery from './Components/Lottery';

class App extends Component{
  constructor(props){
    super(props);

    this.state = {
      winningNumber: getRandomNumber(),
      tickets: [],
      remainingTickets: 5,
      finished: false
    };

    this.registerTicket = registerTicket.bind( this );
  }

  renderApp(){
    const { tickets, remainingTickets} = this.state;
    const actions = {};

    actions.registerTicket = this.registerTicket;
   
    return (
      <Lottery
        actions = {actions}
        tickets = {tickets}
        remainingTickets = {remainingTickets}
      />
    );
  }

 render(){
  console.log(this.state.tickets);
  return (
    <div className='App'>
      {this.renderApp()}
    </div>
  );
 }
}
export default App;
