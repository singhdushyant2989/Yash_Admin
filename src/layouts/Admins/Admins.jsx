import { IconContext } from "react-icons";
import * as HiIcons from 'react-icons/hi';
import * as FaIcons from 'react-icons/fa';
import * as MdIcons from 'react-icons/md';

import Topbar from "../TopBar/Topbar";
import './Admin.css';


export default function Admin() {
    return (
        <>
            <Topbar />
            <div className="Main">
                <div className="admin-header">
                    <div className="row">
                        <div className="col-md-6">
                            <h1 className="admin-title">Admins Listing</h1>
                            <ul className="breadcrumb">
                                <li className="breadcrumb-item">
                                    <a href="">Dashboard</a>
                                </li>
                                <li className="breadcrumb-item">
                                    Admins
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-6">
                            <ul className="admin-setting">
                                <li>
                                <button type="button" class="btn btn-primary add-admin-btn" data-bs-toggle="tooltip" data-bs-placement="left" data-bs-title="left">
                                        <IconContext.Provider value={{className: 'admin-icons'}}>
                                            <HiIcons.HiOutlinePlus />
                                        </IconContext.Provider>
                                    </button>
                                </li>
                                <li>
                                    <button className="btn btn-floating btn-primary float-end add-admin-btn" type="button" data-bs-toggle="tooltip" data-bs-placement="left" data-bs-trigger="hover" data-original-title="Show Filter">
                                        <div className="special-icon">
                                            <IconContext.Provider value={{className: "admin-icons-one"}}>
                                                <FaIcons.FaFilter />
                                            </IconContext.Provider>
                                        </div>
                                        <div style={{display:'none'}}>
                                            <IconContext.Provider value={{className: "admin-icons"}}>
                                                <MdIcons.MdFilterAltOff />
                                            </IconContext.Provider>
                                        </div>
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="admin-content">
                    <div className="page-content container-fluid">
                        <div className="admin-filter">
                            <div className="filter-body">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="example-wrap">
                                            <h5 className="example-title">Filters</h5>
                                            <div className="col-md-12 filter-menu">
                                                <form action="" acceptCharset="UTF-8" id="search-form" className="form-horizontal filter-admin-form" autoComplete="off" encType="multipart/form-data" method="post">
                                                    <div className="row clearfix">
                                                        <div className="col-md-3 p-0">
                                                            <div className="form-group">
                                                                <input type="text" className="form-control" id="name" placeholder="Name" name="name" autoComplete="off"  />
                                                            </div>
                                                        </div>
                                                        <div className="col-md-3">
                                                            <div className="form-group">
                                                                <input type="text" className="form-control" id="email" placeholder="Email Address" name="email" autoComplete="off"  />
                                                            </div>
                                                        </div>
                                                        <div className="col-md-3 p-0">
                                                            <div className="form-group">
                                                                <input type="text" className="form-control" id="mobile_number" placeholder="Mobile Number" name="mobile_number" autoComplete="off"  />
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-3 col-md-3">
                                                            <div className="row">
                                                                <div className="col-md-12">
                                                                    <div className="form-group">
                                                                        <button type="submit" className="btn btn-primary" name="Search" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-trigger="hover" data-original-title="Filter Admins">
                                                                            <IconContext.Provider value={{className:'admin-icons'}}>
                                                                                <MdIcons.MdOutlineSearch />
                                                                            </IconContext.Provider>
                                                                            <span className="ms-2">Filter Admins</span>
                                                                        </button>
                                                                        <button name="Clear" className="btn btn-primary ms-3"
                                                                        id="clearBtn" data-toggle="tooltip" data-bs-placement="bottom" data-bs-trigger="hover" data-bs-title="Clear">
                                                                            Clear
                                                                        </button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="admin-filter">
                            <div className="filter-body">
                                <div className="row">
                                    <div className="col-lg-12">
                                        Hello
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}