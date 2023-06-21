import React, { useEffect, useState } from 'react'
import { sendData, uploadImg } from '../data/data'
import { FileUploader, } from "react-drag-drop-files";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useFilePicker } from 'use-file-picker';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';



function Post() {
    

    
    let [img,setImg] = useState(null)
    let [preview,setPreview] = useState(null)
    
    const user = useSelector(state=> state.user)
    if (user.username == "") {
        alert( "not logged in")
        return (
            <Navigate to={"/"}/>
        )
    }


    


    let bgIMG = "https://firebasestorage.googleapis.com/v0/b/cali-1a1c9.appspot.com/o/background%2FGreen%20Forest%2C%20benjamin%20perrot.jpg?alt=media&token=aa728318-e779-4b59-8aec-3f862b904307"


    let handleSubmit = async (e) =>  {
        e.preventDefault()
        console.log(user.username)
        const notify =() => toast("pending")
            notify()
        let resp = await uploadImg({img: img}).then(async res=> {
            let username =  user.id
            let cont = e.target[0].value
            let image = res
            if (cont == "" || cont== " ") {
                cont = "unknown"
                let content = {
                    user: username,
                    body: cont,
                    image: image,
                }
                let newresp = await toast.promise(sendData({c: content}),{pending: "ispending",success: "success",error: "error"}).then(res => {
                    console.log(res)
                })
            }
            else {
                let content = {
                    user: username,
                    body: cont,
                    image: image,
                }
                let newresp = await toast.promise(sendData({c: content}),{pending: "ispending",success: "success",error: "error"})
            }
        })

    }
    let handleChange = (e) => {
        let file = e.target.files[0]
        setImg(file)
        let newfile = URL.createObjectURL(file)
        setPreview(newfile)
    }


    // useEffect(()=>{
    //     console.log(img)
    // },[img])




  return (
    <div className="post">
        <img src={bgIMG} alt="" className="bgImg" />
            <ToastContainer theme='dark' />
            <div className="contentBox">
                <form action="#" onSubmit={e=> {
                    handleSubmit(e)
                }}>
                    <h2>Cali post</h2>
                    <div>
                        <label htmlFor="text">Type content here....</label>
                        <textarea name="text" id="text" cols="30" rows="10"></textarea>
                    </div>
                    <div className='fileBox'>
                        <label htmlFor="fileInput" className='uploader'>
                            click to upload file
                        </label>
                        <input onChange={e=> {
                            handleChange(e)
                        }} type="file" name="" id="fileInput" accept='image/*' />
                    </div>
                    <button>Upload</button>
                    <div className='preview'>
                        <img src={preview} alt="" />
                    </div>
                </form>
                
            </div>
    </div>
  )
}

export default Post