import React, { useEffect, useState } from 'react'

const Select = props => {
  const { onChange = () => {}, label } = props
  const { options = [] } = props
  const [value, setValue] = useState('first_release_date')
  const [text, setText] = useState('Release Date')
  const [show, setShow] = useState(false)

  const handleChange = () => {
    setShow(!show)
  }

  useEffect(() => {
    onChange(value)
  }, [value])

  return (
    <>
      <p className='label'>{label && label}</p>
      <div style={{ display: 'flex', width: '100%' }}>
        <div className='sort'>
          <p>&#8593;</p>
        </div>
        <div className='select'>
          <div className='select-value' onClick={() => handleChange()}>
            {text}
          </div>
       
          {show && (
            <div className='absolute'>
              {options.map((option, index) => (
                <div
                  className='select-input'
                  key={index}
                  onClick={() => {
                    setValue(option.value)
                    setText(option.text)
                    setShow(false)
                  }}
                >
                  {option.text}
                </div>
              ))}
            </div>
          )}
             
        </div>
      
      </div>
    </>
  )
}

export default Select
