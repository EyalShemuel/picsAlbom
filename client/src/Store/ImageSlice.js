import { createSlice,createEntityAdapter } from '@reduxjs/toolkit';

export const imageAdapter = createEntityAdapter();
export  const imageSelectors = imageAdapter.getSelectors(state => state.images)


 const ImageSlice = createSlice({
  name: 'Images',
  initialState:imageAdapter.getInitialState({}),
  reducers: {
    addImage: imageAdapter.addOne,
    
    
  },
});

export const { addImage } = ImageSlice.actions;



export default ImageSlice.reducer;
