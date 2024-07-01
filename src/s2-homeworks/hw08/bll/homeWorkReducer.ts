import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': { // by name
            const stateCopy = [...state];

            if (action.payload === 'up') {
                stateCopy.sort((a, b) => a.name.localeCompare(b.name));
            } else {
                stateCopy.sort((a, b) => b.name.localeCompare(a.name));
            }

            return stateCopy // need to fix
        }
        case 'check': {
            let adultUsers = state.filter((u) => u.age > 17);

            return adultUsers // need to fix
        }
        default:
            return state
    }
}
