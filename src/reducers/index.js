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
              validation: /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(action.payload.email)
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
            contact: false,
            guisados: false
          }
        }
      }else if(action.payload.guisados){
        return {
          ...state,
          view:{
            hero: false,
            contact: false,
            guisados: true
          }
        }
      }else if(action.payload.hero == false || action.payload.guisados == false){
        return {
          ...state,
          view:{
            hero: false,
            contact: true,
            guisados: false
          }
        }
      }

  case 'ALL_DATA':
    return {
      ...state,
      allGuisados: action.payload
    }

  case 'RES_DATA':
    return {
      ...state,
      resGuisados: action.payload
    }

  case 'PUERCO_DATA':
    return {
      ...state,
      puercoGuisados: action.payload
    }

  case 'POLLO_DATA':
    return {
      ...state,
      polloGuisados: action.payload
    }

  case 'VERDURAS_DATA':
    return {
      ...state,
      verdurasGuisados: action.payload
    }

  case 'DERIVADOS_DATA':
    return {
      ...state,
      derivadosGuisados: action.payload
    }

/*   case 'MENU_IS_VISIBLE':
    return {
      ...state,
      menuIsVisible: action.payload
    }
 */
    default :
    return state;
  }
}

export default reducer;
