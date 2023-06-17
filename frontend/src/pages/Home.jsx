import React, { useEffect, useState } from 'react'
// import {CloudinaryContext,Image} from "cloudinary-react"
import axios from "axios"
import { storage } from '../data/firebase/Firebase'

import SearchBar from '../components/SearchBar'
import Feed from '../components/Feed'


function Home() {

  // let [imgList,setImglist] = useState([])
  // const imgListRef =  ref(storage, "images/")
  // useEffect(()=>{
  //   // listAll(imgListRef).then(res=>{
    
  //   //   console.log(res.items.forEach(itm=>{
  //   //     console.log(itm)
  //   //     getDownloadURL(itm).then((res)=>
  //   //     {
  //   //       // console.log(res)
  //   //     })
  //   //   }))
  //   // })
  // },[])

  

  
  
  return (
    // <div className="home">  
    //     <input type="file" name='image' onChange={(e)=>{
    //       setImg(e.target.files[0])
    //     }}/>
    //     <button onClick={()=>{
    //       uploadImg()
    //     }}>upload</button>

    // </div>
    <div className="home">
      <SearchBar/>
      <Feed/>
    </div>
  )
}

export default Home