import {Link, withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import './index.css'

const Header = props => {
  const onClickLogout = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }
  return (
    <nav>
      <img
        src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
        alt="website logo"
      />
      <div>
        <div>
          <Link to="/">Home</Link>
          <Link to="/jobs">Jobs</Link>
        </div>
        <div>
          <button type="button" onClick={onClickLogout}>
            Logout
          </button>
        </div>
      </div>
    </nav>
  )
}

export default withRouter(Header)
