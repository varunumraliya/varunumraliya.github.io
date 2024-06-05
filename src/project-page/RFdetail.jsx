import React from 'react'
import '../App.css'
import { NavLink } from 'react-router-dom'
import qrrf from "../assets/qr-rf.png"

const RFdetail = () => {
    return (
        <>
            <NavLink to='/project' className="btn btn-outline-primary ms-lg-5"> ⬅️ Back</NavLink>
            <div className="rms_main">
                <div className="my-5">
                    <h1 className="text-center">Recipe Finder</h1>
                </div>
                <div className="container-fluid rms" >
                    <div className="row">
                        <div className="col-10 mx-auto">
                            <div className="row gy-5" id="prj">
                                <ul>
                                    <li><strong style={{ fontSize: '30px' }}>Technology</strong> :- ReactJS,  NodeJS, HTML, CSS</li>
                                    <li><strong style={{ fontSize: '30px' }}>Database</strong> :- Firebase (For Database and Authentication)</li>
                                    <li><strong style={{ fontSize: '30px' }}>API</strong> :- Forkify API v1 (For Recipes)</li>
                                    <li ><strong style={{ fontSize: '30px' }}>Description</strong> :- In this Webapp user can SignUP and LogIN through email and we use firebase for email authentication after verify their email user can enter the website and search recipes by recipe name or ingredient and user can get recipe by API, also user can get search history for future user.</li>
                                </ul>
                            </div>
                            <div className="cards mt-lg-5">
                                <img src={qrrf} className="card-img-top qr_img" alt="..." />
                                <div className="card-body">
                                    <NavLink to="https://github.com/varunumraliya/recipe-finder" target='_blank' className="btn btn-outline-primary">Git Repositories</NavLink>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default RFdetail