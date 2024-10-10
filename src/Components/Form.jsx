import { NameFields, ContactFields, TextField } from './Contact/StyledContainers'

const Form = () => {
  return (
    <>
    {/* Todo: add state management and send email after hitting send -> (change btn to a link) */}
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

            {/* Change this btn to link to send emails onClick. */}
            <button>
                send
            </button>
        </TextField>


    </form>
    </>
  )
}

export default Form
