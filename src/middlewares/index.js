export const logger = (store) => (next) => (action) => {
    console.log(action);
    next(action);
}

// export const featuring = (store) => (next) => (action) => {
//     const featured = [{name: "Foxy"}, ...action.action.payload];
//     const updatedAction = {...action, action: {...action.action, payload: featured},};
//     next(updatedAction);
// }

// export const prefixed = (store) => (next) => (action) => {
//     const prefix = "Poke-";
//     const addPrefix = action.action.payload.map(item => ({...item, name: prefix + item.name}))
//     const updatedAction = {...action, action: {...action.action, payload: addPrefix }};
//     next(updatedAction);
// }