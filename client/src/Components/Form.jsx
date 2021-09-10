import {useState} from 'react'


export default function Form(props) {
  
  const [formData, setFormData] = useState({
    name: '',
    content:'',
  })

  const { content, name } = formData;
  const { handleCreate, id } = props
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }
  return (
    <div>
      <form
        className='form-container'
        onSubmit={(e) => {
          e.preventDefault();
          handleCreate(id, formData)
        }}
      >
        <input
          className='form-name'
          placeholder="Name"
          value={name}
          name="name"
          onChange={handleChange}
        />
        <input
          className='form-content'
          placeholder="Testimonial"
          value={content}
          name="content"
          onChange={handleChange}
        />
        <button className="form-btn">Submit</button>
      </form>
    </div>
  )
}