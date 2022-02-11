import React, { useEffect, useState } from 'react';
import UserDetail from '../UserDetail/UserDetail';

const UserData = () => {
    const [users, setUser] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/profile')
            .then(res => res.json())
            .then(data => setUser(data))
    }, [])
    return (

        <div>
            {
                users.map(user => <UserDetail
                    key={user._id}
                    user={user}
                >
                </UserDetail>)
            }
        </div>
    );
};

export default UserData;