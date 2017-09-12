const FilterText = (state = '',action ) =>{
    switch(action.type){
        case "SET_FILTER_TEXT":
            return action.filterText;
        default:
            return state;
    }
}
export default FilterText;