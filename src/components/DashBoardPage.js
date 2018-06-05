import React from 'react';

import ResultsList from './ResultsList';

class WithDrawForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      amount: '',
      error: '',
      results: ''
    };
  }

  onAmountChange = (e) => {
    const amount = e.target.value;
    this.setState(() => ({amount}));
  };

  getNotes = (amount) => {
    const notes = [100, 50, 20, 10];
    let remainder, numberOfNotes, requiredAmount,result = [];
    requiredAmount = amount;
    for (let i = 0; i < notes.length; i++) {
      remainder = requiredAmount / notes[i];
      if (remainder >= 1) {
        numberOfNotes = (remainder).toString().split('.')[0];
        requiredAmount = requiredAmount - numberOfNotes * notes[i];
        for (let j = 0; j < numberOfNotes; j++) {
          result.push(notes[i]);
        }
      }
    }
    return result;
  };

  submit = (e) => {
    e.preventDefault();
    if (!this.state.amount && !this.state.amount.match(/^-?(\d+)?(\.\d{1,2})$/)) {
      this.setState(() => ({
        error: 'Please enter amount'
      }))
    } else {
      let output;
      try {
        if (this.state.amount > 0) {
          if (this.state.amount % 10 == 0) {
            output = this.getNotes(this.state.amount);
          } else {
            throw "throw NoteUnavailableException";
          }
        } else {
          if (this.state.amount === "NULL" || this.state.amount === "null") {
            output=[];
            output.push('Empty Set');
          } else {
            throw "throw InvalidArgumentException";
          }
        }

      } catch (e) {
        output = e;
      }
      this.setState(() => ({
        error: '',
        results: output
      }));
    }

  };

  render() {
    return (
      <div className="box-layout">
        <div className="box-layout__box">
          <h1 className="box-layout__title">Cash Machine</h1>
          <p>Time to withdraw some cash.</p>
          <form  onSubmit={this.submit}>
            {this.state.error && <p className="form__error">{this.state.error}</p>}
            <input
              type="text"
              placeholder="Enter amount"
              className="text-input"
              value={this.state.amount}
              onChange={this.onAmountChange}
            />
            <div>
              <button className='button' type="submit">Submit</button>
            </div>
          </form>
          <div className="content-container">
            {!this.state.error && this.state.results.length>0 && <ResultsList results={this.state.results}/>}
          </div>
        </div>
      </div>
    );
  };

}

export default WithDrawForm;
