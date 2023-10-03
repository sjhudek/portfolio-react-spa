import { Link } from 'react-router-dom';
// import Loader from 'react-loaders'
// import AnimatedLetters from '../AnimatedLetters'
import Avatar from '../../assets/images/avataaars-1.png';
import './index.scss';
// import { useEffect, useState } from 'react';

const Home = () => {
    
    // const [letterClass, setLetterClass ] = useState('text-animate');

    // const nameArray = ['s', 't', 'e', 'v', 'e'];

    // const jobArray = [
    //     'w',
    //     'e',
    //     'b',
    //     ' ',
    //     'd',
    //     'e',
    //     'v',
    //     'e',
    //     'l',
    //     'o',
    //     'p',
    //     'e',
    //     'r',
    //     '.',
    //   ];

    //   useEffect(() => {
    //     return setTimeout(() => {
    //       setLetterClass('text-animate-hover')
    //     }, 4000)
    //   }, []);

    return (
        <div className="container home-page">
            <div className="text-zone">
                <h1>Hi!<br />
                I'm Steve
                 <img src={Avatar} alt='steve'/>
                <br />
                and I'm a web developer
                </h1>
                <h2>Full Stack Developer + Artist + Cat Dad</h2>
                <Link to='/contact' className='flat-button'>CONTACT ME</Link>
            </div>
        </div>
    )
}

export default Home;