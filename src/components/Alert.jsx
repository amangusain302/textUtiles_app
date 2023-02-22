import React from 'react'

export default function Alert(props) {

    const captalize = (text) => {
        const newtext = text.toLowerCase()
        return newtext.charAt(0).toUpperCase() + newtext.slice(1);
    }

 return (
     
        <>
    {/* { props.alert && 
     <div class={`alert alert-${props.alert.type}`} role="alert">
        <strong>{captalize(props.alert.type)} :</strong> {props.alert.message}
    </div>
    } */}
{ props.alert && 
    <div className="alertContainer">
        <div className="alertText">
        <strong>{captalize(props.alert.type)} :</strong> {props.alert.message}
        </div>
    </div>
} 
</>
  )
}
