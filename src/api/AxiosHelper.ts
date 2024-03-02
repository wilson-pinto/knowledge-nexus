import HttpGetParam from "../interfaces/HttpGetparam";
import axiosIntance from "./AxiosConfig";

const httpGet = ({ path, queryParams }: HttpGetParam) => {

    //TODO: handle query params
    return new Promise((resolve, reject) => {
        axiosIntance.get(
            path,
            {
                headers: {
                    'Content-Type': 'application/json'
                },
                params: queryParams
            })
            .then((res) => {
                return resolve(res.data)
            })
            .catch(e => {               
                reject( e?.response?.data?.message)
            }) //TODO : send formatted message
    })
}

const AxiosHelper = {
    httpGet
}

export default AxiosHelper