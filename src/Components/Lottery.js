import React, { Component } from 'react';

class Lottery extends Component{
 
    renderButton(){
        const { remainingTickets, actions } = this.props;

        if (this.props.remainingTickets>0){
        return <button onClick={actions.registerTicket}> Купи билет</button>;
        }
    }

    render(){
  return (
  <>
    <h2>Лотария</h2>
    {this.renderButton()}
    <br />
    <small>Оставащи билети: {this.props.remainingTickets}</small>
  </>
  ); 
}
}
export default Lottery;
