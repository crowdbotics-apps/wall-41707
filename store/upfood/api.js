import axios from "axios"
const upfood = axios.create({
  baseURL: "https://app.ecwid.com/api/v3/39042093",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function upfood_get_orders_read(payload) {
  return upfood.get(`/orders`, { params: { token: payload.token } })
}
export const apiService = { upfood_get_orders_read }
