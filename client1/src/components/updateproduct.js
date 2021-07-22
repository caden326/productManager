import { navigate } from '@reach/router'
import axios from 'axios'
import React, {useEffect, useState} from 'react'


const UpdateProduct = (props) => {
    const [oneProduct,setOneProduct] = useState({
        title:"",
        price:"",
        description:""
    })


    useEffect(() =>{
        axios.get (`http://localhost:8000/api/products/find/${props._id}`)
        .then(res=> {
            console.log(res.data.products)
            setOneProduct(res.data.products)
        })
        .catch(err=> console.log("axios error",err))

    },[])

    const changeHandler = (event) => {
        setOneProduct({
            ...oneProduct,
            [event.target.name]:event.target.value
        })
    }
    
    const submitHandler = (event) =>{
        event.preventDefault();
        axios.put(`http://localhost:8000/api/products/update/${props._id}`, oneProduct)
        .then(res => {
            console.log(res)
        })
        .catch(err => console.log('submit goof',err))
        navigate("/")
    }

    return (
        <div className="container">
            <a href="/" className="btn btn-dark m-2">home</a>

            <form onSubmit={submitHandler}>

                <div className="form-group row">
                    <label className="col-sm-2 col-form-label">Title</label>
                    <div className="col-sm-10">
                        <input onChange={changeHandler}  type="text" name="title" className="form-control" id="" value={oneProduct.title} />
                    </div>
                </div>

                <br />

                <div className="form-group row">
                    <label className="col-sm-2 col-form-label">Price</label>
                    <div className="col-sm-10">
                        <input onChange={changeHandler}  type="number" name="price" className="form-control" id="" value={oneProduct.price} />
                    </div>
                </div>

                <br />

                <div className="form-group row">
                    <label className="col-sm-2 col-form-label">Description</label>
                    <div className="col-sm-10">
                        <textarea onChange={changeHandler} className="form-control" name="description" id="" rows="3" value={oneProduct.description}></textarea>
                    </div>
                </div>

                <br />

                <input className="btn btn-dark" type="submit" value="Edit Product" />

            </form>
        </div>
    )
}


export default UpdateProduct