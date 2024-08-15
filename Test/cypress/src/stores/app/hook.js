import { useSelector } from "react-redux";

export const useCount = () => useSelector(state => state.app.count) 