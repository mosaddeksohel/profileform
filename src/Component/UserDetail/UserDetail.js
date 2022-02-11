import { Col, Container, Row } from 'react-bootstrap';
import './userDetai.css'

const UserDetail = ({ user }) => {
    const { gender, name, Bkash, Nagad, pcountry, pdisctric, ccountry, cdistrict, pstreet, cstreet } = user;
    return (
        <div>
            <Container>
                <h2 className="profile">My Profile</h2>
                <Col>
                    <div>
                        <h4>Full Name</h4>
                        <p>{name}</p>
                        <h4>Bkash: {Bkash}</h4>
                        <h4>Nagad: {Nagad}</h4>
                        <p>Gender{gender}</p>
                    </div>

                </Col>
                <Row>
                    <h2>Permanent Address</h2>
                    <div className='details'>
                        <div>
                            <h4>{pcountry}</h4>
                            <p>Bangladesh</p>
                        </div>
                        <div>
                            <h4>District</h4>
                            <p>{pdisctric}</p>
                        </div>
                        <div>
                            <h4>Street</h4>
                            <p>{pstreet}</p>
                        </div>

                    </div>

                </Row>
                <Row>
                    <h2>Present Address</h2>
                    <div className='details'>

                        <div>

                            <h4>Country</h4>
                            <p>{ccountry}</p>
                        </div>
                        <div>

                            <h4>District</h4>
                            <p>{cdistrict}</p>
                        </div>
                        <div>
                            <h4>Street</h4>
                            <p>{cstreet}</p>
                        </div>

                    </div>
                </Row>

            </Container>
        </div>
    );
};

export default UserDetail;