import { ref,uploadBytes, listAll, getDownloadURL } from 'firebase/storage'
import {v4} from "uuid"
import { storage } from '../data/firebase/Firebase'

import axios from 'axios'

export let fetchdata = async ({id})=> {
  let url = `http://127.0.0.1:8000/tweets_order/created_at?format=json&page=${id}`
  try {
    let resp =  await axios.get(url).then(res=>{
      return res.data
    })
    return resp
  }
  catch (err)  {
    if (err.response.data.details =  "Invalid page") {
      return "end"
    }
    else {
      return "error"
    }
  }
  
}

export let sendData = async ({c}) => {
  
  let url = "http://127.0.0.1:8000/tweet/add"
  let resp = await axios.post(url,c).then(res =>res.data)
  return resp
}



 export const uploadImg= async ({img})=> {
  if (img == null) {
    return "null";
  }
  else {
    console.log("uploading")
    const imgRef = ref(storage, `images/${img.name + v4()}`)
    let  resp =  await uploadBytes(imgRef,img).then(async (res)=>{
      let imgRef = res.ref
      let response = await getDownloadURL(imgRef).then(itm=>{
        return itm
      })
      return response
    })
    // .catch(err=>{console.log(err)})
    return resp 
  }
}

export let Links = [
  {
      name: "Home",
      to: "/page/1",
      icon: "",
  },
  {
      name: "Post",
      to: "/post",
      icon: "",
  },
  {
      name: "Report",
      to: "",
      icon: "",
  },
  {
      name: "Help",
      to: "",
      icon: "",
  },
  
]


export let fetchUserProfile = async ({id}) => {
  let url = `http://127.0.0.1:8000/userpost/${id}?format=json`
  let resp =  await axios.get(url).then(res => res.data)
  return resp
}