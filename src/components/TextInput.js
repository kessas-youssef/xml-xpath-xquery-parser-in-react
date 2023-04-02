import React from 'react'

function TextInput(props) {

  const onChangeHandler = e => {
    props.setInputType('inputField');
    props.setQuery(e.target.value);
    if(e.target.value == '')
      props.setInputType('none');
  }

  return (
    <div className='textInput'>
      <label htmlFor='textInput' className='textInput__label'>{props.queryType} Query : </label>
      <input type='text' name='textInput' className='textInput__text' placeholder='Type in here' onInput={onChangeHandler} />
    </div>
  )
}

export default TextInput