import React, { useState } from "react"
import SideBar from "./SideBar"

import "./dashboard.css"
import Nav from "./Nav"
import Main from "./Main"

const DashBoard = () => {
    const [toggle, setToggle] = useState(true)

    const Toggle = () => {
        setToggle(!toggle)
    }

    return (
        <div className="container-fluid  min-vh-100 dashboard">
            <div className="row">
                {toggle && (
                    <div className="col-4 col-md-2 px-0  bg-primary vh-100 position-fixed">
                        <SideBar></SideBar>
                    </div>
                )}
                {toggle && <div className="col-4 col-md-2"></div>}
                <div className="col px-0">
                    <Nav Toggle={Toggle} />

                    <Main />
                </div>
            </div>
        </div>
    )
}

export default DashBoard
