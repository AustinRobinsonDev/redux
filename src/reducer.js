import * as actions from './actionTypes'
let lastId = 0;

export default function reducer(state = [], action) {

    if (action.type === actions.PERSON_ADDED) {
        return [
            ...state,
            {
                id: lastId++,
                name: action.payload.name,
                email: action.payload.email
            }
        ]
    } else if (action.type === actions.PERSON_REMOVED) {
        return state.filter(person => person.id !== action.payload.id);
    }
    return state;
}