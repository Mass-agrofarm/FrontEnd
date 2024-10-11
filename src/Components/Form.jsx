// Dependancies.
import { useState } from 'react';



// Components.
import { NameFields, ContactFields, TextField } from '@components/Contact/StyledContainers';
import { FlexDiv } from './StyledComponents/StyledContainers';




const Form = () => {
  //* Form inputs.
  const [ firstName, setFirstName ] = useState('')
  const [ LastName, setLastName ] = useState('')
  const [ email, setEmail ] = useState('')
  const [ phone, setPhone ] = useState('')
  const [ message, setMessage ] = useState('')
  const [ data, setData ] = useState({})

  //* Error Handling.
  const [ errors, setErrors ] = useState({
    emailErrorMessage: '',
    phoneErrorMessage: ''
  })

  //* Input validation.
  const emailRegEx = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
  const phoneRegEx = /^\+\S[\d\s]{1,11}$/;

//* Handling change and submission.
  const handleChange = (e) => {
    const { name, value} = e.target
    switch (name) {
      case 'First name':
          setFirstName(value);
          break;
      case 'Last name':
          setLastName(value);
          break;
      case 'Email':
          setEmail(value);

          // email validation
          setErrors({
            ...errors,
            emailErrorMessage: emailRegEx.test(value) ? '' : 'Please enter a valid email address'
          });

          break;
      case 'Phone':
          setPhone(value);

          // Phone validation.
          setErrors({
            ...errors,
            phoneErrorMessage: phoneRegEx.test(value) ? '' : 'Please enter a valid country coded contact number'
          });

          break;
      case 'Message':
          setMessage(value);
          break;
      default:
          break;
  }
  }

  const handleClick = (e) => {
    e.preventDefault();
    
    //* email data then clear it.
    setData({...data, 'firstName':firstName, 'lastName':LastName, 'email':email, 'Phone': phone, 'Message':message})

    // call sender function.

    setFirstName('')
    setLastName('')
    setEmail('')
    setPhone('')
    setMessage('')

  }




  // Email sender function
  // function send (data){
  //   console.log(data)
  // }

  // send(data)

  return (
    <>
    {/* Todo: add state management and send email after hitting send */}
      <form style={{ width: '100%' }}>

        <div>
          <label>Name *</label>
          <NameFields>
              <input
              type="text"
              name="First name"
              placeholder='First'
              value={firstName}
              onChange={handleChange}
              />

              <input
              type="text"
              name="Last name"
              placeholder='Last'
              value={LastName}
              onChange={handleChange}/>

          </NameFields>
        </div>
        <ContactFields>
            <FlexDiv style={{ flexDirection: 'column' }}>
              <label>Email *</label>
              <input
              type="email"
              name="Email"
              placeholder='Email'
              value={email}
              onChange={handleChange}/>
              {errors.emailErrorMessage && <span style={{ color: 'red' }}>{errors.emailErrorMessage}</span>}
            </FlexDiv>
            
            <FlexDiv style={{ flexDirection: 'column' }}>
              <label>Phone Number *</label>
              <input
              type="contact"
              name="Phone"
              placeholder="+123456789"
              value={phone}
              onChange={handleChange}/>
              {errors.phoneErrorMessage && <span style={{ color: 'red' }}>{errors.phoneErrorMessage}</span>}
            </FlexDiv>

        </ContactFields>
        <TextField>
            <label>Message *</label>
            <textarea
            type="text"
            name="Message"
            placeholder='Message'
            value={message}
            onChange={handleChange}>
            
            </textarea>

            {/* Change this btn to link to send emails onClick. */}
            <button onClick={handleClick}>
                send
            </button>
        </TextField>


    </form>
    </>
  )
}

export default Form
