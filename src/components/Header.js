import React from 'react'
import { Container } from 'reactstrap'
import {FaSearch, FaCaretDown} from 'react-icons/fa';
import {MdEdit } from 'react-icons/md/'
import "./Header.css"

const header = () => {
  return (
    <Container>
        <nav className='navbar'>
            <img src='/assets/logo.png'/>
            <div className='search'>
                <FaSearch color='grey' className='search-logo'/>
                <span>Search for your favorite groups in ATG</span>
            </div>
            <p>Create account.<span>It's free!</span> <FaCaretDown/>
                
            </p>
            <div className='image'><img src='/assets/mobilenav.png'/></div>
        </nav>
        <div className='mobile-edit'>
            <MdEdit className='edit'/>
        </div>
    </Container>
  )
}

export default header