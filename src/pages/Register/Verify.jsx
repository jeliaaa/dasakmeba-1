import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import './register.scss'
import { Link } from 'react-router-dom';

const Verify = () => {
    const [seconds, setSeconds] = useState(300); // 5 minutes in seconds
    const [verify, setVerify] = useState(true);
    useEffect(() => {
        const intervalId = setInterval(() => {
            setSeconds(prevSeconds => (prevSeconds > 0 ? prevSeconds - 1 : 0));
        }, 1000);

        // Cleanup the interval on component unmount or when seconds reach 0
        return () => clearInterval(intervalId);
    }, []); // Empty dependency array to run effect only once

    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;

    return (
        <Container className='verify_wrapper'>
            <h1>ვერიფიკაცია</h1>
            <div className='code'>
                <h3>შეიყვანეთ დასტურის კოდი: </h3>
                <input type="text" maxLength={4} />
            </div>
            <div className='time'>
            <h4>
                ვალიდურია :  {minutes < 10 ? '0' : ''}{minutes}:{remainingSeconds < 10 ? '0' : ''}{remainingSeconds}
            </h4>
            <button onClick={() => {alert('თავიდან გამოიგზავნა'); setSeconds(300)}}>ვერ მივიღე კოდი</button>
            </div>
            <div className='next'>
                <button disabled={!verify}><Link to={'/main'}>შემდეგ</Link></button>
            </div>
        </Container>
    )
}

export default Verify