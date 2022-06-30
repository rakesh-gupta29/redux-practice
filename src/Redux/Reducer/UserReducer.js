import {
    RESET_PASSWORD_SUCCESS,
    SAVE_USER_DATA,
    SET_CURRENT_USER,
    SIGN_IN_SUCCESS,
    USER_ERROR,
} from '../ActionType'

const initialState = {
    user: null,
    SignInSuccess: null,
    UserError: [],
    resetPasswordSuccess: false,
    Name: ""
}


export const userReducer = (state = initialState, { type, payload }) => {

    switch (type) {

        case SET_CURRENT_USER: return { ...state, user: payload, UserError: [] }

        case SIGN_IN_SUCCESS: return { ...state, SignInSuccess: payload }

        case RESET_PASSWORD_SUCCESS: return { ...state, resetPasswordSuccess: payload }

        case USER_ERROR: return { ...state, UserError: payload }

        case SAVE_USER_DATA: {
            const name = "rahul"
            const { userRoles } = payload
            const { id } = payload
            localStorage.setItem("data", JSON.stringify({ userRoles, id }))
            localStorage.setItem("id", id)
            return {
                ...state, Name: name
            }
        }

        default:
            return state;
    }

}


