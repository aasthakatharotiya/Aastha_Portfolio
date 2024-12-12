import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"

export const fetchApi = createAsyncThunk("fetchApi", async () => {
    let response = await axios.get("http://localhost:5000/item")
    let res = response.data
    return res
})

// export const addToCart = createAsyncThunk("cart", async (item) => {
//     let response = await axios.post("http://localhost:5000/Cart", item)
//     let res = response.data
//     return res
// })

export const addToCart = createAsyncThunk("cart/add", async (product, { getState }) => {
    const { cart } = getState().apiKey
    const existingProduct = cart.find((item) => item.id === product.id)

    const response = existingProduct
        ? await axios.put(`http://localhost:5000/Cart/${existingProduct.id}`, {
              ...existingProduct,
              quantity: existingProduct.quantity + 1,
          })
        : await axios.post("http://localhost:5000/Cart", { ...product, quantity: 1 })

    return response.data
})


export const fetchCart = createAsyncThunk("fetchCart", async () => {
    let response = await axios.get("http://localhost:5000/Cart")
    return response.data
})

export const deleteData = createAsyncThunk("deleteData", async (id) => {
    await axios.delete(`http://localhost:5000/Cart/${id}`)
    return id
})

export const updateData = createAsyncThunk("updateData", async (updateItem) => {
    const response = await axios.put(`http://localhost:5000/Cart/${updateItem.id}`, updateItem)
    return response.data
})

export const Api = createSlice({
    name: "Api",
    initialState: {data: [], loading: true, cart: []},
    reducer: {},

    extraReducers: (builder) => {

        // For API Fetch From db.json 
        builder.addCase(fetchApi.fulfilled, (state, action) => {
            state.loading = false
            state.data = action.payload
        })

        // For Add To Cart Product in Cart to db.json
        builder.addCase(addToCart.fulfilled, (state, action) => {
            state.cart.push(action.payload)
        })

        // For Fetch Cart data From db.json Cart
        builder.addCase(fetchCart.fulfilled, (state, action) => {
            state.cart = action.payload
        })

        // For Delete the Product
        builder.addCase(deleteData.fulfilled, (state, action) => {
            state.cart = state.cart.filter((item) => item.id !== action.payload)
        })

        //For Update the Product
        builder.addCase(updateData.fulfilled, (state, action) => {
            // const index = state.cart.findIndex((item) => item.id === action.payload.id)
            // if(index >= 0){
            //     state.cart[index] = action.payload
            // }
            state.cart = state.cart.map((item) => item.id === action.payload.id ? action.payload : item)
        })
    }
})

export default Api.reducer