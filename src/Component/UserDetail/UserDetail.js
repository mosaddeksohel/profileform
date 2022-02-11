import { Col, Container, Row } from 'react-bootstrap';
import './userDetai.css'

const UserDetail = ({ user }) => {
    const { gender, name, Bkash, Nagad, pcountry, pdistrict, ccountry, cdistrict, pstreet, cstreet } = user;
    return (
        <div>
            <Container>
                <h2 className="profile">My Profile</h2>
                <Col>
                    <div>
                        <h4>Full Name: {name}</h4>
                        <h4>Bkash: {Bkash}</h4>
                        <h4>Nagad: {Nagad}</h4>
                        <h4>Gender: {gender}</h4>
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
                            <p>{pdistrict}</p>
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