import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sidebar: {
    open: false,
    type: "CONTACT", // can be CONTACT, STARRED, SHARED
  },
  snackbar: {
    open: null,
    message: null,
    severity: null,
  },
};

const slice = createSlice({
  name: "app",
  initialState,
  reducers: {
    // Toggle Sidebar
    toggleSideBar(state, action) {
      state.sidebar.open = !state.sidebar.open;
    },
    updateSideBarType(state, action) {
      state.sidebar.type = action.payload.type;
    },
    openSnackbar(state, action) {
      state.snackbar.open = true;
      state.snackbar.severity = action.payload.severity;
      state.snackbar.message = action.payload.message;
    },
    closeSnackbar(state, action) {
      state.snackbar.open = false;
      state.snackbar.severity = null;
      state.snackbar.message = null;
    },
  },
});

// Reducer
export default slice.reducer;

export function ToggleSideBar() {
  return async (dispatch) => {
    dispatch(slice.actions.toggleSideBar());
  };
}

export function UpdateSidebarType(type) {
  return async (dispatch) => {
    dispatch(
      slice.actions.updateSideBarType({
        type,
      })
    );
  };
}

export function ShowSnackbar({ severity, message }) {
  return async (dispatch, getState) => {
    dispatch(
        slice.actions.openSnackbar({
            message, severity
        })
    );

    setTimeout(() => {
        dispatch(slice.actions.closeSnackbar());
    }, 4000);
  };
};

export function closeSnackbar() {
    return async (dispatch) => {
        dispatch(slice.actions.closeSnackbar());
    }
};


