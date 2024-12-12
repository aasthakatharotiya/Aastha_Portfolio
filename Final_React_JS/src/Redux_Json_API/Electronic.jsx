import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { addToCart } from '../Feature/APISlice'

export default function Electronic() {

    const dispatch = useDispatch()

    const record = useSelector((state) => {
        return state.apiKey
    })

    const Product = record.data.filter(item => item.category === "electronic")

    const handleAddToCart = (item) => {
        dispatch(addToCart(item))

        alert("Your Product Was Add to Cart 🛍️🛒... Thanks for your support! ❣️😄")
    }

    return (
        <div>
            <center><h1>Electronic</h1></center>

            <Link to="/">
                <button className='sign_in_fix'>Sign In</button>
            </Link>

            <div className="nav_btn">
                <Link to="/All">
                    <button>All</button>
                </Link>
                <Link to="/Men">
                    <button>Men</button>
                </Link>
                <Link to="/Women">
                    <button>Women</button>
                </Link>
                <Link to="/Food">
                    <button>Food</button>
                </Link>
                <Link to="/Beauty">
                    <button>Beauty</button>
                </Link>
                <Link to="/Gift">
                    <button>Gift</button>
                </Link>
                <button style={{ backgroundColor: "#1d2de5", opacity: "100%" }}>Electronic</button>
                <Link to="/Cart">
                    <button>Add To Cart</button>
                </Link>
            </div>

            <div className="pr_main">
                {
                    Product &&
                    Product.map((e, i) => (
                        <div key={i} className='pr_div electronic'>
                            <div className="pr_img">
                                <img src={e.image} alt="" />
                            </div>
                            <h2>{e.title}</h2>
                            <div className="flex_text">
                                <h3>$ {e.price}</h3>
                                <h3><del>$ {e.del}</del></h3>
                            </div>
                            <center>
                                <button onClick={() => handleAddToCart(e)}>Add To Cart</button>
                            </center>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
