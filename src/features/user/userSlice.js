import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    email: null,
    isAuthenticated: false,
    isLoading: false,
    error: null,
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        userLoading: (state) => {
            state.isLoading = true;
            
        },
        userLoaded: (state, action) => {
            state.isAuthenticated = true;
            state.isLoading = false;
            state.email = action.payload
        },
        authError: (state, action) => {
            state.error = action.payload;
            state.isLoading = false;
        },
        logoutUser: (state) => {
            state.isAuthenticated = false;
            state.email = null;
            
        },
    }
})

export const { userLoading, userLoaded, authError, logoutUser } = userSlice.actions;

// export const loginUser = (email, password) => async (dispatch) => {
//     try {
//         dispatch(userLoading());
//         const response = await fetch('/login', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify({
//                 user: {
//                     email: email,
//                     password: password
//                 }
//             })
//         });
//         const user = await response.json();
//         dispatch(userLoaded(user.data.email));
//         localStorage.setItem("token", response.headers.get("Authorization"));
//     } catch (error) {
//         dispatch(authError(error.message));
//     }
// };

// export const signupUser = (email, password) => async (dispatch) => {
//     try {
//         dispatch(userLoading());
//         const response = await fetch('/signup', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify({
//                 user: {
//                     email: email,
//                     password: password,
//                 }
//             })
//         });
//         const user = await response.json();
//         dispatch(userLoaded(user.data.email));
//         localStorage.setItem("token", response.headers.get("Authorization"));
//     } catch (error) {
//         dispatch(authError(error.message));
//     }
// };

// export const userLogout = () => async (dispatch) => {
//     try {
//         const response = await fetch('/logout', {
//             method: 'DELETE',
//             headers: {
//                 "Content-Type": "application/json",
//                 "Authorization": localStorage.getItem("token"),
//             },

//         })
//         await response.json();
//         dispatch(logoutUser());
//         localStorage.removeItem('token');
//     } catch (error) {
//         console.log(error);
//     }
// };

export const userReducer = userSlice.reducer;