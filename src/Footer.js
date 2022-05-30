import mycs from './Mycss.module.css';
import { MailOutline } from 'antd';
import { FiNavigation } from "react-icons/fi";
import { MdStayCurrentPortrait,MdEmail } from "react-icons/md";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { FiTwitter,FiFacebook } from "react-icons/fi";
import { BsInstagram } from "react-icons/bs";


function Footer(){
    return(
        <>
            <div className="container" className={mycs.fo1}>
                <div className="row" style={{padding:"30px",margin:"0"}}>
                    <div className="col-3">
                        <div>
                            <b style={{paddingLeft:"30px"}}>Website Development</b>
                            <div>
                                <ul style={{listStyle:"none"}}>
                                    <li>Static Website</li>
                                    <li>Dynamic Website</li>
                                    <li>Content Management System</li>
                                    <li>E-commerce Solution</li>
                                </ul>
                            </div>
                        </div>
                        
                    </div>
                    <div className="col-3">
                        <div>
                            <b style={{paddingLeft:"30px"}}>Website Development</b>
                            <div>
                                <ul style={{listStyle:"none"}}>
                                    <li>Android App</li>
                                    <li>Ios App</li>
                                    <li>Hybrid App</li>
                                    
                                </ul>
                            </div>
                        </div>
                        
                    </div>
                    <div className="col-3">
                        <div>
                            <b style={{paddingLeft:"30px"}}>Website Development</b>
                            <div>
                                <ul style={{listStyle:"none"}}>
                                    <li>GST Billing</li>
                                    <li>Accounting Software</li>
                                    <li>Inventory Management</li>
                                    
                                </ul>
                            </div>
                        </div>
                        
                    </div>
                    <div className="col-3">
                        <div>
                            <b style={{paddingLeft:"30px"}}>Website Development</b>
                            <div>
                                <ul style={{listStyle:"none"}}>
                                    <li>Logo Design</li>
                                    <li>UI/UX Design</li>
                                    <li>Banner Design</li>
                                    <li>Branding</li>
                                </ul>
                            </div>
                        </div>
                        
                    </div>

                </div>
                <div className="row" style={{padding:"0 30px",margin:"0"}}>
                    <div className="col-3">
                        <div>
                            <b style={{paddingLeft:"30px"}}>Web Application</b>
                            <div>
                                <ul style={{listStyle:"none"}}>
                                    <li>School Management</li>
                                    <li>Hospital Management</li>
                                    <li>Invenory Management</li>
                                    <li>Custom Web Application</li>
                                </ul>
                            </div>
                        </div>
                        
                    </div>
                    <div className="col-3">
                        <div>
                            <b style={{paddingLeft:"30px"}}>CEO/Digital Marketing</b>
                            <div>
                                <ul style={{listStyle:"none"}}>
                                    <li>SEO,Social Media Marketing</li>
                                    <li>Pay Per Click Management</li>
                                    <li>Hybrid AppGoogle Adwords Management</li>
                                    <li>Facebook Ads Management</li>
                                </ul>
                            </div>
                        </div>
                        
                    </div>
                    <div className="col-3">
                        <div>
                            <b style={{paddingLeft:"30px"}}>Contact Information</b>
                            <div>
                                <ul style={{listStyle:"none"}}>
                                    <li><FiNavigation/>117-Angel Square,</li>
                                    <li>VIP Circle,Uttran</li>
                                    <li>Surat,Gujarat 394105</li>
                                    <li><MdEmail/>info@shivaay.com</li>
                                    
                                </ul>
                            </div>
                        </div>
                        
                    </div>
                    <div className="col-3">
                        <div>
                            <b style={{paddingLeft:"30px"}}>Branch Office</b>
                            <div>
                                <ul style={{listStyle:"none"}}>
                                    <li><FiNavigation/>324,Sagar Complex,Opp</li>
                                    <li>Gangajaliya Talav,Near Jasonath</li>
                                    <li>Chowk,Bhavnagar-364001</li>
                                    <li><MdStayCurrentPortrait/>+918160571990</li>
                                    
                                </ul>
                            </div>
                        </div>
                        
                    </div>

                </div>

                <div className="row" style={{margin:"0",backgroundColor:"#5A5655"}}>
                    <div className="col-6" style={{paddingLeft:"70px",marginTop:"10px"}}>
                        Copyright © 2021 Shivaayinfotech - All rights reserved.
                    </div>
                    <div className="col-6" style={{paddingLeft:"350px"}}>
                    <AiOutlineWhatsApp className={mycs.copy10}/>
                    <FiTwitter  className={mycs.copy10}/>
                    <BsInstagram className={mycs.copy10}/>
                    <FiFacebook className={mycs.copy10}/>  
                    </div>
                </div>
                
            </div>

        </>
    )
}
export default Footer;