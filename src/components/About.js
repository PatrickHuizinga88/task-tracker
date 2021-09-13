import { Link } from 'react-router-dom'
import { FaArrowLeft } from 'react-icons/fa'

const About = () => {
    return (
        <div>
            <h4>Version 1.3</h4>
            <p>Last update: Sep 13th 2021</p>
            <p>Made by <a href="https://patrickhuizinga88.github.io/">Patrick Huizinga</a></p>
            <Link to="/" className="btn" style={{margin: '20px 0 0 0'}}>
                <FaArrowLeft style={{verticalAlign: 'middle', marginRight: '5px'}}/>
                Go back
            </Link>
        </div>
    )
}

export default About
