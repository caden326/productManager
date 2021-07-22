import React,{useState, useEffect} from 'react'
import axios from 'axios';
import { navigate } from '@reach/router';
import { Link } from '@reach/router';

const OneProduct = (props) =>{
    
    const [oneProduct,setOneProduct] = useState({})
    useEffect(()=>{
        axios.get (`http://localhost:8000/api/products/find/${props._id}`)
        .then(res => {
            console.log("got one++++++++++++++++")
            console.log(res.data.products)
            setOneProduct(res.data.products)
        })
        .catch(err=>console.log("goof",err))
    },[])

    const DeleteProduct = (event)=>{
        console.log("removing product")
        axios.delete(`http://localhost:8000/api/products/delete/${props._id}`)
        .then(res=> {
            console.log("still tryna remove a product")
            console.log(res)
            navigate("/")
        })
        .catch(err => console.log("delete handler machine broke"))
    }

    return (
        <div>
            <a href="/" className="btn btn-dark m-2">home</a>
            <h4>Title: {oneProduct.title} </h4>
            <h4>Description: {oneProduct.description} </h4>
            <h4>Price: ${oneProduct.price} </h4>
            <Link to={`/api/edit/${props._id}`} className="btn btn-warning m-2">Edit</Link>
            <button onClick={DeleteProduct} className="btn btn-danger">Delete</button>
        </div>
    );
}










export default OneProduct


