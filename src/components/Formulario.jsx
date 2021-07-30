import React, { useEffect } from 'react';
import { useForm } from '@formspree/react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { formChange } from '../actions'
import '../assets/styles/components/Form.scss'
import SubmitMessage from '../components/SubmitMessage'
import SubmitError from '../components/SubmitError'

const Formulario = (props) => {

  const [state, handleSubmit] = useForm("mknkjjgo");

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
        <h1 className="">Prepara tu evento con una taquiza!</h1>
        <h2 className=""><Link to='/guisados' className='form_link'>Escoge</Link> entre una amplia variedad de guisados, pide tu cotización, nos pondremos en contacto contigo a la brevedad.</h2>
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
          <h3 alt='*Por favor ingresa un nombre con más de dos caracteres.' className='name-advice'></h3>
          <input 
            type="email" 
            name="email" 
            id="form-mail" 
            className="form-mail form-item" 
            placeholder="e-mail" 
            onChange={handleChange}
            value={props.email.value}
            required/>
          <h3 alt='*Por favor ingresa un correo electrónico válido.' className='email-advice'></h3>
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
          <h3 alt='*Cuentanos más, por favor ingresa al menos 10 caracteres.' className='message-advice'></h3>
          <button 
            type='submit'
            formMethod='post'
            className="form-button" 
            id="form-button" 
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