import axios from "axios";
import { hideLoader, showLoader } from "../redux/actions";


export async function GETaxios({ id, dispatch }) {
    dispatch(showLoader(id))
    axios.get('https://reqres.in/api/users?delay=3').then((response) => { })
    setTimeout(() => {
        dispatch(hideLoader(id))
    }, 3000)
}