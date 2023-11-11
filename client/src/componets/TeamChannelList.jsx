 import React from 'react'
 import { AddChannel } from '../assests/AddChannel'
 const TeamChannelList = ({settoggleContainer,children ,error= false,loading,type,isCreating,setIsCreating,setCreateType,setIsEditing}) => {
   if(error){
    return type ==='team' ?(
        <div className='team-channel-list'>
            <p className='team-channel-list__meassage'>
                connection error please wait a moment... try again
            </p>
        </div>
    ):null
 }
 if(loading){
    return(
        <div className='team-channel-list'>
        <p className='team-channel-list__meassage loading'>
            {type==='team' ? 'channels':'Messages'} loading...
        </p>
    </div>
    )
 }
 return(
    <div className='team-channel-list'>
        <div className='team-channel-list__header'>
        <p className='team-channel-list__header__title'>
            {type ==='team'? "channels": "Direct Messages"}
        </p>
        <AddChannel 
           isCreating={isCreating}
           setIsCreating={setIsCreating}
           setCreateType={setCreateType}
           setIsEditing={setIsEditing}
           type={type==='team' ? 'team':'messaging'}
           settoggleContaine={settoggleContainer}
        
        />
        </div>
        {children}
    </div>
 )

}
 
 export default TeamChannelList
 