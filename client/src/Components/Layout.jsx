import {Link} from 'react-router-dom'

export default function Layout(props) {
  const {handleLogout, children, currentUser} = props 

  return (
    <div>
      <header>
        <div>
        {currentUser ? (
          <>
            <p className="welcome">Welcome{currentUser.username}</p>
            <div className="layou-logout">
              <button className="layout-logout-btn" onClick={handleLogout}>Logout</button>
              </div>
              <div>
                <Link className="layout-services" to='/services'>Services</Link>
                <Link className='layout-sessions' to='/sessions'>Personalized Sessions</Link>
                <Link className='layout-testimonials' to='/testimonials'>Testimonials</Link>
                <Link className='layout-contact'to="/contact">Contact</Link>
              </div>
          </>
          
        ) : (
              <>
                <div className="layout-login">
                <Link className="layout-login" to='/login'>Login</Link>
              </div>
                <div>
                <Link className="layout-services" to='/services'>Services</Link>
                <Link className='layout-sessions' to='/sessions'>Personalized Sessions</Link>
                <Link className='layout-testimonials' to='/testimonials'>Testimonials</Link>
                <Link className='layout-contact'to="/contact">Contact</Link>
                </div>
              </>
        )}
        </div>
      </header>
      {children}
    </div>
  )
}