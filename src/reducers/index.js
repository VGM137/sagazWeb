const reducer = (state, action) => {
  
  switch(action.type){
    case 'FORM_CHANGE':
      if(action.payload.name){
        return {
          ...state,
          form: {
            name: action.payload.name,
            email: state.form.email,
            message: state.form.message
          }
        }
      }else if(action.payload.email){
        return {
          ...state,
          form: {
            name: state.form.name,
            email: action.payload.email,
            message: state.form.message
          }
        }
      }else if(action.payload.message){
        return {
          ...state,
          form: {
            name: state.form.name,
            email: state.form.email,
            message: action.payload.message
          }
        }
      }
    
    case 'CLEAR_FORM':
      return{
        ...state,
        form: {
          email: '',
          message: ''
        }
      }

    case 'SET_VISIBILITY':
      if(action.payload.hero){
        return {
          ...state,
          view:{
            hero: action.payload.hero,
            contact: false
          }
        }
      }else if(action.payload.hero == false){
        return {
          ...state,
          view:{
            hero: false,
            contact: true
          }
        }
      }

    default :
    return state;
  }
}

export default reducer;