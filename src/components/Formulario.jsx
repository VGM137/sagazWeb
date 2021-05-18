import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { connect } from 'react-redux';
import { formChange, clearForm } from '../actions'
import '../assets/styles/components/Form.scss'

const Formulario = (props) => {

  const [state, handleSubmit] = useForm("mknkjjgo");

  const handleChange = (e) => {
    if(e.target.value == ''){
      props.formChange({
        [e.target.name]: ' '
      })
    }else{
      props.formChange({
        [e.target.name]: e.target.value
      })
    }
  }
  
  const handleClick = (e) => {
    if (state.succeeded) {
      e.target.form.reset()
      props.clearForm()
      console.log(props)
      console.log('Submitted')
    }
  }

  return( 
    <>
      <div id='form-spacer' className='form-spacer'>
      </div>
      <div id="form" className="form">
        <h1 className="">Prepara tu evento</h1>
        <h1 className="">con una taquiza</h1>
        <form className="form-form" onSubmit={handleSubmit}>
          <input 
            type="text" 
            name="name" 
            id="form-nombre" 
            className="form-nombre" 
            placeholder="Nombre" 
            onChange={handleChange}
            value={props.name}/>
          <ValidationError 
            prefix="Name" 
            field="name"
            errors={state.errors}/>
          <input 
            type="text" 
            name="email" 
            id="form-mail" 
            className="form-mail" 
            placeholder="e-mail" 
            onChange={handleChange}
            value={props.email}/>
          <ValidationError 
            prefix="Email" 
            field="email"
            errors={state.errors}/>
          <textarea 
            type="text" 
            name="message" 
            id="form-mensaje" 
            className="form-mensaje" 
            placeholder="Déjanos tu mensaje"
            onChange={handleChange}
            value={props.message}>
          </textarea>
          <ValidationError 
            prefix="Message" 
            field="message"
            errors={state.errors}/>
          <button 
            type='submit'
            className="form-button" 
            id="form-button" 
            onClick={handleClick}
            disabled={props.name.length < 2, props.email.length < 2, props.message.length < 10}>
            Enviar
          </button>
        </form>
      </div>
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    name: state.form.name,
    email: state.form.email,
    message: state.form.message
  }
}

const dispatchStateToProps = {
  formChange,
  clearForm,
}

export default connect(mapStateToProps, dispatchStateToProps)(Formulario);