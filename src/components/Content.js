import React from 'react'
import { Button, Input } from 'reactstrap';
import { FaCaretDown } from 'react-icons/fa';
import { HiShare, HiUsers,HiPlusSm, HiOutlineEye, HiOutlineLocationMarker, HiCalendar } from 'react-icons/hi';
import {FiMoreHorizontal} from 'react-icons/fi'
import {MdEdit, MdOutlineErrorOutline, MdOutlineWorkOutline } from 'react-icons/md/'
import './Content.css'

const Content = () => {
  return (
    <div className='content'>
        <div className='mobile-links'>
        <p className='postno'>Posts(368)</p>
        <Button className='filter-btn'>Filter: All <FaCaretDown/></Button>
        </div>

        <div className='links'>
            <div>
                
                <ul>
                    <li><a href='#'>All Posts(32)</a></li>
                    <li><a href='#'>Article</a></li>
                    <li><a href='#'>Event</a></li>
                    <li><a href='#'>Education</a></li>
                    <li><a href='#'>Job</a></li>
                </ul>
                <div className='buttons'>
                    <Button className='first'>Write a Post <FaCaretDown/></Button>
                    <Button  className='second'><HiPlusSm/><HiUsers/>Join group</Button>
                </div>
                   
            </div>
        </div>
        
        <div className='section'>
            <div className='left'>
                <div className='card'>
                    <img className='articleimg' src='./assets/article1.png'/>
                    <div className='card-body'>
                        <span>✍️ Article</span>
                        <div className='card-title'>
                            <h1>What if famous brands had regular fonts? Meet RegulaBrands!</h1>
                            <FiMoreHorizontal className='load-more'/>
                        </div>
                        <p className='description'>I've worked in UX for the better part of a decade. From now on, I plan to rei…</p>
                        <div className='footer'>
                            <div className='user'>
                                <img src='/assets/user1.png'/>
                                <span>Sarthak Kamra</span>
                            </div>
                            <div className='views'>                               
                                <span><HiOutlineEye/>1.4k views</span>
                                <HiShare  className='share'/>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='card'>
                    <img className='articleimg' src='./assets/article2.png'/>
                    <div className='card-body'>
                        <span>🔬️ Education</span>
                        <div className='card-title'>
                            <h1>Tax Benefits for Investment under National Pension Scheme launched by Government</h1>
                            <FiMoreHorizontal className='load-more'/>
                        </div>
                        <p className='description'>I've worked in UX for the better part of a decade. From now on, I plan to rei…</p>
                        <div className='footer'>
                            <div className='user'>
                                <img src='/assets/user2.png'/>
                                <span>Sarah West</span>
                            </div>
                            <div className='views'>                               
                                <span><HiOutlineEye/>1.4k views</span>
                                <HiShare  className='share'/>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='card'>
                    <img className='articleimg' src='./assets/article3.png'/>
                    <div className='card-body'>
                        <span>🗓️ Meetup</span>
                        <div className='card-title'>
                            <h1>Finance & Investment Elite Social Mixer @Lujiazui</h1>
                            <FiMoreHorizontal className='load-more drop'/>
                        </div>
                        <div className='meetup'>
                            <div className='date'><HiCalendar/> Fri, 12 Oct, 2018</div>
                            <div className='location'><HiOutlineLocationMarker/> Ahmedabad, India</div>
                        </div>
                        <Button className='web-btn'>Visit Website</Button>
                        <div className='footer'>
                            <div className='user'>
                                <img src='/assets/user3.png'/>
                                <span>Ronal Jones</span>
                            </div>
                            <div className='views'>                               
                                <span><HiOutlineEye/>1.4k views</span>
                                <HiShare  className='share'/>
                            </div>
                        </div>
                        <div className='dropdown'>
                            <p>Edit</p>
                            <p>Report</p>
                            <p>Option 3</p>
                        </div>
                    </div>
                </div>

                <div className='card'>
                    
                    <div className='card-body'>
                        <span>💼️ Job</span>
                        <div className='card-title'>
                            <h1>Finance & Investment Elite Social Mixer @Lujiazui</h1>
                            <FiMoreHorizontal className='load-more'/>
                        </div>
                        <div className='meetup'>
                            <div className='date'><MdOutlineWorkOutline/> Innovaccer Analytics Private Ltd.</div>
                            <div className='location'><HiOutlineLocationMarker/> Noida, India</div>
                        </div>
                        <Button className='web-btn' style={{color:"#02B875"}}>Apply on Timesjobs</Button>
                        <div className='footer'>
                            <div className='user'>
                                <img src='/assets/user4.png'/>
                                <span>Ronal Jones</span>
                            </div>
                            <div className='views'>                               
                                <span><HiOutlineEye/>1.4k views</span>
                                <HiShare  className='share'/>
                            </div>
                        </div>
                    </div>
                </div>
            
            </div>
            <div className='right'>
                <div className='right-location'>
                    <span><HiOutlineLocationMarker/> Noida, India</span>
                    <MdEdit/>
                </div>
                <p> <MdOutlineErrorOutline/> <span>Your location will help us serve better and extend a personalised experience.</span></p>
            </div>
        </div>
    </div>
  )
}

export default Content