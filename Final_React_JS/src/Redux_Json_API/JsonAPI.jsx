import React from 'react'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addToCart, fetchApi, fetchCart } from '../Feature/APISlice'
import { Link } from 'react-router-dom'

export default function JsonAPI() {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchApi())
    }, [])

    const record = useSelector((state) => {
        return state.apiKey
    })

    const handleAddToCart = (item) => {
        dispatch(addToCart(item))

        alert("Your Product Was Add to Cart 🛍️🛒... Thanks for your support! ❣️😄")
    }

    return (
        <div>
            <center><h1>JsonAPI</h1></center>

            <Link to="/">
                <button className='sign_in_fix'>Sign In</button>
            </Link>

            <div className="nav_btn">
                <button style={{ backgroundColor: "#1d2de5", opacity: "100%" }}>All</button>
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
                <Link to="/Electronic">
                    <button>Electronic</button>
                </Link>
                <Link to="/Cart">
                    <button>Add To Cart</button>
                </Link>
            </div>

            <div className="pr_main">
                {
                    record.data &&
                    record.data.map((e, i) => (
                        <div key={i} className='pr_div'>
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
