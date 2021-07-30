import React,{ useEffect, useState} from 'react'
import './Chat.css';
import { useParams } from 'react-router-dom';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import db from './Firebase';
import Message from './Message';
import ChatInput from './ChatInput';
import './ChatInput.css';


function Chat() {
    const {roomId} =useParams();
    const [roomDetails,setRoomDetails] = useState(null);
    const [roomMessages,setRoomMessages] = useState([]);

    useEffect(() => {
        if(roomId){
            db.collection('rooms').doc(roomId)
            .onSnapshot(snapshot => {
                    setRoomDetails(snapshot.data());
            })

        }

        db.collection('rooms').doc(roomId)
        .collection('messages')
        .orderBy('timestamp','asc')
        .onSnapshot(
            (snapshot) => {
                setRoomMessages(snapshot.docs.map((doc) => doc.data()));
            }
        )


    },[roomId]);

    console.log(roomDetails);
    console.log("Messages ",roomMessages);

    return (
        <div className="chat">
            <div className="chat__header">
                <div className="chat__headerLeft">
                    <h4 className="chat__channelName">
                        <strong># {roomDetails?.name} </strong>
                        <StarBorderIcon />
                    </h4>

                </div>
                <div className="chat__headerRight">
                    <p>
                        <InfoOutlinedIcon /> Details
                    </p>
                </div>
            </div>
            <div className="chat__messages">

                {roomMessages.map(({message,timestamp,userImage,user }) => (

                    <Message
                
                    message={message}
                    timestamp={timestamp}
                    userImage={userImage}
                    user={user}    
                    
                    />
                ))}
            </div>

            <ChatInput  channelName={roomDetails?.name}  channelId={roomDetails?.roomId} />
        </div>
    )
}

export default Chat
