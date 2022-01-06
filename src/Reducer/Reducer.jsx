// import "../Action/index";

const initialstate = []

const Reducer = (state = initialstate, action) => {

    switch (action.type) {

        case "ADD_DATA":

            // state.push(action.payload)
            // console.log("action_palyload",action.payload);
            return [...state, action.payload]

        case "DeleteData":
            state = [...action.payload]
            return state

        case "UpdataData":
            return state

        default:
            return state;
    }

}

export default Reducer













