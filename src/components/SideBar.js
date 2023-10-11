import React from "react"
import "./sidebar.css"

const SideBar = () => {
    return (
        <div>
            <div className="bg-white sidebar p-2">
                <div m-2>
                    <i className="bi bi-bootstrap-fill my-2 me-3 fs-4"></i>
                    <span className="brand-name fs-4">trishi Portal</span>
                </div>
                <hr className="text-dark" />
                <div className="list-group list-group-flush">
                    <a className="list-group-item py-2" href="#name1">
                        <i className="bi bi-speedometer2 fs-5 me-3"></i>
                        <span className="fs-5">DashBoard</span>
                    </a>
                    <a className="list-group-item  py-2" href="#name2">
                        <i className="bi bi-house fs-5 me-3"></i>
                        <span className="fs-5">Home</span>
                    </a>
                    <a className="list-group-item py-2" href="#name3">
                        <i className="bi bi-table fs-5 me-3"></i>
                        <span className="fs-5">Products</span>
                    </a>
                    <a className="list-group-item  py-2" href="#name4">
                        <i className="bi bi-clipboard-data fs-5 me-3"></i>
                        <span className="fs-5">Report</span>
                    </a>
                    <a className="list-group-item py-2" href="#name5">
                        <i className="bi bi-people fs-5 me-3"></i>
                        <span className="fs-5">Customers</span>
                    </a>
                    <a className="list-group-item  py-2" href="#name6">
                        <i className="bi bi-power fs-5 me-3"></i>
                        <span className="fs-5">Logout</span>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default SideBar
