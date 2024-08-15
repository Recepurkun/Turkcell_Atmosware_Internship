import store from ".."
import { _decreament, _increament, _setCount } from "."

export const setIncreament = () => store.dispatch(_increament())
export const setDecreament = () => store.dispatch(_decreament())
export const setCount = number => store.dispatch(_setCount(number))