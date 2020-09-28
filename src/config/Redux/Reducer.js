const InitialState = {
    user : null
}

const Reducer = (state = {...InitialState}, action) => {
    if (action.type === 'ADD_DATA') {
        state['user'] = action.data
        return state
    }

    return state
}

export default Reducer