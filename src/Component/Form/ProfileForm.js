import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import './form.css'

const ProfileForm = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        axios.post('http://localhost:5000/profile', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('profile updated')
                    reset();
                }

            })

    };



    return (
        <div className='form'>
            <h2>My Profile</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <div className=''>
                        <h4>Your Name</h4>
                        <input {...register("name")} />
                    </div>
                    <div className='items'>
                        <div >
                            <h4>Bkash Number</h4>
                            <input type="number" {...register("Bkash")} />
                        </div >
                        <div>
                            <h4>Nagad Number</h4>
                            <input type="number" {...register("Nagad")} />
                        </div>
                    </div>
                </div>
                <div>
                    <div>
                        <h2>Permanent Address</h2>
                    </div>
                    <div className='items'>
                        <div>
                            <h4>Country</h4>
                            <input {...register("pcountry")} />
                        </div>
                        <div>
                            <h4>District</h4>
                            <input {...register("pdistrict")} />
                        </div>
                        <div>
                            <h4>Street</h4>
                            <input {...register("pstreet")} />
                        </div>
                    </div>
                </div>
                <div>
                    <div>
                        <h2>Present Address</h2>
                    </div>
                    <div className='items'>
                        <div>
                            <h4>Country</h4>
                            <input {...register("ccountry")} />
                        </div>
                        <div>
                            <h4>District</h4>
                            <input {...register("cdistrict")} />
                        </div>
                        <div>
                            <h4>Street</h4>
                            <input {...register("cstreet")} />
                        </div>
                    </div>
                </div>
                <div className='items'>
                    <div>
                        <h4>Sex</h4>
                        <select {...register("gender")}>
                            <option value="female">female</option>
                            <option value="male">male</option>
                            <option value="other">other</option>
                        </select>
                    </div>

                </div>


                <input className='btn' type="submit" />
            </form>
        </div>
    );
};

export default ProfileForm;