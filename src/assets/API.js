import axios from "axios";
export const BaseURL = "https://uniserv.azhar-edu.org/";

export default function API(endpoint, method = "GET", data = {}) {
    // let body
     if (method !== "GET" && method !== "DELETE") {
        // body = JSON.stringify(data);
        // body = new FormData();
        // for(let k in data) {
        //     body.append(k, data[k]);
        // }
    }
    return axios({
        baseURL: BaseURL,
        url: endpoint,
        method: method,
        headers: {
            ContentType: false,
            ProcessData: false,
            DataType: "JSON",

            // send user access token in header every api call
            Authorization:
                "Bearer " + JSON.parse(localStorage.getItem("access-token")),
        },
        data: data,
        mode: "cors",
    }).then((r) => ({ data: r.data, status: r.status }))
         
}
