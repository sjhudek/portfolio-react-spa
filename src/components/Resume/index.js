import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFile } from '@fortawesome/free-solid-svg-icons'; 

const Resume = () => {
    return (
        <div className="container resume-page">
            <div className="text-zone">
                <h1>Resume</h1>
                <FontAwesomeIcon icon={faFile} color="#ffd700" size='5x' />
            </div>
        </div>
    )
};

export default Resume;