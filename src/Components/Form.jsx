import { NameFields, ContactFields } from './Contact/styledContainers'

const Form = () => {
  return (
    <>
      <form>
        <NameFields>
            <input 
            type="text" />

            <input 
            type="text" />
        </NameFields>
        <ContactFields>
            <input 
            type="text" />

            <input 
            type="text" />
        </ContactFields>
        <textarea 
        type="text" >
        </textarea>
        <button>
            Submit
        </button>

    </form>
    </>
  )
}

export default Form
