import { createSlice } from "@reduxjs/toolkit";
// 
import { dispatch } from "../store";

const initialState = {
    sidebar: {
        open: false,
        type: "CONTACT", // can be CONTACT, STARRED, SHARED
    }
}

const slice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        // Toggle Sidebar
        toggleSideBar(state, action) {
            state.sidebar.open = !state.sidebar.open;            
        },
        updateSideBarType(state, action) {
            state.sidebar.type = action.payload.type;
        }
    }
});

// Reducer
export default slice.reducer;

export function ToggleSideBar() {
    return async () => {
        dispatch(slice.actions.toggleSideBar());
    }
}

export function UpdateSidebarType(type) {
    return async () => {
        dispatch(slice.actions.updateSideBarType({
            type,
        }));
    }
}