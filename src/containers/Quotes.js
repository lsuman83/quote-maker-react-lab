import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuoteCard from '../components/QuoteCard';
import { removeQuote, upvoteQuote, downvoteQuote } from '../actions/quotes'

class Quotes extends Component {

  constructor(){
    super()
    this.state = {
      quotes: []
    }
  }
  
  
  render() {
    return (
      <div>
        <hr />
        <div className="row justify-content-center">
          <h2>Quotes</h2>
        </div>
        <hr />
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              {this.props.quotes.map(quote => 
                <QuoteCard 
                  quote={quote} 
                  upVote={this.props.upvoteQuote} 
                  downVote={this.props.downvoteQuote} 
                  removeQuote={this.props.removeQuote}
                />)
              }
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
    return {
      quotes: state.quotes
    }
}

const mapDispatchToProps = dispatch =>{
  return {
    upvoteQuote: (quoteId) => dispatch(upvoteQuote(quoteId)),
    downvoteQuote: (quoteId) => dispatch(downvoteQuote(quoteId)),
    removeQuote: (quoteId) => dispatch(removeQuote(quoteId))
  }
}

//add arguments to connect as needed
export default connect(mapStateToProps, mapDispatchToProps)(Quotes);
