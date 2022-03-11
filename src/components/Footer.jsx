import React from 'react'

const Footer = () => {
    return (
        <>
            <footer className="bg-secondary  text-center text-white py-3">
                {/* <!-- Grid container --> */}
                <div className="container p-4 pb-0">
                    {/* <!-- Section: Social media --> */}
                    <section className="mb-4">
                        {/* <!-- Facebook --> */}
                        <a
                            className="btn btn-primary btn-floating m-1"
                            style={{backgroundColor: '#3b5998'}}
                            href="#!"
                            role="button"
                        ><i className="fa fa-facebook-f"></i></a>

                        {/* <!-- Twitter --> */}
                        <a
                            className="btn btn-primary btn-floating m-1"
                            style={{backgroundColor: '#55acee'}}
                            href="#!"
                            role="button"
                        ><i className="fa fa-twitter"></i></a>

                        {/* <!-- Google --> */}
                        <a
                            className="btn btn-primary btn-floating m-1"
                            style={{backgroundColor: '#dd4b39'}}
                            href="#!"
                            role="button"
                        ><i className="fa fa-google"></i ></a>

                        {/* <!-- Instagram --> */}
                        <a
                            className="btn btn-primary btn-floating m-1"
                            style={{backgroundColor: ' #ac2bac'}}                        
                            href="#!"
                            role="button"
                        ><i className="fa fa-instagram"></i></a>

                        {/* <!-- Linkedin --> */}
                        <a
                            className="btn btn-primary btn-floating m-1"
                            style={{backgroundColor: ' #0082ca'}}
                            href="#!"
                            role="button"
                        ><i className="fa fa-linkedin"></i></a>
                        {/* <!-- Github --> */}
                        <a
                            className="btn btn-primary btn-floating m-1"
                            style={{backgroundColor: ' #333333'}}
                            href="#!"
                            role="button"
                        ><i className="fa fa-github"></i></a>
                    </section>
                    {/* <!-- Section: Social media --> */}
                </div>
                {/* <!-- Grid container --> */}

                {/* <!-- Copyright --> */}
                <div className="text-center p-3" style={{backgroundColor: 'rgba(0, 0, 0, 0.3)'}}>
                    © 2022 Copyright: nguyenvanluan.com
                </div>
                {/* <!-- Copyright --> */}
            </footer>
        </>
    )
}

export default Footer
