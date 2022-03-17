import axios from "axios"


const instance = axios.create({
    baseURL:"http://localhost:4000"
})

const get = async (url)=>{
    return await instance.get(url,{
        withCredentials:true
    })
}

const post = async (url,data)=>{
    return await instance.post(url,data,{
        withCredentials:true
    })
}

export default instance
export {get,post}
