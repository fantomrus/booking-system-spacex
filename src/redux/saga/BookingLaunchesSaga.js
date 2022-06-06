import {put, takeEvery, call, select} from "redux-saga/effects"
import {FETCH_LAUNCHES, setLoadData, setDataBooking, getSizeLaunchesTable} from "../reducers/bookingReducers";

const fetchLaunchesFromApi = () => fetch('https://api.spacexdata.com/v4/launches')

function* fetchLaunchesWorker() {

    Array.prototype.filterSize = function (array, size) {
        for(let i = 0; i < size; i++) {
            this.push(array[i])
        }
        array.splice(0, size)
    }

    const data = yield call(fetchLaunchesFromApi)
    const state = yield select(getSizeLaunchesTable)
    const json = yield call(() => new Promise(res => res(data.json())))

    let filterData = yield json.filter(item => item.details).reverse()

    let myLaunches = [], launches = [], pastLaunches = []

    yield myLaunches.filterSize(filterData, state.myLaunches)
    yield launches.filterSize(filterData, state.launches)
    yield pastLaunches.filterSize(filterData, state.pastLaunches)

    yield put(setDataBooking({pastLaunches, launches, myLaunches}))
    yield put(setLoadData(true))
}

export function* launchesWatcher() {
    yield takeEvery(FETCH_LAUNCHES, fetchLaunchesWorker)
}