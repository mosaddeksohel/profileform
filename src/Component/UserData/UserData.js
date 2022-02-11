import React, { useEffect, useState } from 'react';
import UserDetail from '../UserDetail/UserDetail';

const UserData = () => {
    const [users, setUser] = useState([]);
    useEffect(() => {
        fetch('https://floating-caverns-53221.herokuapp.com/profile')
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