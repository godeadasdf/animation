import {animAction} from './actions';

export const handleAnimAction = (state = {}, action) => {
    switch (action.type) {
        case 'ANIM':
            return {AnimState: action.animType}
        default:
            return state;
    }
}