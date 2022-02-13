
import React from 'react'
import './SocialMedia.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faFacebook,faInstagram,faWhatsapp} from '@fortawesome/free-brands-svg-icons'
import{faAt}from '@fortawesome/free-solid-svg-icons'


function SocilaMedia() {
    return(
        <div className='redes-container'>
            <ul>
                <li>
                    <a href='' className='facebook'><FontAwesomeIcon icon={faFacebook} /> </a>
                </li>
                <li>
                    <a href='https://www.instagram.com/flashbacksbymaria/' className='instagram'><FontAwesomeIcon icon={faInstagram}/> </a>
                </li>
                <li>
                    <a href='https://walink.co/85ea93' className='whatapp'><FontAwesomeIcon icon={faWhatsapp}/></a>
                </li>
                <li>
                    <a href='mailto:Flashbackspic@gmail.com' className='mail'><FontAwesomeIcon icon={faAt}/> </a>
                </li>
            </ul>

        </div>
    )
    
}
export default SocilaMedia