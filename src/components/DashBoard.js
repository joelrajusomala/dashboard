import React from "react"
import SideBar from "./SideBar"
import Home from "./Home"
import "./dashboard.css"

const DashBoard = () => {
    return (
        <div className="container-fluid bg-secondary min-vh-100">
            <div className="row">
                <div className="col-2 px-0 bg-white vh-100">
                    <SideBar></SideBar>
                </div>
                <div className="col-10 px-0">
                    <Home></Home>
                </div>
            </div>
        </div>
    )
}

export default DashBoard
