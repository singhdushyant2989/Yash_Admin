import { IconContext } from "react-icons";
import Topbar from "../TopBar/Topbar";
import './Dashboard.css';
import * as FiIcons from 'react-icons/fi';
import * as FaIcons from 'react-icons/fa';
import * as BiIcons from 'react-icons/bi';

export default function DashBoard() {
    return (
        <>
            <Topbar />
            <div className="Main">
                <div className="dashboard">
                    <div className="page_header">
                        <h1 className="page-title">
                            Welcome! Admin
                        </h1>
                    </div>
                    <div className="page-content container-fluid">
                        <div className="row">
                            <div className="col-xl-3 col-md-3 info-panel">
                                <a href="">
                                    <div className="card card-block" style={{'--bs-bg-opacity' : '0.8', border: 'none', backgroundColor: '#3e8ef7'}}>
                                        <div className="card-watermark">
                                            <IconContext.Provider value={{className: 'watermark-icon'}}>
                                                <FiIcons.FiShoppingCart />
                                            </IconContext.Provider>
                                            <div className="dashboard_card">
                                                <span>0</span>
                                                <p>Total Order</p>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="col-xl-3 col-md-3 info-panel">
                                <a href="">
                                    <div className="card card-block" style={{'--bs-bg-opacity' : '0.7', border: 'none', backgroundColor: '#17b3a3'}}>
                                        <div className="card-watermark">
                                            <IconContext.Provider value={{className: 'watermark-icon'}}>
                                                <FaIcons.FaUsers />
                                            </IconContext.Provider>
                                            <div className="dashboard_card">
                                                <span>11</span>
                                                <p>Total Users</p>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="col-xl-3 col-md-3 info-panel">
                                <a href="">
                                    <div className="card card-block" style={{'--bs-bg-opacity' : '0.8', border: 'none',backgroundColor: '#0bb2d4'}}>
                                        <div className="card-watermark">
                                            <IconContext.Provider value={{className: 'watermark-icon'}}>
                                                <BiIcons.BiRupee />
                                            </IconContext.Provider>
                                            <div className="dashboard_card">
                                                <span>0</span>
                                                <p>Total earnings</p>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="col-xl-3 col-md-3 info-panel">
                                <a href="">
                                    <div className="card card-block" style={{'--bs-bg-opacity' : '0.8', border: 'none', backgroundColor: '#9463f7'}}>
                                        <div className="card-watermark">
                                            <IconContext.Provider value={{className: 'watermark-icon'}}>
                                                <FiIcons.FiShoppingBag />
                                            </IconContext.Provider>
                                            <div className="dashboard_card">
                                                <span>20</span>
                                                <p>Total Products</p>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}