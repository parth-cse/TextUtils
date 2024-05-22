import React from 'react'
import PropTypes from 'prop-types'

function Alert(props) {
  return (
    props.alert && <div className='container my-3'>
        <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
            <strong>{props.alert.type.charAt(0).toUpperCase() + props.alert.type.substring(1)}: </strong>{props.alert.msg}
        </div>
    </div>
  )
}

export default Alert
