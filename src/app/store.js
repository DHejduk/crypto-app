import { configureStore } from "@reduxjs/toolkit";
import { cryptoApi } from "../servieces/cryptoApi";
import { cryptoNewsApi } from "../servieces/cryptoNewsApi";

export default configureStore({
  reducer: {
      [cryptoApi.reducerPath]: cryptoApi.reducer,
      [cryptoNewsApi.reducerPath]: cryptoNewsApi.reducer,
  },
});
