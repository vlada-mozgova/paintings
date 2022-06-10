import { useDispatch } from "react-redux";
import { hideLoader, showLoader } from "../redux/actions";

export async function GETfetch({ id, dispatch }) {
    dispatch(showLoader(id))
    const response = await fetch('https://reqres.in/api/users?delay=3')
    const data = await response.json()
    dispatch(hideLoader(id))
}