import React ,{useState} from 'react';
import {Button} from '@material-ui/core';
import db from './Firebase';
import {useStateValue} from './StateProvider';
import firebase from './Firebase';

function ChatInput({channelName,channelId}) {

    const [input,setInput]=useState('');
    const [{user}] = useStateValue();

    const sendMessage = (e) => {

        e.preventDefault();
        if(channelId){

                db.collection('rooms').doc(channelName).collection({

                    message: input,
                    timestamp : 'Wed, 14 Jul 2021 04:50:00 GMT',
                    user : user.displayName,
                    userImage : user.photoURL,
                })
        }
    }

    return (
        <div className="chatInput">
            <form>
                <input 
                value={input}
                placeholder={channelId}
                onChange={e => setInput(e.target.value)} />
                <Button type="submit" onClick={sendMessage} > Send Message </Button>
            </form>
            
        </div>
    )
}

export default ChatInput
