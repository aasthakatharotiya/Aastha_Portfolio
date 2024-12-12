import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteData, fetchCart, updateData } from '../Feature/APISlice';
import { useState } from 'react';

export default function AddToCart() {

    const dispatch = useDispatch();
    const AddToCart = useSelector((state) => state.apiKey.cart);

    const [cartItems, setCartItems] = useState([])
    const [showPopUp, setshowPopUp] = useState(false)
    const [product, setProduct] = useState(null)

    const [newImage, setNewImage] = useState("")
    const [newTitle, setNweTitle] = useState("")
    const [newPrice, setNewPrice] = useState("")

    useEffect(() => {
        dispatch(fetchCart())
    }, [dispatch])

    useEffect(() => {
        setCartItems(AddToCart)
    }, [AddToCart])


    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setNewImage(reader.result); // Set the image as base64 data URL
            };
            reader.readAsDataURL(file); // Convert the image to base64
        }
    };

    // const handleDelete = async (id) => {
    //     await axios.delete(`http://localhost:5000/Cart/${id}`)
    //     setCartItems(cartItems.filter((item) => item.id !== id))
    // }

    const handleDelete = (id) => {
        dispatch(deleteData(id))
    }

    const handleEdit = (id) => {
        // dispatch()
        const product = cartItems.find((item) => item.id === id)
        setProduct(product)
        setshowPopUp(true)
    }

    const handleCancel = () => {
        setshowPopUp(false)
    }


    const ImageInput = () => {
        let Image_Input = document.getElementById("Image_Input")
        Image_Input.style.display = "block"

        let Title_Input = document.getElementById("Title_Input")
        Title_Input.style.display = "none"

        let Price_Input = document.getElementById("Price_Input")
        Price_Input.style.display = "none"

        let folder_Input = document.getElementById("folder_Input")
        folder_Input.style.display = "none"

        let img_btn = document.getElementById("img_btn")
        img_btn.style.backgroundColor = "rgb(255, 0, 115)"
        img_btn.style.border = "none"

        let title_btn = document.getElementById("title_btn")
        title_btn.style.background = "none"
        title_btn.style.border = "1px solid"

        let price_btn = document.getElementById("price_btn")
        price_btn.style.background = "none"
        price_btn.style.border = "1px solid"

        let folder_btn = document.getElementById("folder_btn")
        folder_btn.style.background = "none"
        folder_btn.style.border = "1px solid"
    }

    const TitleInput = () => {
        let Image_Input = document.getElementById("Image_Input")
        Image_Input.style.display = "none"

        let Title_Input = document.getElementById("Title_Input")
        Title_Input.style.display = "block"

        let Price_Input = document.getElementById("Price_Input")
        Price_Input.style.display = "none"

        let folder_Input = document.getElementById("folder_Input")
        folder_Input.style.display = "none"

        let img_btn = document.getElementById("img_btn")
        img_btn.style.background = "none"
        img_btn.style.border = "1px solid"

        let title_btn = document.getElementById("title_btn")
        title_btn.style.backgroundColor = "rgb(255, 0, 115)"
        title_btn.style.border = "none"

        let price_btn = document.getElementById("price_btn")
        price_btn.style.background = "none"
        price_btn.style.border = "1px solid"

        let folder_btn = document.getElementById("folder_btn")
        folder_btn.style.background = "none"
        folder_btn.style.border = "1px solid"
    }

    const PriceInput = () => {
        let Image_Input = document.getElementById("Image_Input")
        Image_Input.style.display = "none"

        let Title_Input = document.getElementById("Title_Input")
        Title_Input.style.display = "none"

        let Price_Input = document.getElementById("Price_Input")
        Price_Input.style.display = "block"

        let folder_Input = document.getElementById("folder_Input")
        folder_Input.style.display = "none"

        let img_btn = document.getElementById("img_btn")
        img_btn.style.background = "none"
        img_btn.style.border = "1px solid"

        let title_btn = document.getElementById("title_btn")
        title_btn.style.background = "none"
        title_btn.style.border = "1px solid"

        let price_btn = document.getElementById("price_btn")
        price_btn.style.backgroundColor = "rgb(255, 0, 115)"
        price_btn.style.border = "none"

        let folder_btn = document.getElementById("folder_btn")
        folder_btn.style.background = "none"
        folder_btn.style.border = "1px solid"
    }

    const FolderInput = () => {
        let Image_Input = document.getElementById("Image_Input")
        Image_Input.style.display = "none"

        let Title_Input = document.getElementById("Title_Input")
        Title_Input.style.display = "none"

        let Price_Input = document.getElementById("Price_Input")
        Price_Input.style.display = "none"

        let folder_Input = document.getElementById("folder_Input")
        folder_Input.style.display = "block"

        let img_btn = document.getElementById("img_btn")
        img_btn.style.background = "none"
        img_btn.style.border = "1px solid"

        let title_btn = document.getElementById("title_btn")
        title_btn.style.background = "none"
        title_btn.style.border = "1px solid"

        let price_btn = document.getElementById("price_btn")
        price_btn.style.background = "none"
        price_btn.style.border = "1px solid"

        let folder_btn = document.getElementById("folder_btn")
        folder_btn.style.backgroundColor = "rgb(255, 0, 115)"
        folder_btn.style.border = "none"
    }

    const handleSave = () => {
        const updatedProduct = {
            ...product,
            image: newImage || product.image,
            title: newTitle || product.title,
            price: newPrice || product.price
        };

        dispatch(updateData(updatedProduct))

        setProduct(null)
        setNewImage("")
        setNweTitle("")
        setNewPrice("")
        setshowPopUp(false)
    }

    return (
        <div>
            <center>
                <h1>Add To Cart</h1>
            </center>

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
                <Link to="/Electronic">
                    <button>Electronic</button>
                </Link>
                <button style={{ backgroundColor: "#1d2de5", opacity: "100%" }}>Add To Cart</button>
            </div>

            <div className="pr_main add_to_cart">
                {cartItems.length > 0 ? (
                    cartItems.map((e, i) => (
                        <div key={i} className="pr_div Cart_main add_to_cart">
                            <div className="right_fix_btn">
                                <button className='quantity_btn'>{e.quantity}</button>
                            </div>
                            <div className="pr_img">
                                <img src={e.image} alt="" />
                            </div>
                            <h2>{e.title}</h2>
                            <div style={{ width: "90%" }} className="flex_text">
                                <h3>$ {e.price}</h3>
                                <h3><del>$ {e.del}</del></h3>
                            </div>
                            <div className="btn_flex">
                                <button className='edit' onClick={() => handleEdit(e.id)}>Edit</button>
                                <button className='delete' onClick={() => handleDelete(e.id)}>Delete</button>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>No items in the cart</p>
                )}
            </div>

            {
                showPopUp && product && (
                    <div className="popup">
                        <div className="popup_content">
                            <div className="cart_img">
                                <img src={product.image} alt="" />
                            </div>
                            <h2>{product.title}</h2>
                            <h3>$ {product.price}</h3>

                            <center>
                                <input id='Image_Input' style={{ display: "none" }} type="text" placeholder='Enter Image URL 🖼️...' onChange={(e) => setNewImage(e.target.value)} />
                                <input id='Title_Input' style={{ display: "none" }} type="text" placeholder='Enter Product Name 🏷️...' onChange={(e) => setNweTitle(e.target.value)} />
                                <input id='Price_Input' style={{ display: "none" }} type="text" placeholder='Enter Product Price 💵...' onChange={(e) => setNewPrice(e.target.value)} />
                                <input id="folder_Input" className="file_input" style={{ display: "none" }} type="file" accept="image/*" onChange={handleImageChange} />
                            </center>

                            <div className="emoji_btn">
                                <button id='img_btn' onClick={ImageInput}>🖼️</button>
                                <button id='title_btn' onClick={TitleInput}>🏷️</button>
                                <button id='price_btn' onClick={PriceInput}>💲</button>
                                <button id='folder_btn' onClick={FolderInput}>📂</button>
                            </div>
                            <br />
                            <div className="btn_flex">
                                <button className='save' onClick={handleSave}>Save</button>
                                <button className='cancel' onClick={handleCancel}>Cancle</button>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    );
}
