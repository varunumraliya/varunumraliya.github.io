import React from 'react'
import '../App.css'
import { NavLink } from 'react-router-dom'
import qrrms from "../assets/qr-rms.png"

const RMSdetail = () => {
    return (
        <>
            <NavLink to='/project' className="btn btn-outline-primary ms-lg-5"> ⬅️ Back</NavLink>
            <div className="rms_main">
                <div className="my-5">
                    <h1 className="text-center">RTO MAnagement System</h1>
                </div>
                <div className="container-fluid rms" >
                    <div className="row">
                        <div className="col-10 mx-auto">
                            <div className="row gy-5" id="prj">
                                <ul>
                                    <li><strong style={{ fontSize: '30px' }}>Technology</strong> :- Java</li>
                                    <li ><strong style={{ fontSize: '30px' }}>Description</strong> :-
                                        RTO can significantly improve its efficiency with this project's comprehensive management system. RTO employees will be empowered to manage all aspects of vehicle and driver data, including registration details, driver license information, and vehicle-driver associations. Additionally, the system automates the generation and electronic delivery of fine receipts to vehicle owners via email, streamlining the process and improving communication. This project offers a robust solution for the RTO's data management needs.</li>
                                </ul>
                            </div>
                            <div className="cards mt-lg-5">
                                <img src={qrrms} className="card-img-top qr_img" alt="..." />
                                <div className="card-body">
                                    <NavLink to="https://github.com/varunumraliya/rto-management-system" target='_blank' className="btn btn-outline-primary">Git Repositories</NavLink>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default RMSdetail