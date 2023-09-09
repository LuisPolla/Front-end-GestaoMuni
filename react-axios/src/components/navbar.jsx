import { Link } from 'react-router-dom'

const navbar = () => {
  return (
    <nav className='navbar'>
        <h2>
            <Link to={`/`}>blog</Link>
        </h2>
        <ul>
            <li>
            <Link to={`/new`} className='new-btn'>
                Novo Post
            </Link>
            </li>
        </ul>
    </nav>
  )
}

export default navbar