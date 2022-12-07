import axios from "axios";
export const BaseURL = "https://tstauth.smartgate-egypt.com/";

export default function API(endpoint, method = "GET", data = {}) {
    // let body
  
    return axios({
        baseURL: BaseURL,
        url: endpoint,
        method: method,
        headers: {
            DataType: "JSON",
            Authorization:
                "Bearer " + JSON.parse(localStorage.getItem("access-token")),
            mode: 'cors',
            Accept: 'application/json',
        },
        data: data,
        mode: "cors",
    }).then((r) => ({ data: r.data, status: r.status }))
         
}



