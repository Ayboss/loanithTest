import React from 'react';
import user from '../Assets/users.jpg'
import admin from '../Assets/admin.jpg';
import send from '../Assets/send.svg';
import '../css/complaint.css'

function Complaint() {
    return (
        <div className="complaint">
            <div className="complaint__open">
                <h3>Open Tickets</h3>
                <ul className="complaint__list">
                    <li className="complaint__chat">
                        <div className="complaint__user">
                            <div className="complaint__img"><img src={user} alt="user"/></div>
                            <p>Lorem ipsum dolor sit amet consectetur adi</p>
                        </div>
                        <div className="complaint__admin">
                            <p>Lorem ipsum dolor sit amet consectetur adi</p>
                            <div className="complaint__img"><img src={admin} alt="admin"/></div>
                        </div>
                        <div className="complaint__reply">
                            <input placeholder="type something..." className="complaint__input"/><button className="complaint__send">send</button>
                        </div>
                        <div className="compliant__"><button>Satisfied and Close</button></div>
                    </li>
                    <li className="complaint__chat">
                        <div className="complaint__user">
                            <div className="complaint__img"><img src={user} alt="user"/></div>
                            <p>Lorem ipsum dolor sit amet consectetur adi</p>
                        </div>
                        <div className="complaint__admin">
                            <p>Lorem ipsum dolor sit amet consectetur adi</p>
                            <div className="complaint__img"><img src={admin} alt="admin"/></div>
                        </div>
                        <div className="complaint__reply">
                            <input placeholder="type something..." className="complaint__input"/><button className="complaint__send"><img src={send} alt=""/></button>
                        </div>
                        <div className="compliant__"><button>Satisfied and Close</button></div>
                    </li>
                
                </ul>
            </div> 
            <div className="complaint__close">
                <h3>Closed Tickets</h3>
                <ul>
                    <li>

                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Complaint
