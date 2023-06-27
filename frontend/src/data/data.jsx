import { ref, uploadBytes, listAll, getDownloadURL } from 'firebase/storage'
import { v4 } from "uuid"
import { storage } from '../data/firebase/Firebase'

import axios from 'axios'
import { useSelector } from 'react-redux'

export let fetchdata = async ({ id }) => {
  let url = `https://cali-production.up.railway.app/tweets_order/created_at?format=json&page=${id}`
  try {
    let resp = await axios.get(url).then(res => {
      return res.data
    })
    return resp
  }
  catch (err) {
    if (err.response.data.details = "Invalid page") {
      return "end"
    }
    else {
      return "error"
    }
  }

}

export let sendData = async ({ c }) => {

  let url = "http://127.0.0.1:8000/tweet/add"
  let resp = await axios.post(url, c).then(res => res.data)
  return resp
}



export const uploadImg = async ({ img }) => {
  if (img == null) {
    return "null";
  }
  else {
    console.log("uploading")
    const imgRef = ref(storage, `images/${img.name + v4()}`)
    let resp = await uploadBytes(imgRef, img).then(async (res) => {
      let imgRef = res.ref
      let response = await getDownloadURL(imgRef).then(itm => {
        return itm
      })
      return response
    })
    // .catch(err=>{console.log(err)})
    return resp
  }
}

export let Links = () => {
  const user = useSelector(state => state.user)

  return [
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
      name: "profile",
      to: `/${user.username}/${user.id}/page/1`,
      icon: "",
    },
    {
      name: "search",
      to: "/search/page/1/?q=",
      icon: ""
    },

    {
      name: "Help",
      to: "",
      icon: "",
    },

  ]
}


export let fetchUserProfile = async ({ id, page }) => {
  let url = `https://cali-production.up.railway.app/userpost/${id}?format=json&page=${page}`
  try {
    let resp = await axios.get(url).then(res => {
      return res.data
    })
    return resp
  }
  catch (err) {
    if (err.response.data.details = "Invalid page") {
      return "end"
    }
    else {
      return "error"
    }
  }
  return resp
}



export let searchPost = async ({ q, page }) => {
  let url = `https://cali-production.up.railway.app/search/?q=${q}&page=${page}`
  try {
    let resp = await axios.get(url).then(res => {
      return res.data
    })
    return resp
  }
  catch (err) {
    if (err.response.data.details = "Invalid page") {
      return "end"
    }
    else {
      return "error"
    }
  }
}

export let searchUser = async ({ q, page }) => {
  let url = `https://cali-production.up.railway.app/searchuser/?q=${q}&page=${page}`
  try {
    let resp = await axios.get(url).then(res => {
      return res.data
    })
    return resp
  }
  catch (err) {
    if (err.response.data.details = "Invalid page") {
      return "end"
    }
    else {
      return "error"
    }
  }
}