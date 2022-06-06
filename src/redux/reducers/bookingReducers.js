const defaultState = {
    launches: [],
    pastLaunches: [],
    myLaunches: [],
    sizeLaunchesTable: {
        launches: 5,
        pastLaunches: 5,
        myLaunches: 3
    },
    currentBoard: '',
    currentCard: [],
    isLoadedData: false,
    isOpenModal: false,
    snackbarBookingSuccess: false
}

export const SET_USERS = "SET_USERS"
export const FETCH_LAUNCHES = "FETCH_LAUNCHES"
export const SET_LAUNCHES = "SET_LAUNCHES"
export const SET_MY_LAUNCHES = "SET_MY_LAUNCHES"
export const CURRENT_BOARD = "CURRENT_BOARD"
export const CURRENT_CARD = "CURRENT_CARD"
export const LOAD_DATA = "LOAD_DATA"
export const OPEN_MODAL = "OPEN_MODAL"
export const BOOKING_SUCCESS = "BOOKING_SUCCESS"

export default function bookingReducer(state = defaultState, action) {
    switch(action.type) {
        case SET_USERS:
            return {
                ...state,
                launches: action.payload.launches,
                pastLaunches: action.payload.pastLaunches,
                myLaunches: action.payload.myLaunches
            }
        case SET_LAUNCHES:
            return {
                ...state,
                launches: [...state.launches, state.currentCard],
                myLaunches: state.myLaunches.filter(item => item.id !== state.currentCard.id)
            }
        case SET_MY_LAUNCHES:
            return {
                ...state,
                myLaunches: [...state.myLaunches, state.currentCard],
                launches: state.launches.filter(item => item.id !== state.currentCard.id)
            }
        case CURRENT_BOARD:
            return {
                ...state,
                currentBoard: action.payload
            }
        case CURRENT_CARD:
            return {
                ...state,
                currentCard: action.payload
            }
        case LOAD_DATA:
            return {
                ...state,
                isLoadedData: action.payload
            }
        case OPEN_MODAL:
            return {
                ...state,
                isOpenModal: action.payload
            }
        case BOOKING_SUCCESS:
            return {
                ...state,
                snackbarBookingSuccess: action.payload
            }
    }
    return state
}

export const setDataBooking = (payload) => ({type: SET_USERS, payload})
export const fetchLaunches = () => ({type: FETCH_LAUNCHES})
export const setCurrentBoard = (payload) => ({type: CURRENT_BOARD, payload})
export const setCurrentCard = (payload) => ({type: CURRENT_CARD, payload})
export const setLaunches = () => ({type: SET_LAUNCHES})
export const setMyLaunches = () => ({type: SET_MY_LAUNCHES})
export const setLoadData = (payload) => ({type: LOAD_DATA, payload})
export const setOpenModal = (payload) => ({type: OPEN_MODAL, payload})
export const setBookingSuccess = (payload) => ({type: BOOKING_SUCCESS, payload})
export const getSizeLaunchesTable = state => defaultState.sizeLaunchesTable