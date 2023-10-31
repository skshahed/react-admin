import "./navbar.scss"

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="logo">
          <img src="logo.svg" alt="Sha-Admin" className="" />
          <span>Sha-Admin</span>
      </div>
      <div className="icons">
          <img src="/search.svg" alt="" className="icon" />
          <img src="/app.svg" alt="" className="icon" />
          <img src="/expand.svg" alt="" className="icon" />
          <div className="notification">
            <img src="/notifications.svg" alt="" />
            <span>5</span>
          </div>
          <div className="user">
            <img src="https://www.freeiconspng.com/thumbs/computer-user-icon/computer-user-icon-2.png" alt="" />
            <span>Shahed</span>
          </div>
          <img src="/settings.svg" alt="" className="icon" />
      </div>
    </div>
  )
}

export default Navbar