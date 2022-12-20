import React from "react"

const Footer = () => <footer className="page-footer font-small blue pt-4">
    
    <div className="container-fluid text-center text-md-left">
        <div className="row">
            <div className="col-md-6 mt-md-0 mt-3">
                <h5 className="text-uppercase" style={{ color: 'red', fontWeight: 'bold' }}>Contact us</h5>
                <p>
                    <li>
                        <p>Phone Number:</p>
                        <p>Email Address:</p>
</li>
                    </p>
            </div>

            <hr className="clearfix w-100 d-md-none pb-0"/>

            <div className="col-md-3 mb-md-0 mb-3">
                <h5 className="text-uppercase" style={{ color: 'red', fontWeight: 'bold' }}>Whats in trending</h5>
                <ul className="list-unstyled">
                    <li><a href="#">Technology in Dating scene</a></li>
                    <li><a href="#">Blind Date security</a></li>
                    <li><a href="#">Blind Date successes</a></li>
                    <li><a href="#">Making Blind dates Interesting</a></li>
                </ul>
            </div>

            <div className="col-md-3 mb-md-0 mb-3">
                <h5 className="text-uppercase" style={{ color: 'red', fontWeight: 'bold' }}>Privacy</h5>
                <ul className="list-unstyled">
                    <li><a href="#">Terms and Conditions</a></li>
                    <li><a href="#">Terms of Usage</a></li>
                    <li><a href="#">Data Protection</a></li>
                    <li><a href="#">How to Use this PLatform</a></li>
                </ul>
            </div>
        </div>
    </div>

    <div className="footer-copyright text-center py-3" style={{ color: '#0dcaf0' }}>© 2022 Copyright:
        <a href="https://mdbootstrap.com/" style={{ color: 'blue' , fontWeight: 'bold'}}> Blind Date Platform</a>
    </div>

</footer>

export default Footer