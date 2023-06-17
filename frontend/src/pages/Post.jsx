import React, { useEffect, useState } from 'react'
import { sendData, uploadImg } from '../data/data'
import { FileUploader, } from "react-drag-drop-files";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function Post() {
    

    
    let [img,setImg] = useState(null)
    let [body,setBody] = useState('')
    let [user,setUser] = useState(1)


    const fileTypes = ["JPG", "PNG", "GIF"];
    

    // this is the function that  is called to content
    let postContent = async ({content}) => {
        if (content == {} || content == null || content == undefined )  {
            alert("empty")
        }
        else {
            let resp = await toast.promise(sendData({c: content}),{pending: "ispending",success: "success",error: "error"})
            return resp
        }
    }

    
    let handleSumbit = async (e) => {
        e.preventDefault()        
        console.log("gg")
        let body = e.target[0].value
        if (body == "" || body == " ") {
            const notify = () => toast("empty")
            notify()
        }
        
        else {
            let temp =  e.target[1].files[0]
            setBody(body)
            if (temp != undefined || temp != "" ) {
            let resp = await uploadImg({img:temp})
            setImg(resp)
            }
            if (temp == undefined) {
                temp = " "
                setImg(temp)
            }
        }
    }



    let handleUpload = () => {
        if ( img == "" || img == null) {
            console.log(img)
        }
        else {
            console.log("ss")
            let content = {
                user: user,
                body: body,
                image: img
            }
            postContent({content:content})
            setImg(null)
        }
    }


    
    useEffect(()=>{
        handleUpload()
    },[img])

    


    let bgIMG = "https://firebasestorage.googleapis.com/v0/b/cali-1a1c9.appspot.com/o/background%2FGreen%20Forest%2C%20benjamin%20perrot.jpg?alt=media&token=aa728318-e779-4b59-8aec-3f862b904307"

  return (
    <div className="post">
        <img src={bgIMG} alt="" className="bgImg" />
        <div className="contentBox">
            <ToastContainer theme='dark'/>
            <button onClick={(()=>{
                notify()
            })}>Notify</button>
            
            <form action=""  onSubmit={(e)=>{
                handleSumbit(e)
            }}>
                <h2>Cali Post</h2>
                <div className="input" >
                    <label htmlFor="body">Content: </label>
                    {/* <i type="text" name="body" id="" /> */}
                    <textarea name="body" id="" cols="30" rows="10"></textarea>
                </div>
                <div className='fileBox'>
                    <label htmlFor="fileInput" className='uploader'>Choose file to upload</label>
                    <input type="file" name='fileInput' id='fileInput' />
                    {/* <FileUploader name="file" multiple={false} types={fileTypes} /> */}
                </div>
                <button>Submit</button>
            </form>
        </div>
    </div>
  )
}

export default Post