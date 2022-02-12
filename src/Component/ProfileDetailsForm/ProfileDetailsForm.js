import React from 'react';
import './ProfileDetailsForm.css'
import img from './../../image/1.jpg'
import { Col, Container, Row } from 'react-bootstrap';

const ProfileDetailsForm = () => {
    return (
        <div className='form'>
            <Container>
                <div className='title-top'>
                    <h1>OSA E-commerce & Affiliate</h1>
                    <h1>Marketing Ltd.</h1>
                    <h5>Email: support@osa100pay.com, Web: osa100pay.com</h5>
                </div>
                <div className='form-body'>
                    <div className=''>
                        <Row>
                            <Col xs={8}>
                                <div className='col-10"'>
                                    <p>Name: Sohel Rana Pramanik</p>
                                    <p>Son of / Daughter of: Md. Dulal Hossain Pramanik</p>
                                    <div className='details'>
                                        <p>Date of birth: 16.11.1996 </p>
                                        <p>Sex: Male /Female</p>
                                    </div>
                                    <div className='details'>
                                        <p>Mobile: 01773812391</p>
                                        <p>Phone: 01773812391</p>
                                    </div>
                                    <p>E-mail: tanjim.sohel885@gmail.com</p>
                                </div>
                            </Col>
                            <Col sx={2}>

                                <img className="img img-fluid" src={img} alt="" srcset="" />

                            </Col>
                        </Row>

                    </div>
                    <Row>
                        <p>Current Address: 151/1, A/4, West Razabazar, Farmgate, Dhaka - 1215</p>
                        <p>Permanent Address: Ekarchali, Ekarchali, Taragonj, Rangpur - 5420</p>
                        <div className='sign'>
                            <p>Trade License: _______________</p>
                            <p>User Id (Optional):____________</p>
                        </div>
                        <p>Reference Id (Optional):___________</p>
                        <div className='sign-item'>
                            <p className='applicant'>Signature of Applicant</p>
                            <p className='director'>Signature of Director</p>
                        </div>
                        <div>
                            <h4 className='title-conditions'>Terms and Conditions</h4>
                            <div className='warning'>
                                <li>Only one Franchise in one district.</li>
                                <li>If a user complains of a franchise, the company will not take any action.</li>
                                <li>The minimum time limit for canceling your franchise is 6 months.</li>
                                <li>One month prior to canceling your franchise The company must be notified.</li>
                                <li>By the franchisee Order products will be received within 10 days.</li>
                                <li>You must pay in full when you place the order.</li>
                                <li>The company will return the product within 15 days in case of any damage to the product.</li>
                                <li> Must be complete the trade license of the franchise office within 1 month.</li>
                            </div>
                        </div>
                    </Row>
                </div>
            </Container>



        </div >
    );
};

export default ProfileDetailsForm;