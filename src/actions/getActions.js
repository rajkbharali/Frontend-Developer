export const getAllCapsules = () => {
    async function getData() {
        const URL =
        "https://api.spacexdata.com/v3/capsules";

        const response = await fetch(URL, {
            "Content-Type": "application/json",
            method: "GET"
        });

        const data = await response.json();
        return data
        // console.log("actions",data)
    }
    return (dispatch) => {
        getData()
        .then((data) => {
            if (data.length>0) {
            dispatch({
                type: "ALL_CAPSULES",
                data,
            });
            } else {
            console.log("Error In Loading Data");
            }
        })
        .catch((error) => {
            console.log(error);
        });
    };
};

export const getCapsulesByStatus = (statusBody) => {
    async function getData() {
        const URL =
        `https://api.spacexdata.com/v3/capsules?status=${statusBody}`;

        const response = await fetch(URL, {
            "Content-Type": "application/json",
            method: "GET"
        });

        const data = await response.json();
        return data
        // console.log("actions",data)
    }
    return (dispatch) => {
        getData()
        .then((data) => {
            if (data.length>0) {
            dispatch({
                type: "ALL_CAPSULES",
                data,
            });
            } else {
            console.log("Error In Loading Data");
            }
        })
        .catch((error) => {
            console.log(error);
        });
    };
};

export const getCapsulesById = (idBody) => {
    async function getData() {
        const URL =
        `https://api.spacexdata.com/v3/capsules?capsule_id=${idBody}`;

        const response = await fetch(URL, {
            "Content-Type": "application/json",
            method: "GET"
        });

        const data = await response.json();
        return data
        // console.log("actions",data)
    }
    return (dispatch) => {
        getData()
        .then((data) => {
            if (data.length>0) {
            dispatch({
                type: "ALL_CAPSULES",
                data,
            });
            } else {
            console.log("Error In Loading Data");
            }
        })
        .catch((error) => {
            console.log(error);
        });
    };
};

export const getCapsulesByType = (typeBody) => {
    async function getData() {
        const URL =
        `https://api.spacexdata.com/v3/capsules?type=${typeBody}`;

        const response = await fetch(URL, {
            "Content-Type": "application/json",
            method: "GET"
        });

        const data = await response.json();
        return data
        // console.log("actions",data)
    }
    return (dispatch) => {
        getData()
        .then((data) => {
            if (data.length>0) {
            dispatch({
                type: "ALL_CAPSULES",
                data,
            });
            } else {
            console.log("Error In Loading Data");
            }
        })
        .catch((error) => {
            console.log(error);
        });
    };
};