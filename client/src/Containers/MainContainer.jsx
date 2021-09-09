// service packages
import { useState, useEffect } from "react"
import { Switch, Route, useHistory } from "react-router-dom"
import Homescreen from "../Screens/Homescreen/Homescreen"
import Contact from "../Screens/Contact/Contact"
import Sessions from "../Screens/Sessions/Sessions"
import Servicesoffered from "../Screens/Servicesoffered/Servicesoffered"
import Testimonials from "../Screens/Testimonials/Testimonials"

// api imports from back end services 
import { getAllTestimonials, deleteTestimonial, postTestimonial, putTesimonial } from "../Services/testimonials"

export default function MainContainer() {

  const [testimonial, setTestimonial] = useState([])
  const history = useHistory();





  return (
    <div>

    </div>
  )
}