import { Carousel, Button,Container,Row,Col } from 'react-bootstrap';
// import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import i1 from './img/home_img.jpg';
import i2 from './img/backgroundimg.jpg';
import i3 from './img/mainback.png';
import Footer from './Footer.js';
import { MdHighlight, MdAddShoppingCart, MdDesignServices } from "react-icons/md";
import { FaIndustry } from "react-icons/fa";
import { IoIosRocket } from "react-icons/io";
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { GiTalk } from "react-icons/gi";
import { GoDeviceMobile } from "react-icons/go";
import { GrUserSettings } from "react-icons/gr";




import mycs from './Mycss.module.css';
import { HomeOutlined, AudioOutlined, SettingOutlined, AreaChartOutlined, MinusOutlined, UsergroupAddOutlined, UserOutlined, DollarCircleOutlined, FileDoneOutlined, FireOutlined, SearchOutlined, DashOutlined, SlackOutlined, WindowsOutlined } from '@ant-design/icons';

// import { Button } from 'antd';

function Home() {
    return (
        <>

            <Container fluid>
                <Row>
                    <Col style={{padding:"0"}}>
                        <img src={i1} style={{ height: "500px", width: "100%" }} />
                        <div className={mycs.maini}>
                            <div class="col-6 d-none d-lg-block">
                                <h5 className={mycs.imgq1}>Shivaay infotech</h5>
                            </div>
                            <div className={mycs.imgq2}>The heart and soul of a company is creativity and innovation</div>
                            <Button className={mycs.b1} variant="outline-primary">Employers</Button>{' '}
                            <Button className={mycs.b2} variant="outline-primary">Professionals</Button>{' '}
                        </div>
                    </Col>
                </Row>
            </Container>


            <div className={mycs.vaho}>
                <div className={mycs.a1}>How We Grow Your Business</div>
                <div className={mycs.foricon}>
                    <DashOutlined className={mycs.icon1} />
                    <SlackOutlined className={mycs.icon2} />
                    <DashOutlined className={mycs.icon1} />
                </div>

                <div class="container">
                    <div class="row">
                        <div class="col-3">
                            <h1 className={mycs.digit}>1</h1>
                            <div className={mycs.foricon1}><HomeOutlined className={mycs.apple} /></div>
                            <b>CREAT YOUR BUSINESS WEBSITE(E-COMMERCE STORE)</b>
                            <div className={mycs.delet}></div>

                            <div>It's first step to create a business website with <a style={{ color: "blue" }}>Shivaay Infotech.</a>just contact us,Tell your bussiness details & requirement.Your website live within few days.</div>
                        </div>
                        <div class="col-3">
                            <h1 className={mycs.digit}>2</h1>
                            <div className={mycs.foricon1}><FileDoneOutlined className={mycs.apple} /></div>
                            <b>UPDATE THE WEBSITE(PRODUCT)REGULARLY</b>
                            <div className={mycs.delet}></div>
                            <div>Our process and track always remain the same for all customers.We build relationships!</div>
                        </div>
                        <div class="col-3">
                            <h1 className={mycs.digit}>3</h1>
                            <div className={mycs.foricon1}><SearchOutlined className={mycs.apple} /></div>
                            <b>Time is the most valuable thing a man can spend.</b>
                            <div className={mycs.delet}></div>
                            <div>They always say time changes things, but you actually have to change them yourself.</div>

                        </div>
                        <div class="col-3">
                            <h1 className={mycs.digit}>4</h1>
                            <div className={mycs.foricon1}><DollarCircleOutlined className={mycs.apple} /></div>
                            <b>PROMOTE WEBSITE TO GET EVEN MORE BUSINESS</b>
                            <div className={mycs.delet}></div>
                        </div>
                    </div>
                </div>
            </div>


            <div className={mycs.key}>
                <div class="container">
                    <div class="row">
                        <div class="col-6">
                            <div><MinusOutlined style={{ fontSize: "50px", color: "blue" }} /><b style={{ color: "blue" }}>ABOUT SHIVAAY INFOTECH</b></div>
                            <h1 style={{ color: "blue" }}>WHO ARE WE?</h1>
                            <p>From the creation of your e-commerce website or app to its promotion and marketing, we facilitate you during every step to take your business to the next stage. Our expertise and unmatched enthusiasm for providing our clients with the best development and digital marketingservices differentiates us from the rest of the crowd. When you partner with Opulasoft, you are in safe hands.</p>
                            <p>Upon complete analysis of your requirements, our team will come up with solutions that bring your services/products to the limelight, winnin a mass of ambassadors who love what you do. Your specifications are followed with great care, so the end product exceeds your expectations.</p>
                            <p>Do you not have a clear idea of how your website should look or where to start? Our team of highly talented individuals are here to guide you through the process.</p>
                        </div>
                        <div class="col-6 d-none d-lg-block">
                            <img src={i3} className={mycs.room}></img>
                        </div>
                    </div>
                </div>
            </div>


            <div className={mycs.copy5}>
                <div class="container ">
                    <div class="row">
                        <div class="col-3"><FireOutlined style={{ fontSize: "40px", marginRight: "10px", marginTop: "60px" }} />70+ Completed Prejects</div>
                        <div class="col-3"><AudioOutlined style={{ fontSize: "40px", marginRight: "10px", marginTop: "60px" }} />Over 200 Conferences</div>
                        <div class="col-3"><UsergroupAddOutlined style={{ fontSize: "40px", marginRight: "10px", marginTop: "60px" }} />50+ Happy Clients</div>
                        <div class="col-3"><UserOutlined style={{ fontSize: "40px", marginRight: "10px", marginTop: "60px" }} />2014 Shivaay Was born</div>
                    </div>
                </div>
            </div>

            <div className="container"  >
                <div className="row">
                    <div className="col-3">
                        <div className={mycs.one_1}>
                            <i><MdHighlight style={{ fontSize: "50px" }} /></i>
                            <h3>We are just </h3>
                            <h3>Creative</h3>
                            <p>We serving high quality standard mobile app of any category. We have worked with diverse brands, organizations, start-ups and individuals to create powerful apps from excellent idea.</p>
                        </div>
                    </div>
                    <div className="col-3" style={{ marginTop: "70px" }}>
                        <div className={mycs.one_1}>
                            <i><FaIndustry style={{ fontSize: "50px" }} /></i>
                            <h3>Your All-In-One</h3>
                            <h3>Solution</h3>
                            <p>We're a leading Internet Digital Marketing Company who offers SEO, Paid Search, Social Media, Consulting Lead Generation and Web Design Services.</p>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className={mycs.one_1}>
                            <i><IoIosRocket style={{ fontSize: "50px" }} /></i>
                            <h3>We Serving Best</h3>
                            <h3>Services</h3>
                            <p>We design professional looking, Our designs are search engine and user friendly. We deliver amazing results and web app solutions that fit each of our customers.</p>
                        </div>
                    </div>
                    <div className="col-3" style={{ marginTop: "70px" }}>
                        <div className={mycs.one_1}>
                            <i><GiTalk style={{ fontSize: "50px" }} /></i>
                            <h3>We Provide</h3>
                            <h3>Solution</h3>
                            <p>We provides always our best services for our clients and always try to achieve our client's trust and satisfaction.</p>
                        </div>
                    </div>

                </div>

            </div>

            <div style={{ textAlign: "center" }}>
                <h2><b style={{ color: "blue", textAlign: "center" }}>Our Services</b></h2>
                <pre style={{ width: "190px", marginLeft: "43%", border: "2px solid blue" }}></pre>
                <p style={{ color: "grey" }}>
                    We build apps, responsive websites, bots—any digital product that interacts with users for the world's leading companies. We provides services such as<b>Web Desig, Mobile Apps Development, eCommerce Website, SEO Services in Surat.</b>We cultivate expertise in every stage of product creation, resulting in extraordinary digital experiences.</p>
            </div>


            <div className="container" >
                {/* FIRST ROW OF CARD */}
                <div className="row gx-5">
                    <div className="col-6" >
                        <div style={{ backgroundColor: "blue", border: "2px solid black", borderRadius: "20px" }}>
                            <div className="row">
                                <div className="col-4" style={{ color: "white", textAlign: "center" }}>
                                    <i><HiOutlineDesktopComputer style={{ fontSize: "100px", marginTop: "30px" }} /></i>
                                </div>
                                <div className="col-8" style={{ color: "white", padding: "30px" }}>
                                    <h3>Web Design &</h3>
                                    <h3>Development</h3>
                                    <p>A well-designed website generally will receive many visitors, and one method to attract visitors is search engine optimization.We have experience in developing a wide variety of Web Applications</p>
                                    <b>Read more</b>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-6" >
                        <div style={{ backgroundColor: "blue", border: "2px solid black", borderRadius: "20px" }}>
                            <div className="row">
                                <div className="col-4" style={{ color: "white", textAlign: "center" }}>
                                    <i><MdAddShoppingCart style={{ fontSize: "100px", marginTop: "30px" }} /></i>
                                </div>
                                <div className="col-8" style={{ color: "white", padding: "30px" }}>
                                    <h3>E-Commerce/Web</h3>
                                    <h3>Development</h3>
                                    <p>We providing next generation eCommerce website design and development solution. We're ready to take your business to the next level and launch your online shop.</p>
                                    <b>Read more</b>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                {/* 
                <div className="row">
                    <div className="col-6" style={{ backgroundColor: "blue", border: "2px solid black", borderRadius: "20px" }}>
                        <div className="container">
                            <div className="row">
                                <div className="col-4" style={{ color: "white", textAlign: "center" }}>
                                    <i><GoDeviceMobile style={{ fontSize: "100px", marginTop: "30px" }} /></i>
                                </div>
                                <div className="col-8" style={{ color: "white", padding: "30px" }}>
                                    <h3>Android & iOS Apps</h3>
                                    <h3>Development</h3>
                                    <p>Develop powerful, highly usable iPhone, iPAD, iWatch & android apps that solve business problems, attract users, and reinforce your brand.</p>
                                    <b>Read more</b>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-6" style={{ backgroundColor: "blue", border: "2px solid black", borderRadius: "20px" }}>
                        <div className="container">
                            <div className="row">
                                <div className="col-4" style={{ color: "white", textAlign: "center" }}>
                                    <i><MdDesignServices style={{ fontSize: "100px", marginTop: "30px" }} /></i>
                                </div>
                                <div className="col-8" style={{ color: "white", padding: "30px" }}>
                                    <h3>Creative Designs</h3>

                                    <p>Engaging the experience and expertise of creative designers, we cater wonderful web & graphic designing for web and print media. We translate your vision into brand identity with creative designs.</p>
                                    <b>Read more</b>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>




                <div className="row">
                    <div className="col-6" style={{ backgroundColor: "blue", border: "2px solid black", borderRadius: "20px" }}>
                        <div className="container">
                            <div className="row">
                                <div className="col-4" style={{ color: "white", textAlign: "center" }}>
                                    <i><SettingOutlined style={{ fontSize: "100px", marginTop: "30px"}} /></i>
                                </div>
                                <div className="col-8" style={{ color:"white",padding: "30px" }}>
                                    <h3>Android & iOS Apps</h3>
                                    <h3>Development</h3>
                                    <p>Develop powerful, highly usable iPhone, iPAD, iWatch & android apps that solve business problems, attract users, and reinforce your brand.</p>
                                    <b>Read more</b>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-6" style={{ backgroundColor: "blue", border: "2px solid black", borderRadius: "20px" }}>
                        <div className="container">
                            <div className="row">
                                <div className="col-4" style={{ color: "white", textAlign: "center" }}>
                                    <i><AreaChartOutlined style={{ fontSize: "100px", marginTop: "30px" }} /></i>
                                </div>
                                <div className="col-8" style={{ color: "white", padding: "30px" }}>
                                    <h3>Creative Designs</h3>

                                    <p>Engaging the experience and expertise of creative designers, we cater wonderful web & graphic designing for web and print media. We translate your vision into brand identity with creative designs.</p>
                                    <b>Read more</b>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="row">
                    <div className={mycs.Row}>
                        <div className="col-3"><li><h2>Web</h2><h2> Designing</h2></li></div>
                        <div className="col-3"><li><h2>Web</h2><h2> Devlopment</h2></li></div>
                        <div className="col-3"><li><h2>Mobile App</h2><h2> Designing</h2></li></div>
                        <div className="col-3"><li><h2>Seo</h2><h2> Marketing</h2></li></div>
                    </div>
                </div>*/}

            </div>




            <div className={mycs.f_u}>
                <b>TECHNOLOGIES  </b>  AND<b>   PLATFORMS </b>  WE WORK WITH
            </div>


            <Footer />
        </>
    );
}
export default Home;