import React, { useEffect, useState } from 'react'
import './Sidebar.css'
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import MenuIcon from '@material-ui/icons/Menu';
import MessageIcon from '@material-ui/icons/Message';
import SidebarOption from './SidebarOption';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import DeviceHubIcon from '@material-ui/icons/DeviceHub';
import AppsIcon from '@material-ui/icons/Apps';
import MailIcon from '@material-ui/icons/Mail';
import FolderIcon from '@material-ui/icons/Folder';
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import db from './Firebase';
import {useStateValue} from './StateProvider';


function Sidebar(){

    const [{user}] =useStateValue();

    const [channels,setChannels] = useState([]);

    useEffect(() => {
       db.collection('rooms').onSnapshot(snapshot => {
           setChannels(
               snapshot.docs.map(
                   doc =>({
                       id: doc.id,
                       name: doc.data().name,
                   })
               )
            )
       })
    }, [])

        return (
            <div className="sidebar">
                <div className="sidebar_header">
                   <div className="sidebar_info">
                        <h2> Class Name Here</h2>
                        <h3 className="username__section">
                            <FiberManualRecordIcon className="onlineIcon"/>
                            {user?.displayName}
                         </h3>
                   </div>
                  <EditIcon />
                </div>


                <div className="sidebar__middle">

                <SidebarOption Icon={MailIcon} title="Mail Inbox" />
                <SidebarOption Icon={MessageIcon} title="Messages" />
                <SidebarOption Icon={AlternateEmailIcon} title="Mention" />
                <SidebarOption Icon={DeviceHubIcon} title="Classes" />
                {channels.map(channel => (
                    <SidebarOption title={channel.name} id={channel.id} />
                ))}
            
                { /* <SidebarOption  Icon={FolderIcon} title="Files"/>
                <SidebarOption Icon={AccountBalanceWalletIcon} title="Jobs" />
                <SidebarOption Icon={AppsIcon} title="Apps" /> */}
                <hr />
                <SidebarOption Icon={AddIcon} addChannelOption title="Class Room" />
                </div>

              
                
                <div className="sidebar__bottom">

                <SidebarOption Icon={ExitToAppIcon} title="Logout" />

                </div>

            </div>

        )
    }


export default Sidebar
