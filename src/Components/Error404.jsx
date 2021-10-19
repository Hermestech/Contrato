import { Link } from 'react-router-dom'
import Home from '../pages/Home'

const Error404 = () => {
    return (
        
        <Link to={Home}>
            <h1>404</h1>
        </Link>
    )
}

export default Error404
