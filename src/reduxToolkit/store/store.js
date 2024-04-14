import { configureStore } from "@reduxjs/toolkit";
import { getAllProductsReducer } from "../slices/GetAllProducts";
const Store = configureStore({
  reducer: {
    products: getAllProductsReducer,
  },
});
export { Store };
