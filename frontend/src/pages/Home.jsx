import React, { useEffect, useState } from 'react'
// import {CloudinaryContext,Image} from "cloudinary-react"
import axios from "axios"
import { myAccess } from '../data/data'
import { storage } from '../data/firebase/Firebase'
import { ref,uploadBytes, listAll, getDownloadURL } from 'firebase/storage'
// import UploadWidget from '../components/UploadWidget'
import {v4} from "uuid"


function Home() {
  let [img,setImg] = useState(null)
  let [imgList,setImglist] = useState([])
  const imgListRef =  ref(storage, "images/")
  useEffect(()=>{
    // listAll(imgListRef).then(res=>{
    
    //   console.log(res.items.forEach(itm=>{
    //     console.log(itm)
    //     getDownloadURL(itm).then((res)=>
    //     {
    //       // console.log(res)
    //     })
    //   }))
    // })
  },[])

  

  const uploadImg= ()=> {
    if (img == null) {
      return;
    }
    else {
      const imgRef = ref(storage, `images/${img.name + v4()}`)
      uploadBytes(imgRef,img).then(res=>{
        let imgRef = res.ref
        getDownloadURL(imgRef).then(itm=>{
          console.log(itm)
        })
      }).catch(err=>{console.log(err)})
    }
  }
  
  return (
    <div className="home">  
        <input type="file" name='image' onChange={(e)=>{
          setImg(e.target.files[0])
        }}/>
        <button onClick={()=>{
          uploadImg()
        }}>upload</button>

    </div>
  )
}

export default Home