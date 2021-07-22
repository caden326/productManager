import React, { useState } from 'react';
import axios from 'axios'
import AllProducts from './allProducts';

const CreateProducts = () => {
    const [productform, setproductform] = useState({
        title:"",
        price:"",
        description:""
    })


    const onChangehandler = (event) =>{
        setproductform({
            ...productform,
            [event.target.name]: event.target.value
        })
    }


    const onSubmitHandler = (event)=>{
        // event.preventDefault();
        axios.post("http://localhost:8000/api/Products/new/", productform)
        .then(res =>{
            console.log("***************************")
            console.log(res)
        })
        .catch(err => {
            console.log("your submit form has an errorr", err)
        })
    }

    

    return (
    <div className="container">

        <form onSubmit={onSubmitHandler}>

            <div className="form-group row">
                <label className="col-sm-2 col-form-label">Title</label>
                <div className="col-sm-10">
                    <input onChange= {onChangehandler} type="text" name="title" className="form-control" id=""/>
                </div>
            </div>

            <br/>

            <div className="form-group row">
                <label className="col-sm-2 col-form-label">Price</label>
                <div className="col-sm-10">
                    <input onChange= {onChangehandler} type="number" name="price" className="form-control" id=""/>
                </div>
            </div>

            <br/>

            <div className="form-group row">
                <label className="col-sm-2 col-form-label">Description</label>
                <div className="col-sm-10">
                    <textarea onChange= {onChangehandler} className="form-control" name="description" id="" rows="3"></textarea>
                </div>
            </div>

            <br/>

            <input className="btn btn-dark" type="submit" value="Add Product "/>

        </form>

        <br/>
        <AllProducts/>

    </div>
    )
}

export default CreateProducts

