import React, {useState, useContext, useEffect} from "react";
import { Context } from "../context";
import { useRouter } from "next/dist/client/router";
import dynamic from 'next/dynamic'

const ChatEngine = dynamic(() => 
  import("react-chat-engine").then((module) =>module.ChatEngine)
)

const MessageFromSocial = dynamic(() => 
  import("react-chat-engine").then((module) =>module.MessageFromSocial)
)



export default function Chats() {
  const router = useRouter()
  const {userName , secret} = useContext(Context)
  const [showChat, setShowChat] = useState(false)

  useEffect(() => {
   if(typeof document !== null){
    setShowChat(true)
   }
  })
  

  useEffect(() => {
    if(userName.length === 0 || secret.length === 0) router.push('/')
   })
   

  if(!showChat) return <div/>

  return (<div className="background">
      <div className="shadow">
        <ChatEngine
        height = 'calc(100vh - 200px)'
        projectID = "6810b415-c934-475d-94a4-7282003d980f"
        userName={userName}
        userSecret = {secret}
        // renderNewMessageForm = {() => <MessageFromSocial/>}
        />

      </div>
  </div>)
}
