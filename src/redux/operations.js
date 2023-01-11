import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
// import * as contactApi from "./servisAPI";

axios.defaults.baseURL = "https://63b6053158084a7af3a78160.mockapi.io"

export const getAllContacts = createAsyncThunk(
    "contacts/getAll",
    async (_, { rejectWithValue }) => {
        try {
            const {data} = await axios.get('/contacts')
                      return data
        } catch (error) {
            return rejectWithValue(error.message)
        }
    })

export const addContact = createAsyncThunk(
    "contacts/add",
    async (contact, { rejectWithValue }) => {
        try {
            const {data}  = await axios.post('/contacts', contact)
            return data
        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)

export const removeContact = createAsyncThunk(
    "contacts/delete",
    async (id, { rejectWithValue }) => {
        try {
           const {data} =  await axios.delete(`/contacts/${id}`)
            return data.id
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)