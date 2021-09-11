import { Link } from 'react-router-dom'

export default function Testimonials(props) {
  
  const {testimonials, currentAdmin} = props

  return (
    <div className='testimonial-container'>
      {testimonials.map((testimonial) => (
        <div className="testimonial-map" key={testimonial.id}>
          <p className='testimonial-content'>{testimonial?.content}</p>
          <p className="testimonial-name">-{testimonial?.name}</p>
        </div>
      ))}


    </div>
  )
}