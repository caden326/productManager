import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { Link } from '@reach/router';



const AllProducts = () => {

    const [allproducts, setallproducts] = useState([])
    const [deleteclicked, setDeleteClicked] = useState(false)

    useEffect(() => {

        axios.get("http://localhost:8000/api/products/")
            .then(res => {
                console.log('logging the stuff', res)
                setallproducts(res.data.products)

            })
            .catch(err => console.log('your axios goofed', err))


    }, [deleteclicked])

    const DeleteOneProduct = (event, productId) =>{
        console.log("doing my best to delete the product")
        console.log(productId)
        axios.delete(`http://localhost:8000/api/products/delete/${productId}`)
        .then(res =>{
            console.log(res)
            setDeleteClicked(!deleteclicked)


    })
    .catch(err=> console.log("delete thing broke",err))
}


    return (
        <div>
            <h1>All Products</h1>

            {
                allproducts.map((p,i) => {
                    return <div key={i} className="card">
                        <div className="card-body">
                            <h4 className="card-title">{p.title}</h4>
                            <Link to={`/api/product/${p._id}`} className="btn btn-dark" >View</Link>
                            <button onClick={(event)=>DeleteOneProduct(event, p._id)} className="btn btn-danger m-2">Delete</button>
                        </div>
                    </div>
                })
            }
        </div>
    );
}

export default AllProducts


