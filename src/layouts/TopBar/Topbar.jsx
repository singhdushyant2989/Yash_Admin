import './Topbar.css';

import monsta from '../../assests/images/fixed/Topbar/monsta.png';
import profile_pic from '../../assests/images/fixed/Topbar/profile_pic.jpg';

import * as RxIcons from 'react-icons/rx';
import * as FaIcons from 'react-icons/fa';
import * as MdIcons from 'react-icons/md';
import * as AiIcons from 'react-icons/ai';
import * as RiIcons from 'react-icons/ri';
import { IconContext } from 'react-icons';
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Topbar() {

    const contentEl = useRef(null);
    const [sidebaritem, setSidebaritem] = useState(0);
    const [sidebartab, setSidebartab] = useState(null);
    const [profilelist, setProfileList] = useState(false);

    // useEffect(() => {
    // }, []);
    var handleClick = (index) => {
        if(sidebaritem === index) {
            setSidebaritem(null);
        } else {
            setSidebaritem(index);
        }
    };
    
    var handleToggle = (index) => {
        if(sidebartab === index) {
            setSidebartab(null);
        } else {
            setSidebartab(index);
        }
    }

    var toggleProfile = (v) => {
        setProfileList(!profilelist);
        console.log(profilelist);
    }

    return (
        <>
            <div className="topbar d-flex fixed-top">
                <a href="" className='logo_anchor'>
                    <div className="topbar_logo">
                        <img src={monsta} alt="" className="logo" />
                        <span className='brand_text'>Furniture</span>
                    </div>
                </a>
                <div className="topbar_right d-flex justify-content-between">
                    <div className="toggle_icon">
                        <IconContext.Provider value={{className: "topbar_icon"}} >
                            <RxIcons.RxHamburgerMenu/>
                        </IconContext.Provider>
                    </div>
                    <div className="topbar_profile" onClick={() => toggleProfile()}>
                        <img src={profile_pic} alt="" width={30} height={30} />
                        <ul className={`${profilelist === true ? "show" : ""} profile_list mr-2`}>
                            <li>
                                <a href="">
                                    <div className='profile_list_items'>
                                        <IconContext.Provider value={{className: "topbar_icon me-2"}} >
                                            <FaIcons.FaUser/>
                                        </IconContext.Provider>
                                        Profile
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    <div className='profile_list_items'>
                                        <IconContext.Provider value={{className: "topbar_icon me-2"}} >
                                            <RiIcons.RiHome2Fill/>
                                        </IconContext.Provider>
                                        Company Profile
                                    </div>
                                </a>
                            </li>
                            <div className='profile_list_div'></div>
                            <li>
                                <a href="">
                                    <div className='profile_list_items'>
                                        <IconContext.Provider value={{className: "topbar_icon me-2"}} >
                                            <FaIcons.FaPowerOff/>
                                        </IconContext.Provider>
                                        Logout
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="main_page_content d-flex">
                <div className="sidebar">
                    <div className="site-menubar">
                        <div className="menubar scrollable_sidebar">
                            <ul>
                                <li className='list_item'>
                                    <Link to={'/admin-panel/dashboard'} className={`${sidebaritem === 0 ? 'active_sidebarmenu' : ''}`} onClick={() => {handleClick(0); handleToggle(null)}}>
                                        <div>
                                            <IconContext.Provider value={{className: "side_baricon"}} >
                                                <FaIcons.FaHome/>
                                            </IconContext.Provider>
                                            <span className='side_menu_title'>DashBoard</span>
                                        </div>
                                    </Link>
                                </li>
                                <li className='list_item list_dropdown'>
                                    <a className={`${sidebaritem === 1 ? 'active_sidebarmenu' : ''}`} onClick={() => {handleClick(1); handleToggle(1)}}>
                                        <div>
                                            <IconContext.Provider value={{className: "side_baricon"}} >
                                                <FaIcons.FaUserFriends/>
                                            </IconContext.Provider>
                                            <span className='side_menu_title'>Users Management</span>
                                            <IconContext.Provider value={{className: "side_menu_arrow"}}>
                                                <MdIcons.MdNavigateNext />
                                            </IconContext.Provider>
                                            {/* <span className="side_menu_arrow">{">"}</span> */}
                                        </div>
                                    </a>
                                    <div ref={contentEl} className={`collapse_menutab ${sidebartab === 1 ? "show_tabDetails" : ""}`}>
                                        <div className='sidetabDetails'>
                                            <Link to={'/admin-panel/admins'} href="">
                                                <div>
                                                    Admins
                                                </div>
                                            </Link>
                                        </div>
                                        <div className='sidetabDetails'>
                                            <a href="">
                                                <div>
                                                    Users
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </li>
                                <li className='list_item list_dropdown'>
                                    <a className={`${sidebaritem === 2 ? 'active_sidebarmenu' : ''}`} onClick={() => {handleClick(2); handleToggle(2)}}>
                                        <div>
                                            <IconContext.Provider value={{className: "side_baricon"}} >
                                                <FaIcons.FaLocationArrow/>
                                            </IconContext.Provider>
                                            <span className='side_menu_title'>Location</span>
                                            <IconContext.Provider value={{className: "side_menu_arrow"}}>
                                                <MdIcons.MdNavigateNext />
                                            </IconContext.Provider>
                                            {/* <span className="side_menu_arrow">{">"}</span> */}
                                        </div>
                                    </a>
                                    <div ref={contentEl} className={`collapse_menutab ${sidebartab === 2 ? "show_tabDetails" : ""}`}>
                                        <div className='sidetabDetails'>
                                            <a href="">
                                                <div>
                                                    Countries
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </li>
                                <li className='list_item list_dropdown'>
                                    <a className={`${sidebaritem === 3 ? 'active_sidebarmenu' : ''}`} onClick={() => {handleClick(3); handleToggle(3)}}>
                                        <div>
                                            <IconContext.Provider value={{className: "side_baricon"}} >
                                                <MdIcons.MdDashboard/>
                                            </IconContext.Provider>
                                            <span className='side_menu_title'>Master Catalogs</span>
                                            <IconContext.Provider value={{className: "side_menu_arrow"}}>
                                                <MdIcons.MdNavigateNext />
                                            </IconContext.Provider>
                                            {/* <span className="side_menu_arrow">{">"}</span> */}
                                        </div>
                                    </a>
                                    <div ref={contentEl} className={`collapse_menutab ${sidebartab === 3 ? "show_tabDetails" : ""}`}>
                                        <div className='sidetabDetails'>
                                            <a href="">
                                                <div>
                                                    Sliders
                                                </div>
                                            </a>
                                        </div>
                                        <div className='sidetabDetails'>
                                            <a href="">
                                                <div>
                                                    Testimonials
                                                </div>
                                            </a>
                                        </div>
                                        <div className='sidetabDetails'>
                                            <a href="">
                                                <div>
                                                    Why Choose Us
                                                </div>
                                            </a>
                                        </div>
                                        <div className='sidetabDetails'>
                                            <a href="">
                                                <div>
                                                    Coupons
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </li>
                                <li className='list_item list_dropdown'>
                                    <a className={`${sidebaritem === 4 ? 'active_sidebarmenu' : ''}`} onClick={() => {handleClick(4); handleToggle(4)}}>
                                        <div>
                                            <IconContext.Provider value={{className: "side_baricon"}} >
                                                <MdIcons.MdDashboard/>
                                            </IconContext.Provider>
                                            <span className='side_menu_title'>Product Catalogs</span>
                                            <IconContext.Provider value={{className: "side_menu_arrow"}}>
                                                <MdIcons.MdNavigateNext />
                                            </IconContext.Provider>
                                            {/* <span className="side_menu_arrow">{">"}</span> */}
                                        </div>
                                    </a>
                                    <div ref={contentEl} className={`collapse_menutab ${sidebartab === 4 ? "show_tabDetails" : ""}`}>
                                        <div className='sidetabDetails'>
                                            <a href="">
                                                <div>
                                                    Categories
                                                </div>
                                            </a>
                                        </div>
                                        <div className='sidetabDetails'>
                                            <a href="">
                                                <div>
                                                    Materials
                                                </div>
                                            </a>
                                        </div>
                                        <div className='sidetabDetails'>
                                            <a href="">
                                                <div>
                                                    Colors
                                                </div>
                                            </a>
                                        </div>
                                        <div className='sidetabDetails'>
                                            <a href="">
                                                <div>
                                                    Products
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </li>
                                <li className='list_item list_dropdown'>
                                    <a className={`${sidebaritem === 5 ? 'active_sidebarmenu' : ''}`} onClick={() => {handleClick(5); handleToggle(5)}}>
                                        <div>
                                            <IconContext.Provider value={{className: "side_baricon"}} >
                                                <FaIcons.FaSlidersH/>
                                            </IconContext.Provider>
                                            <span className='side_menu_title'>Enquirys</span>
                                            <IconContext.Provider value={{className: "side_menu_arrow"}}>
                                                <MdIcons.MdNavigateNext />
                                            </IconContext.Provider>
                                            {/* <span className="side_menu_arrow">{">"}</span> */}

                                        </div>
                                    </a>
                                    <div ref={contentEl} className={`collapse_menutab ${sidebartab === 5 ? "show_tabDetails" : ""}`}>
                                        <div className='sidetabDetails'>
                                            <a href="">
                                                <div>
                                                    Contact Enquirys
                                                </div>
                                            </a>
                                        </div>
                                        <div className='sidetabDetails'>
                                            <a href="">
                                                <div>
                                                    Newsletters
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </li>
                                <li className='list_item list_dropdown'>
                                    <a className={`${sidebaritem === 6 ? 'active_sidebarmenu' : ''}`} onClick={() => {handleClick(6); handleToggle(6)}}>
                                        <div>
                                            <IconContext.Provider value={{className: "side_baricon"}} >
                                                <FaIcons.FaUserFriends/>
                                            </IconContext.Provider>
                                            <span className='side_menu_title'>Connfiguration</span>
                                            <IconContext.Provider value={{className: "side_menu_arrow"}}>
                                                <MdIcons.MdNavigateNext />
                                            </IconContext.Provider>
                                            {/* <span className="side_menu_arrow">{">"}</span> */}
                                        </div>
                                    </a>
                                    <div ref={contentEl} className={`collapse_menutab ${sidebartab === 6 ? "show_tabDetails" : ""}`}>
                                        <div className='sidetabDetails'>
                                            <a href="">
                                                <div>
                                                    Payment Gateways
                                                </div>
                                            </a>
                                        </div>
                                        <div className='sidetabDetails'>
                                            <a href="">
                                                <div>
                                                    Configurations
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </li>
                                <li className='list_item'>
                                    <a className={`${sidebaritem === 7 ? 'active_sidebarmenu' : ''}`} onClick={() => {handleClick(7); handleToggle(null)}}>
                                        <div>
                                            <IconContext.Provider value={{className: "side_baricon"}} >
                                                <AiIcons.AiFillWechat/>
                                            </IconContext.Provider>
                                            <span className='side_menu_title'>Faqs</span>
                                        </div>
                                    </a>
                                </li>
                                <li className='list_item'>
                                    <a className={`${sidebaritem === 8 ? 'active_sidebarmenu' : ''}`} onClick={() => {handleClick(8); handleToggle(null)}}>
                                        <div>
                                            <IconContext.Provider value={{className: "side_baricon"}} >
                                                <FaIcons.FaFileAlt/>
                                            </IconContext.Provider>
                                            <span className='side_menu_title'>CMS Pages</span>
                                        </div>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                
            </div>
        </>
    )
}