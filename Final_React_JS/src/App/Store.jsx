import { configureStore } from "@reduxjs/toolkit"
import Api from "../Feature/APISlice"

export const store = configureStore({
    reducer: {
        apiKey: Api
    }
})
