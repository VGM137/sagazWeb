import React from 'react'
import { connect } from 'react-redux'
import { clearForm } from '../actions'
import '../assets/styles/components/SubmitError.scss'

const SubmitError = (props) => {

  props.clearForm()

  return (
    <>
      <div id='form-spacer' className='form-spacer'>
      </div>
      <div className='submit-container'>
        <h1 className='submit-message'>Algo saló mal, por favor intentalo de nuevo.</h1>
      </div>
    </>
  )
};

const dispatchStateToProps = {
  clearForm,
}

export default connect(null, dispatchStateToProps)(SubmitError);
