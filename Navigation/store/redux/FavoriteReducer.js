import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    ids: [],
}

export const FavoriteReducer = createSlice({
  name: 'favorite',
  initialState,
  reducers: {
    addFavorite: (state, action)=>{
        state.ids=[...state.ids,action.payload]
    },
    removeFavorite: (state, action)=>{
        state.ids=state.ids.filter((item)=>{
            return item!==action.payload
        })
    },
  },
})

// Action creators are generated for each case reducer function
export const { addFavorite,removeFavorite } = FavoriteReducer.actions

export default FavoriteReducer.reducer