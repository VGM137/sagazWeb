import React, { useEffect } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { connect } from 'react-redux';
import { formChange } from '../actions'
import '../assets/styles/components/Form.scss'
import SubmitMessage from '../components/SubmitMessage'
import SubmitError from '../components/SubmitError'

const Formulario = (props) => {

  const [state, handleSubmit] = useForm("mknkjjgo");
  
  useEffect(() => {
    console.log('Component did mount')
    return () => {
      props.clearForm()
      console.log('Unmounting')
    }
  }, [])

  const handleChange = (e) => {
    if(e.target.value == ''){
      props.formChange({
        [e.target.name]: []
      })
    }else{
      props.formChange({
        [e.target.name]: e.target.value
      })
    }
  }
  
  if (state.succeeded) {
    console.log(state)
    return (
      <SubmitMessage />
    )
  }else if(state.errors.length >= 1 ) {
    return (
      <SubmitError />
    )
  }

  return( 
    <>
      <div id='form-spacer' className='form-spacer'>
      </div>
      <div id="form" className="form">
        <h1 className="">Prepara tu evento con una taquiza</h1>
        <h2 className="">Pide tu cotización, nos pondremos en contacto contigo a la brevedad.</h2>
        <form id='form-form' className="form-form" onSubmit={handleSubmit}>
          <input 
            type="text" 
            name="name" 
            id="form-nombre" 
            className="form-nombre form-item" 
            placeholder="Nombre" 
            onChange={handleChange}
            value={props.name}
            minLength='2'
            required/>
          <ValidationError 
            prefix="Name" 
            field="name"
            errors={state.errors}/>
          <input 
            type="email" 
            name="email" 
            id="form-mail" 
            className="form-mail form-item" 
            placeholder="e-mail" 
            onChange={handleChange}
            value={props.email.value}
            required/>
          <ValidationError 
            prefix="Email" 
            field="email"
            errors={state.errors}/>
          <textarea 
            type="text" 
            name="message" 
            id="form-mensaje" 
            className="form-mensaje form-item" 
            placeholder="Déjanos tu mensaje"
            onChange={handleChange}
            value={props.message}
            minLength='10'
            required>
          </textarea>
          <ValidationError 
            prefix="Message" 
            field="message"
            errors={state.errors}/>
          <button 
            type='submit'
            formMethod='post'
            className="form-button" 
            id="form-button" 
            onClick={()=>useEffect}
            disabled={props.name.length < 2 || !props.email.validation || props.message.length < 10}>
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
}

export default connect(mapStateToProps, dispatchStateToProps)(Formulario);