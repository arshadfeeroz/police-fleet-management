import axios from 'axios';

export const fetchingListAssigned = "fetchingListAssigned";
export const fetchingListAssignedSuccess = "fetchingListAssignedSuccess";
export const fetchingListAssignedFailure = "fetchingListAssignedFailure";

export const fetchingListAllocated = "fetchingListAllocated";
export const fetchingListAllocatedSuccess = "fetchingListAllocatedSuccess";
export const fetchingListAllocatedFailure = "fetchingListAllocatedFailure";


//Allocated
export const AllocatedVehicleActionInit = (data) => {
    return (
        {
            type: fetchingListAllocated,
        }
    )
}

export const AllocatedVehicleActionPass = (data) => {
    return (
        {
            type: fetchingListAllocatedSuccess,
            data: { ...data }
        }
    )
}

export const AllocatedVehicleActionFail = (data) => {
    return (
        {
            type: fetchingListAllocatedFailure,
        }
    )
}

//Assigned
export const AssignedVehicleAction1 = (data) => {
    return(
        {
            type: fetchingListAssigned,
        }
    )
}

export const AssignedVehicleAction2 = (data) => {
    return(
        {
            type: fetchingListAssignedSuccess,
            data: {...data}
        }
    )
}

export const AssignedVehicleAction3 = (data) => {
    return(
        {
            type: fetchingListAssignedFailure,
        }
    )
}


export const AssignedVehicleAction=(token)=>{
    return (dispatch)=>{
        dispatch(AssignedVehicleAction1());
        dispatch(AssignedVehicleAction2([]));
        dispatch(AssignedVehicleAction3());
    }
}

export const AllocatedVehicleAction = (token) => {
    return (dispatch) => {
        dispatch(AllocatedVehicleActionInit());
        return axios({
            method: 'get',
            url: 'https://run.mocky.io/v3/e849c6c7-8181-420e-9d58-88eb21e370ba',
            //headers:{'Authorization':'JWT '+token}
        })
        .then((response) => {
            if (response.status === 200) {
                console.log(response);
                dispatch(AllocatedVehicleActionPass([]));
            } else {
                dispatch(AllocatedVehicleActionFail());
            }

        }).catch((response) => {
            dispatch(AllocatedVehicleActionFail());
        })
    }
}
