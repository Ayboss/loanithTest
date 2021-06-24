import React, {useState} from 'react';
import user from '../Assets/users.jpg'
import admin from '../Assets/admin.jpg';
import send from '../Assets/send.svg';
import '../css/complaint.css'

function Complaint() {
    const [open, setOpen]= useState(false)
    return (
        <div className="complaint__body">
            <div className="complaint__stats">
                <div className="complaint__tab">
                    <a onClick={()=>setOpen(true)} className={`complaint__tab--btn ${open?'complaint__tab--btnActive':''}`}>Open</a>
                    <a onClick={()=>setOpen(false)} className={`complaint__tab--btn ${!open?'complaint__tab--btnActive':''}`}>Close</a>
                </div>
                <ul className="complaint__list">
                    <li className="complaint__item">
                        <img src={user} alt="user" className="complaint__userImg"/>
                        <div className="complaint__itemDetails">
                            <h3>John Doe</h3>
                            <p>lorem ipsum and stuffs ...</p>
                        </div>
                    </li>
                    <li className="complaint__item">
                        <img src={user} alt="user" className="complaint__userImg"/>
                        <div className="complaint__itemDetails">
                            <h3>John Doe</h3>
                            <p>lorem ipsum and stuffs ...</p>
                        </div>
                    </li>
                    <li className="complaint__item">
                        <img src={user} alt="user" className="complaint__userImg"/>
                        <div className="complaint__itemDetails">
                            <h3>John Doe</h3>
                            <p>lorem ipsum and stuffs ...</p>
                        </div>
                    </li>
                </ul>
            </div>
            <div className="complaint__graphs">
                <div className="complaint">
                    <div className="complaint__header">
                        <img className="complaint__img" src={user} alt="user"/>
                        <h3>John Doe</h3>
                        <button>Mark As Closed</button>
                    </div>
                    <ul className="complaint__chat">
                        <li className="complaint__user">
                            <p>Lorem ipsum dolor sit amet consectetur adi</p>
                        </li>
                        <li className="complaint__admin">
                            <p>Lorem ipsum dolor sit amet consectetur adi</p>
                        </li>
                        <li className="complaint__admin">
                            <p>Lorem ipsum dolor sit amet consectetur adi</p>
                        </li>
                        <li className="complaint__admin">
                            <p>Lorem ipsum dolor sit amet consectetur adi</p>
                        </li>
                        <li className="complaint__admin">
                            <p>Lorem ipsum dolor sit amet consectetur adi</p>
                        </li>
                        <li className="complaint__admin">
                            <p>Lorem ipsum dolor sit amet consectetur adi</p>
                        </li>
                    </ul>
                    <div className="complaint__reply">
                        <input placeholder="type something..." className="complaint__input"/><button className="complaint__send"><img src={send} alt="send"/></button>
                    </div>
                </div>
            </div>
        </div>       
    )
}
export default Complaint
