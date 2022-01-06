export function AddData(data) {
    // console.log("DATA", data)
    return {

        type: "ADD_DATA",
        payload: data

    }
}
export function DeleteData(data) {
    return {

        type: "DeleteData",
        payload: data

    }
} export function UpdataData(data) {
    return {

        type: "UpdataData",
        payload: data

    }


}