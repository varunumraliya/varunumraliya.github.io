import React from 'react'
import '../App.css'
import { NavLink } from 'react-router-dom'
import qrfma from "../assets/qr-fma.png"

const FMAdetail = () => {
    return (
        <>
            <NavLink to='/project' className="btn btn-outline-primary ms-lg-5"> ⬅️ Back</NavLink>
            <div className="rms_main">
                <div className="my-5">
                    <h1 className="text-center">Fund Management App</h1>
                </div>
                <div className="container-fluid rms" >
                    <div className="row">
                        <div className="col-10 mx-auto">
                            <div className="row gy-5" id="prj">
                                <ul>
                                    <li><strong style={{ fontSize: '30px' }}>Technology</strong> :- Dart (Flutter)</li>
                                    <li><strong style={{ fontSize: '30px' }}>Database</strong> :- Firebase</li>
                                    <li><strong style={{ fontSize: '30px' }}>API</strong> :- Razorpay (For payment getway)</li>
                                    <li ><strong style={{ fontSize: '30px' }}>Description</strong> :- In thi app Admin can manage members and all member can fund that decided amount monthly time period, and view total collected fund and also view total members of that NGO, get notification (Firebase messaging) every month (Reminder) by this app.</li>
                                </ul>
                            </div>
                            <div className="cards mt-lg-5">
                                <img src= {qrfma} className="card-img-top qr_img" alt="..." />
                                <div className="card-body">
                                    <NavLink to="https://github.com/varunumraliya/fund-management-app" target='_blank' className="btn btn-outline-primary">Git Repositories</NavLink>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default FMAdetail