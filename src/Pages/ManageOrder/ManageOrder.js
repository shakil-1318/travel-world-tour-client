import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Footer from '../Shared/Footer/Footer';


const ManageOrder = () => {
    const [orders, setOrders] = useState([])
    const [status, setStatus] = useState('');

    const handleStatus = (e) => {
        setStatus(e.target.value);
    }
    const handleUpdate = (id) => {
        fetch(`http://localhost:5000/updateStatus/${id}`, {
            method: "PUT",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({ status }),
        });

        alert('approved successfully');
    };

    //   all orders
    useEffect(() => {
        fetch(`http://localhost:5000/allOrders`)
            .then(res => res.json())
            .then(data => {
                setOrders(data)
            })
    }, [])

    // handle delete
    const handleDelete = (id) => {
        const procceed = window.confirm('are you sure want to delete?');

        if (procceed) {
            fetch(`http://localhost:5000/delete/${id}`, {
                method: "DELETE",
            })
                .then(res => res.json())
                .then(data => {

                    if (data.deletedCount) {
                        alert('Delete')
                        const remaining = orders.filter(order => order._id !== id)
                        setOrders(remaining)
                    }
                })
        }

    }

    return (
        <div className='container'>
            <h1 className='text-center m-3'>My All Orders {orders.length}</h1>
            <div className='row d-flex justify-content-center align-items-center'>
                {
                    orders.map(order => (
                        <div className="col-lg-4" key={order._id}>
                            <div className="card mb-3"  >
                                <div className="row g-0">
                                    <div className="col-md-4">
                                        <img src={order?.image} class="img-fluid rounded-start" alt="..." />
                                    </div>
                                    <div className="col-md-8">
                                        <div className="card-body">
                                            <h5 className="card-title">{order?.tour}</h5>
                                            <p className="card-text">{order?.description}</p>
                                            <input
                                                className='m-2'
                                                onChange={handleStatus}
                                                type="text"
                                                defaultValue={order.status}
                                            />
                                            <br />
                                            <Button onClick={() => handleDelete(order?._id)} variant="danger">DELETE</Button>
                                            <Button className='ms-3' onClick={() => handleUpdate(order._id)} variant="primary">update</Button>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div >
    );
};

export default ManageOrder;