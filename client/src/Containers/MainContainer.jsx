// service packages
import { useState, useEffect } from "react"
import { Route, useHistory } from "react-router-dom"
import Homescreen from "../Screens/Homescreen/Homescreen"
import Contact from "../Screens/Contact/Contact"
import Sessions from "../Screens/Sessions/Sessions"
import Servicesoffered from "../Screens/Servicesoffered/Servicesoffered"
import Testimonials from "../Screens/Testimonials/Testimonials"

// api imports from back end services 
import { getAllTestimonials, deleteTestimonial, postTestimonial} from "../Services/testimonials"

export default function MainContainer({currentAdmin}) {

  const [testimonials, setTestimonials] = useState([])
  const history = useHistory();

  const fetchTestimonials = async () => {
    const testy = await getAllTestimonials();
    setTestimonials(testy);
  };

  const handleCreate = async (formData) => {
    const oneTestimonial = await postTestimonial(formData);
    setTestimonials((prevState) => [...prevState, oneTestimonial]);
    history.push("/testimonials");
  };

  const handleDelete = async (id) => {
    await deleteTestimonial(id);
    setTestimonial((prevState) => prevState.filter((testimonial) => testimonial.id !== id));
    fetchTestimonials()
    history.push("/testimonials");
  };


  return (
    <div>
      <Route exact path= '/contact'>
        <Contact />
      </Route>
      <Route exact path='/sessions' >
        <Sessions />
      </Route>
      <Route exact path='/testimonials'>
        <Testimonials
          currentAdmin={currentAdmin}
          testimonials={testimonials}
          handleCreate={handleCreate}
          handleDelete={handleDelete}/>
      </Route>
      <Route exact path='/services'>
        <Servicesoffered />
      </Route>
      <Route exact path='/home'>
        <Homescreen />
      </Route>
    </div>
  )
}