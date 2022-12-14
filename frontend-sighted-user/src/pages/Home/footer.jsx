import React from "react"

const Footer = () => <footer className="page-footer font-small blue pt-4">
    <div className="container-fluid text-center text-md-left">
        <div className="row">
            <div className="col-md-6 mt-md-0 mt-3">
                <h5 className="text-uppercase">About Blind Date Platform</h5>
                <p>A platform for visually impaired users.
                    The users of this platform can ask questions and post pictures to ask for advice,
                    tips or just to educate themselves on different subjects. The users can ask questions like where to go on a date,
                    what restaurants have an online menu or a menu that is suitable for visually impaired people or
                    even sexually explicit questions, as long as they are to help each other.
                    The platform will be created as an application, where users of the application need to create an account.
                    Users can also report other users, questions or answers when needed,
                    to keep the platform a safe space for the users.

                    </p>
            </div>

            <hr className="clearfix w-100 d-md-none pb-0"/>

            <div className="col-md-3 mb-md-0 mb-3">
                <h5 className="text-uppercase">Whats in trending</h5>
                <ul className="list-unstyled">
                    <li><a href="#!">Technology in Dating scene</a></li>
                    <li><a href="#!">Blind Date security</a></li>
                    <li><a href="#!">Blind Date successes</a></li>
                    <li><a href="#!">Making Blind dates Interesting</a></li>
                </ul>
            </div>

            <div className="col-md-3 mb-md-0 mb-3">
                <h5 className="text-uppercase">Privacy</h5>
                <ul className="list-unstyled">
                    <li><a href="#!">Terms and Conditions</a></li>
                    <li><a href="#!">Terms of Usage</a></li>
                    <li><a href="#!">Data Protection</a></li>
                    <li><a href="#!">How to Use this PLatform</a></li>
                </ul>
            </div>
        </div>
    </div>

    <div className="footer-copyright text-center py-3">© 2022 Copyright:
        <a href="https://mdbootstrap.com/"> Landlord Tool International</a>
    </div>

</footer>

export default Footer