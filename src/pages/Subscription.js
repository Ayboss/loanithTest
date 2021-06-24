import React, {useEffect, useRef} from 'react';
import '../css/subscription.css';
import subcribersData from '../Data/subscribers.pdf';

function Subscription() {
    const downloadRef = useRef()
    useEffect(() => {
        // downloadRef.current.click()
    }, [])
    return (
        <div className="subscription">
            <div className="subscription__div">
               <h3>Download a list of subscribers</h3>
                <a ref={downloadRef} href={subcribersData} download>click to download</a>
            </div>
        </div>
    )
}

export default Subscription
