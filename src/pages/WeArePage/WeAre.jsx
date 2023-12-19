import { useEffect } from "react";
import './WeAre.css'
import { Link } from "react-router-dom";
// import imageWeAre from '../../assets/images/we-are-image.jpg'
import videoWeAre from '../../assets/images/pubg-vid.mp4'

export default function WeAre() {
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

    // Scroll to the top when the component mounts
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
        <section className="title-page scroll-scale">
            <div className="container">
                <h3>من نحن</h3>
                <ul>
					<li>
						<Link to="/home">الرئيسية</Link>
					</li>
					<li>
                        <span>من نحن</span>
					</li>
				</ul>
            </div>
        </section>
        
        <section className="about-inner">
            <div className="container">
                <div className="row">
                    <div className="col-xs-12 col-lg-6">
                        <div className="text-about scroll-right">
                            <h3>من نحن</h3>
                            <p className='info'>تعتبر مطاعم ومطابخ بابجي من أفضل وأشهر مطاعم البروست فى مصر 
                            والتى تقوم بتقديم مختلف الاكلات وقد اكتسبت ثقة عملائها من خلال :
                            </p>
                            <div className='bio'>
                                <ul>
                                    <li>اختيار أفضل المواد المستخدمة فى عملية تحضير الطعام .</li>
                                    <li>العناية الفائقة بالجودة والنظافة وتقديم الطعام الصحي .</li>
                                    <li>التميز فى خدمة العملاء والإعتماد على امهر الخبرات .</li>
                                    <li>تدريب كوادرنا البشرية العاملة فى المطاعم .</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-xs-12 col-lg-6">
                        <div className="img-about video-content scroll-scale">
                            {/* <img src={imageWeAre} alt="img-rroduct" /> */}
                            <video controls autoPlay muted width="100%">
                                <source src={videoWeAre} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </div>
                </div>
            </div>
        </section>


        </>
    )
}
