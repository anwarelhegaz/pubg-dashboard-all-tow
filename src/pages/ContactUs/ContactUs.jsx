import './ContactUs.css';
import { Link } from 'react-router-dom';
import logo from "../../assets/images/logo.png"
import { useEffect } from 'react';
export default function ContactUs() {

    // start Animation *******************************************************************
      // Animating Elements with Intersection Observer
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
            entry.target.classList.add("show-items");
            } else {
            entry.target.classList.remove("show-items");
            }
        });
        });
        
        const scrollScale = document.querySelectorAll(".scroll-scale");
        scrollScale.forEach((el) => observer.observe(el));
    
        const scrollTop = document.querySelectorAll(".scroll-top");
        scrollTop.forEach((el) => observer.observe(el));
    
        const scrollButton = document.querySelectorAll(".scroll-bottom");
        scrollButton.forEach((el) => observer.observe(el));
    
        const scrollLeft = document.querySelectorAll(".scroll-left");
        scrollLeft.forEach((el) => observer.observe(el));
    
        const scrollRight = document.querySelectorAll(".scroll-right");
        scrollRight.forEach((el) => observer.observe(el));
        
    
        // Cleanup the observer on component unmount
        return () => {
            scrollScale.forEach((el) => observer.unobserve(el));
            scrollTop.forEach((el) => observer.unobserve(el));
            scrollButton.forEach((el) => observer.unobserve(el));
            scrollLeft.forEach((el) => observer.unobserve(el));
            scrollRight.forEach((el) => observer.unobserve(el));
        };
      }, []); // Empty dependency array ensures the effect runs only once

      // End Animation *******************************************************************

    // Scroll to the top when the component mounts
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    
    return (
        <>
        <section className="title-page scroll-scale">
            <div className="container">
                <h3>اتصل بنا</h3>
                <ul>
                    <li>
                        <Link to="/home">الرئيسية</Link>
                    </li>
					<li>
                        <span>اتصل بنا</span>
					</li>
				</ul>
            </div>
        </section>
        <section className="contact-page-section">
            <div className="container">
                <div className="row">
                    <div className="col-xs-12 col-lg-6">
                        <div className="form-contact scroll-right">
                            <div className="form">
                                <div className="form-group">
                                    <p>
                                        <span className='wpcf7-form-control-wrap'>
                                            <input className='form-controll' type="text" placeholder='الاسم'/>
                                        </span>
                                        <i className="fa fa-user"></i>
                                    </p>
                                </div>
                                <div className="form-group">
                                        <span className='wpcf7-form-control-wrap'>
                                            <input className='form-controll' type="text" placeholder='البريد الالكتروني'/>
                                        </span>
                                        <i className="fa fa-envelope"></i>
                                </div>
                                <div className="form-group">
                                        <span className='wpcf7-form-control-wrap'>
                                            <input className='form-controll' type="text" placeholder='العنوان'/>
                                        </span>
                                        <i className="fa fa-align-justify"></i>
                                </div>
                                <div className="form-group">
                                        <span className='wpcf7-form-control-wrap'>
                                            <textarea className='form-controll' type="text" placeholder='العنوان'/>
                                        </span>
                                        <i className="fa fa-envelope"></i>
                                </div>
                                <div className="form-group">
                                    <button  className='form-controll btn-form'>ارسال</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Empty cols */}
                    <div className="col-xs-12 col-lg-2"></div> 
                    <div className="col-xs-12 col-lg-4">
                        <div className="contact-side-bar scroll-left">
                            <div className="logo-side-bar">
                                <Link to="/home">
                                    <img src={logo} alt="logo-img" />
                                </Link>
                            </div>
                            <div className="details-side-bar">
                                <ul>
                                    <li>
                                        <i className="fa fa-map-marker-alt"></i>
                                        <span>بنى سويف كورنيش النيل بجوار شركة الغاز الطبيعى</span>
                                    </li>
                                    <li>
                                        <i className="far fa-clock"></i>
                                        <span>السبت _ الجمعة من 9:00 AM إلي 12:00 PM</span>
                                    </li>
                                    <li>
                                        <i className="fa fa-phone"></i>
                                        <span>الرقم الموحد 012244455524</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="map-section">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3487.1179931256875!2d31.11697255978753!3d29.072658075529585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145a273438a9b0d7%3A0x1f07b7b1d69cdc5e!2z2YPYp9mB2YrZhyDYr9is2KfYrCDYqNio2KzZig!5e0!3m2!1sar!2seg!4v1702305033852!5m2!1sar!2seg" width="600" height="450" style={{ border: 0 }}  loading="lazy" ></iframe>
        </section>
        </>
    )
}

























