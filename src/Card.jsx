import React from 'react'
import { NavLink } from 'react-router-dom'
import './App.css'

const Card = (props) => {
    return (
        <>
            <div className="col-md-5 mb-5 col-10 mx-auto">
                <div className="card">
                    <img src={props.imgsrc} className="card-img-top project_img" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{props.title}</h5>
                        <button className='p_btn'>
                            {props.btn === "RMS" && <NavLink to="/project/rms" className="btn btn-outline-primary">View {props.btn}</NavLink>}
                            {props.btn === "YTS" && <NavLink to="/project/yts" className="btn btn-outline-primary">View {props.btn}</NavLink>}
                            {props.btn === "FMA" && <NavLink to="/project/fma" className="btn btn-outline-primary">View {props.btn}</NavLink>}
                            {props.btn === "RF" && <NavLink to="/project/rf" className="btn btn-outline-primary">View {props.btn}</NavLink>}
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card