import { APP_URL } from "@/constants/config"
import { user } from "@/types/User"
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const authApi = createApi({
    reducerPath: "authApi",
    baseQuery: fetchBaseQuery({ baseUrl: `${APP_URL}/api/auth`, credentials: "include" }),
    tagTypes: [],
    endpoints: (builder) => {
        return {


            singup: builder.mutation<void, user>({
                query: userData => {
                    return {
                        url: "/singup",
                        method: "POST",
                        body: userData
                    }
                },
                invalidatesTags: []
            }),

            singin: builder.mutation<void, user>({
                query: userData => {
                    return {
                        url: "/singin",
                        method: "POST",
                        body: userData
                    }
                },
                invalidatesTags: []
            }),

            singout: builder.mutation<void, user>({
                query: userData => {
                    return {
                        url: "/singout",
                        method: "PATCH",
                        body: userData
                    }
                },
                invalidatesTags: []
            }),



        }
    }
})

export const {
    useSinginMutation,
    useSingoutMutation,
    useSingupMutation
} = authApi
