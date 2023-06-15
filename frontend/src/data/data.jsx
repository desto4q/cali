// export let myAccess = { 
//   cloud_name: 'dprezsx7k', 
//   api_key: '814529555534654', 
//   api_secret: 'InOaLHpgZamnNlrslBwB5hMA1i0' 
// }


// a

import axios from 'axios'

export let fetchdata = async ()=> {
  let url = "http://127.0.0.1:8000/tweets_order/created_at?format=json"
  let resp =  await axios.get(url).then(res=>res).catch(res=>res)
  console.log(resp)
}