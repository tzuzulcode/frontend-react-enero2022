export const reviewsInitialState = {
    reviews:[]
}

export default function reviewsReducer(state,action){
    let newState;
    switch(action.type){
        case 'addReview':
            const {idMovie,comment} = action
            newState = {reviews:[...state.reviews,{id:state.reviews.length,idMovie,comment}]}
            break;
    }

    return newState
}