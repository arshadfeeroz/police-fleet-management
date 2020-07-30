import { 
    fetchingListAssigned,
    fetchingListAssignedSuccess,
    fetchingListAssignedFailure,
    fetchingListAllocated,
    fetchingListAllocatedSuccess,
    fetchingListAllocatedFailure
    } from '../../actions/vehicleList/vehicleListAll'


export const firstState = {
    vehicleAll: {
        status: null,
        data: {},
    }
}


export const VehicleListAssignedReducer = (state = firstState, action) => {
    switch(action.type) {
        case(fetchingListAssigned): {
            return({
                ...firstState,
                status: 'fetching',
            })
        }
        case(fetchingListAssignedSuccess): {
            return({
                ...state.vehicleAll,
                data: {...action.data},
                status: 'success'
            })
        }
        case(fetchingListAssignedFailure): {
            return({
                ...firstState,
                status: 'failure'
            })
        }
        default: {
            return({
                ...state.vehiclesAll
            })
        }
    }
}


export const VehicleListAllocatedReducer = (state = firstState, action) => {
    switch (action.type) {
        case (fetchingListAllocated): {
            return ({
                ...firstState,
                status: 'fetching',
            })
        }
        case (fetchingListAllocatedSuccess): {
            return ({
                ...state.vehicleAll,
                data: { ...action.data },
                status: 'success'
            })
        }
        case (fetchingListAllocatedFailure): {
            return ({
                ...firstState,
                status: 'failure'
            })
        }
        default: {
            return ({
                ...state.vehiclesAll
            })
        }
    }
}
