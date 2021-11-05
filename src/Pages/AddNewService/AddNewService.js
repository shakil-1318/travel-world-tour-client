import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import Footer from '../Shared/Footer/Footer';




// add new services
const AddNewService = () => {

    const { register, handleSubmit, reset, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data);
        axios.post('http://localhost:5000/services', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Successfully addedded')
                    reset();
                }
            })
    }

    return (
        <>
            <div className='booking-container container'>
                <h1>Add New Service</h1>
                <div className="form-container">
                    <div className='row w-75 mx-auto'>
                        <div className='col-lg-12'>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <input
                                    {...register("tour")}
                                    placeholder='tourname'
                                    className="p-2 m-2 w-100"
                                />
                                <br />

                                <input
                                    {...register("date")}

                                    type="date"
                                    className="p-2 m-2 w-100"
                                />
                                <br />
                                <textarea
                                    {...register("description")}
                                    placeholder='description'
                                    className="p-2 m-2"
                                    className="p-2 m-2 w-100"
                                />
                                <br />

                                <input
                                    {...register("price", { required: true })}
                                    placeholder='price'
                                    className="p-2 m-2"
                                    className="p-2 m-2 w-100"
                                />
                                <br />
                                <input
                                    {...register("img", { required: true })}
                                    placeholder='img-link'
                                    className="p-2 m-2"
                                    className="p-2 m-2 w-100"
                                />
                                <br />

                                {errors.exampleRequired && <span>This field is required</span>}

                                <input
                                    type="submit"
                                    value="Add Now"
                                    className="btn btn-success w-50"
                                />
                            </form>
                        </div>
                    </div>
                </div>

            </div>
            <Footer></Footer>
        </>
    );
};

export default AddNewService;