import React from "react"

const Main = ({ Toggle }) => {
    return (
        <div className="px-2" Toggle={Toggle}>
            <div className="container-fluid ">
                <div className="row g-3 py-4">
                    <div className="col-md-3">
                        <div className="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
                            <div>
                                <h3 className="fs-2">230</h3>
                                <p className="fs-5">Prouducts</p>
                            </div>
                            <i className="bi bi-cart-plus p-3 fs-1"></i>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
                            <div>
                                <h3 className="fs-2">230</h3>
                                <p className="fs-5">Total </p>
                            </div>
                            <i className="bi bi-cart-plus p-3 fs-1"></i>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
                            <div>
                                <h3 className="fs-2">230</h3>
                                <p className="fs-5">Total</p>
                            </div>
                            <i className="bi bi-cart-plus p-3 fs-1"></i>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
                            <div>
                                <h3 className="fs-2">230</h3>
                                <p className="fs-5">Total</p>
                            </div>
                            <i className="bi bi-cart-plus p-3 fs-1"></i>
                        </div>
                    </div>
                </div>
            </div>
            <table class="table bg-white rounded mt-2">
                {/* <caption className="text-white fs-4">List of Jobs</caption> */}
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">First</th>
                        <th scope="col">Last</th>
                        <th scope="col">Handle</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td colspan="2">Larry the Bird</td>
                        <td>@twitter</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Main
