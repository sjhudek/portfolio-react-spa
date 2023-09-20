import { Link } from 'react-router-dom';
// import LogoTitle from '../../assets/images/logo-s.png';  
import './index.scss';

const Home = () => {
    

    return (
        <div className="container home-page">
            <div className="text-zone">
                <h1>Hi!<br />
                I'm&nbsp;
                {/* <img src={LogoTitle} alt='developer'/> */}
                 Steve
                <br />
                and I'm a web developer
                </h1>
                <h2>Full Stack Developer / Artist / Cat Dad</h2>
                <Link to='/contact' className='flat-button'>CONTACT ME</Link>
            </div>
        </div>
    )
}

export default Home;