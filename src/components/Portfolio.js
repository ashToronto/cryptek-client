import React, { Component } from 'react'

class Portfolio extends Component {
  // constructor() {
  //   super()
  //   this.state = {
  //     currenciesBaught: null,
  //     currenciesBaughtLoaded: false
  //   }
  // }
  render(){
    return(
    <div className="Layout">
      <div className='currency_list'>
      <h3>User Portfolio</h3>
      <span>
        This is the portfolio page it contains all the
        Currencies purchased by a user. Users can sell
        there currencies back to the market from here.
      </span>
      </div>
    </div>)
  }
}

export default Portfolio
