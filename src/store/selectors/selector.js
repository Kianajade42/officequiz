import { useSelector } from "react-redux";

export const getData = (state) => {
    return state.data
}

export default function useData(){
    const data = useSelector(getData) 
    return{data}}