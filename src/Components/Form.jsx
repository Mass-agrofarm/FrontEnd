import { NameFields, ContactFields, TextField } from './Contact/styledContainers'

const Form = () => {
  return (
    <>
      <form style={{ width: '100%' }}>

        <div>
          <label>Name *</label>
          <NameFields>
              <input 
              type="text" placeholder='First'/>

              <input 
              type="text" placeholder='Last'/>
          </NameFields>
        </div>
        <ContactFields>
            <label>Email *</label>
            <input 
            type="email" placeholder='Email'/>

            <label>Phone Number *</label>
            <input 
            type="contact" placeholder="Phone no"/>
        </ContactFields>
        <TextField>
            <label>Message *</label>
            <textarea 
            type="text" placeholder='Message'>
            </textarea>
            <button>
                send
            </button>
        </TextField>
        

    </form>
    </>
  )
}

export default Form
