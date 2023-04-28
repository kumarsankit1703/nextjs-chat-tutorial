import React, { useContext } from "react";
import { Context } from "../context";
import { useRouter } from "next/dist/client/router";
import axios from "axios";

export default function Auth() {
  const {setUserName, userName , secret , setSecret} = useContext(Context)
  const router = useRouter();


  const onSubmit = async(e) => {
    e.preventDefault()
    // https://firechat-495a0-default-rtdb.firebaseio.com/

    if(userName.length === 0 || secret.lenth === 0) return


    const res = await axios.put("https://api.chatengine.io/users/" , {
     username : userName , secret : secret
    },
    {
      headers : {"Private-key" : "5d012c90-2851-4986-82de-7b4d33d35a78"}
    }
    ).then(r => router.push("/chats"))



  //  const res = await fetch('https://firechat-495a0-default-rtdb.firebaseio.com/userDataRecords.json' , {
  //   method :'POST', 
  //   headers : {
  //     "Content-type" : "application/json"
  //   }, 
  //   body : JSON.stringify({
  //     userName, secret
  //   })
  //  })
  //  if(res.status === 200){
  //   router.push('/chats')
  //  }

  // const res = await axios.post('https://firechat-495a0-default-rtdb.firebaseio.com/userDataRecords.json' , {username : userName, secret :secret})
    console.log("res is" , res)
  }

  return (
    <div className="background">
      <div className="auth-container">
        <form className="auth-form" onClick={(e) =>onSubmit(e)}>
          <div className="auth-title">Next js Chat</div>
          <div className="input-container">
            <input placeholder="Email" 
            className="text-input"
            onChange={(e) => setUserName(e.target.value)}
            />
            <input placeholder="Password"
            type="password" 
            className="text-input"
            onChange={(e) => setSecret(e.target.value)}
            />
            <button type="submit" className="submit-button">
              Login/Sign Up
            </button>

          </div>
        </form>
      </div>
    </div>
  );
}
