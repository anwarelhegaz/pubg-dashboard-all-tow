import "./CustomerReviews.css"
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import clientImg from '../../assets/images/client.png'
import AnimationObserver from "../AnimationObserver/AnimationObserver";

export default function CustomerReviews() {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
            },
            desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 2
            },
            tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
            },
            mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
            }
        };
    return (
        <section className="customer-reviews">
            <AnimationObserver />
            <div className="container">
                <div className="row">
                    <div className="col-xs-12">
                        <div className="main-header scroll-scale">
                            <h3>
                                اراء العملاء
                            </h3>
                        </div>
                    </div>
                    <div className="col-xs-12">
                        <div className="row ">
                            <div className="col-xs-12 col-lg-6">
                                <div className="img-client scroll-scale">
                                    <img src={clientImg} alt="" />
                                </div>
                            </div>
                            <div className="col-xs-12 col-lg-6">
                            <div className="carosale-customer scroll-right">
                                <Carousel
                                    responsive={responsive}
                                    infinite={true}
                                    autoPlay
                                    autoPlaySpeed={2000}
                                    >
                                    <div className='items-cus'>
                                        <div className='client-block' href="#">
                                            <div className="title-client">
                                                <div className="icon"><span>&quot;</span></div>  
                                                <div className="name-client">احمد حسني</div>
                                            </div>
                                            <div className="body-block">
                                                <p>انا عميل لديهم منذ مدةواكلهم اكثر من رائع.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='items-cus'>
                                        <div className='client-block' href="#">
                                            <div className="title-client">
                                                <div className="icon"><span>&quot;</span></div>  
                                                <div className="name-client">اسامة ابو غزالة</div>
                                            </div>
                                            <div className="body-block">
                                                <p>	مطعم رائع ومميز وكذلك عندهم جودة ممتازة .</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='items-cus'>
                                        <div className='client-block' href="#">
                                            <div className="title-client">
                                                <div className="icon"><span>&quot;</span></div>  
                                                <div className="name-client">محمد رشوان</div>
                                            </div>
                                            <div className="body-block">
                                                <p>المطعم فعلاً رائع،والخدمة ممتازة. بجد تجربة مميزة، ما تترددش في تجربته</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='items-cus'>
                                        <div className='client-block' href="#">
                                            <div className="title-client">
                                                <div className="icon"><span>&quot;</span></div>  
                                                <div className="name-client">محمد الدكروري</div>
                                            </div>
                                            <div className="body-block">
                                                <p> قعدتهم رائعة والأكل بيهز القلب، تجربة فريدة وساحرة. يستحق الزيارة بكل تأكيد</p>
                                            </div>
                                        </div>
                                    </div>
                                </Carousel>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
