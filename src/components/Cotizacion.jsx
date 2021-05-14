import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { connect } from 'react-redux';
import { formChange, clearForm } from '../actions'
import '../assets/styles/components/Cotizacion.scss'

const Cotizacion = (props) => {

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
    <div className="pedidos">
      <h1 className="">Prepara tu evento</h1>
      <h1 className="">con una taquiza</h1>
      <form className="pedidos-form" onSubmit={handleSubmit}>
        <input 
          type="text" 
          name="name" 
          id="pedidos-nombre" 
          className="pedidos-nombre" 
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
          id="pedidos-mail" 
          className="pedidos-mail" 
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
          id="pedidos-mensaje" 
          className="pedidos-mensaje" 
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
          className="pedidos-button" 
          id="pedidos-button" 
          onClick={handleClick}
          disabled={props.name.length < 2, props.email.length < 2, props.message.length < 10}>
          Enviar
        </button>
      </form>
    </div>
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

export default connect(mapStateToProps, dispatchStateToProps)(Cotizacion);