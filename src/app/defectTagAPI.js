import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseURL = "http://172.17.234.55:8080/api/";

// Define a service using a base URL and expected endpoints
export const defectTagAPI = createApi({
  reducerPath: "defectTagAPI",
  baseQuery: fetchBaseQuery({ baseUrl: baseURL }),
  endpoints: (builder) => ({
    //login

    loginUser: builder.query({
      query: (Password) => ({
        url: "login",
        method: "POST",
        body: Password,
      }),
    }),

    getHinbanData: builder.query({
      query: (hinban) => `get-hinban-data/${hinban}`,
    }),

    saveDefectDataBarcoded: builder.mutation({
      query: (formData) => ({
        url: "save-defect-data-barcoded",
        method: "POST",
        body: formData,
      }),
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useLazyLoginUserQuery,
  useLazyGetHinbanDataQuery,
  useSaveDefectDataBarcodedMutation,
} = defectTagAPI;
