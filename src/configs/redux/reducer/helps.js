const initialState = {
    helps: [],
    loading: false,
    error: ''
}

const helpReducer = (state = initialState, action) =>{
  switch(action.type) {
    case 'GET_HELP_TIPS' :
      return{
        ...state,
        helps: action.payload
      }
    default:
      return state;
  }
}


export default helpReducer