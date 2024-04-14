import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosConfig } from "../../axios/axiosConfig";

const initialState = {
  productData: [],
  allCategories: [],
  productDetails: {},
  filterCategoryItems: {},
  isLoading: false,
  erros: null,
};
const getAllProducts = createAsyncThunk("get-all-products", async () => {
  try {
    const { data } = await axiosConfig({
      url: `products?populate=*`,
    });
    return data;
  } catch (error) {
    return error;
  }
});
const getProductDetails = createAsyncThunk("product-details", async (slug) => {
  try {
    const { data } = await axiosConfig({
      url: `products/${slug}?populate=*`,
    });
    return data;
  } catch (error) {
    return error;
  }
});
const getAllCategories = createAsyncThunk("all-categories", async () => {
  try {
    const { data } = await axiosConfig({
      url: `categories?populate=*`,
    });
    return data;
  } catch (error) {
    return error;
  }
});
const filterCategory = createAsyncThunk("filter-category", async (titleCategory) => {
  try {
    const { data } = await axiosConfig({
      url: `categories?filters[title]=${titleCategory}&populate[products][populate][0]=image`,
    });
    return data;
  } catch (error) {
    return error;
  }
});

const getAllProductSlice = createSlice({
  name: "getAllProducts",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getAllProducts.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(getAllProducts.fulfilled, (state, action) => {
      state.isLoading = false;
      state.productData = action.payload;
    });
    builder.addCase(getAllProducts.rejected, (state, action) => {
      // state.isLoading = false;
      state.erros = action.payload;
    });
    builder.addCase(getProductDetails.fulfilled, (state, action) => {
      state.isLoading = false;
      state.productDetails = action.payload;
    });
    builder.addCase(getAllCategories.fulfilled, (state, action) => {
      state.allCategories = action.payload;
    });

    builder.addCase(filterCategory.fulfilled, (state, action) => {
      state.filterCategoryItems = action.payload;
    });
  },
});
const getAllProductsReducer = getAllProductSlice.reducer;

export { getAllProducts, getAllProductsReducer, getProductDetails, getAllCategories, filterCategory };
