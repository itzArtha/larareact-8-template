import { SET_MESSAGE, CLEAR_MESSAGE, IS_LOADING } from "../actions/type";

const initialState = {};

export default function (state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case SET_MESSAGE:
            return { message: payload };

        case CLEAR_MESSAGE:
            return { message: "" };

        case IS_LOADING:
            return { status: payload };

        default:
            return state;
    }
}
