import Header from '../Header'
import './index.css'

const NotFound = () => (
  <>
    <Header />
    <div>
      <div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/jobby-app-not-found-img.png"
          alt="not found"
        />
      </div>
      <h1>Page Not Found</h1>
      <p>we’re sorry, the page you requested could not be found</p>
    </div>
  </>
)

export default NotFound
