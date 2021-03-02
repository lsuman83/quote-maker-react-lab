import uuid from 'uuid';

export default (state = [], action) => {

  let idx;
  
  switch(action.type) {
    case 'ADD_QUOTE':
      return [...state, action.quote];

    case 'REMOVE_QUOTE':
      idx = state.findIndex(quote => quote.id === action.quoteId)
      return [...state.slice(0, idx), ...state.slice(idx + 1)]

    case 'UPVOTE_QUOTE':
      let upvoteQuote = state.find(quote => quote.id === action.quoteId)
      let newUpQuote = [{...upvoteQuote, votes: upvoteQuote.votes + 1}]
      return newUpQuote

    case 'DOWNVOTE_QUOTE':
      let downvoteQuote = state.find(quote => quote.id === action.quoteId)
      if(downvoteQuote.votes > 0) {
        let newDownQuote = [{...downvoteQuote, votes: downvoteQuote.votes - 1}]
        return newDownQuote
      }
      return [downvoteQuote]

    default:
      return state;
  }
}
