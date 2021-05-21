const reducer = (state, action) => {
  
  switch(action.type){
    case 'FORM_CHANGE':
      if(action.payload.name){
        return {
          ...state,
          form: {
            name: action.payload.name,
            email: {
              value: state.form.email.value,
              validation: state.form.email.validation
            },
            message: state.form.message
          }
        }
      }else if(action.payload.email){
        return {
          ...state,
          form: {
            name: state.form.name,
            email: {
              value: action.payload.email,
              validation: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(action.payload.email)
            },
            message: state.form.message
          }
        }
      }else if(action.payload.message){
        return {
          ...state,
          form: {
            name: state.form.name,
            email: {
              value: state.form.email.value,
              validation: state.form.email.validation
            },
            message: action.payload.message
          }
        }
      }
    
    case 'CLEAR_FORM':
      return{
        ...state,
        form: {
          name: '',
          email: {
            name: '',
            validation: false,
          },
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