//state param here is not the ovearll application state, it is only the state the reducer itself is responsible for
//if state arg is undefined, set to null

export default function(state = null, action) {
  switch(action.type) {
    case 'BOOK_SELECTED':
    return action.payload;
  }

  return state;
}
