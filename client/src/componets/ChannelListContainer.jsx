import React, {useState}from 'react'
import { ChannelList,useChatContext} from 'stream-chat-react'
import { ChannelSearch ,TeamChannelList,TeamchannelPreview} from './'
import Cookies from 'universal-cookie'
import hospital from "../assests/hospital.png";
import Logout from "../assests/logout.png";
import '../App.css'
import { initialState } from 'stream-chat-react/dist/components/Channel/channelState';
const cookies = new Cookies()
const SideBar = ({logout}) =>{
  return(
  <div className='channel-list__sidebar'>
    <div className='channel-list__sidebar__icon1'>
      <div className='icon1__inner'>
        <img src={hospital} alt='Hospital' width="30" />
      </div>
    </div>
    <div className='channel-list__sidebar__icon2'>
      <div className='icon1__inner' onClick={logout}>
        <img src={Logout} alt='logout' width="30" />
      </div>
    </div>
  </div>
  )

}
const CompanyHeader = ()=> (

  <div className='channel-list__header'>
    <p className='channel-list__header__text'>Medical Header gdf</p>
  </div>
  );
  
const  customChannelTeamFilter=(channnels)=>{
  return channnels.filter((channel)=>channel.type==='team')

}
const  customChannelMessageFilter=(channnels)=>{
  return channnels.filter((channel)=>channel.type==='messaging')
  
}

const ChannelListContent = ({isCreating,setIsCreating,setCreateType,setIsEditing,settoggleContainer})=>{
  const {client} = useChatContext()
  const logout =()=>{
    cookies.remove("token");
        cookies.remove('userId');
        cookies.remove('username');
        cookies.remove('fullName');
        cookies.remove('avatarURL');
        cookies.remove('hashedPassword');
        cookies.remove('phoneNumber');

        window.location.reload();
  }
  const filters={members :{$in:[client.userID]}}
  return (
    <>
    < SideBar logout={logout}/>
   <div className='channel-list__list__wrapper'>
    <CompanyHeader/>
   <div className='channel-list__header'>
    <p className='channel-list__header__text'>Medical Pager</p>
  </div>
  <ChannelSearch settoggleContainer={settoggleContainer} />
  <ChannelList
  filters={filters}
  channelRenderFilterFn={ customChannelTeamFilter}
  List={(listProps)=> (
    <TeamChannelList
    {...listProps}
    type="team"
    isCreating={isCreating}
    setIsCreating={setIsCreating}
    setCreateType={setCreateType}
    setIsEditing={setIsEditing}
    settoggleContaine={settoggleContainer}
    />
  )}
 
 preview={(previewProps)=>(
   <TeamchannelPreview 
   {...previewProps}
     settoggleContainer={settoggleContainer}
   type="team"
   />
 )}
 />
 <ChannelList
  filters={filters}
  channelRenderFilterFn={customChannelMessageFilter}
  List={(listProps)=> (
    <TeamChannelList
    {...listProps}
    type="messaging"
    isCreating={isCreating}
    setIsCreating={setIsCreating}
    setCreateType={setCreateType}
    setIsEditing={setIsEditing}
    settoggleContaine={settoggleContainer}
    />
  )}
 
 preview={(previewProps)=>(
   <TeamchannelPreview 
   {...previewProps}
   setIsCreating={setIsCreating}
   setIsEditing={setIsEditing}
   settoggleContaine={settoggleContainer}
   type="messaging"
   />
 )}
 />
    </div>
  </>
  );
}
const ChannelListContainer =({setCreateType,setIsCreating,setIsEditing})=>{
       const {toggleContainer,settoggleContainer}=useState(false)
       return(
        <><div className='channel-list__container'>
          <ChannelListContent
            setIsCreating={setIsCreating}
            setCreateType={setCreateType}
            setIsEditing={setIsEditing}
            />
        </div>
        <div className='channel-list__container-responsive'
          style={{left:toggleContainer?"0%":"-89%",backgroundColor:"#005fff"}}    >  
          <div className='channel-list__container-toggle' onClick={()=>settoggleContainer((prevToggleContainer)=>!prevToggleContainer)}>
          </div>
          <ChannelListContent
          setIsCreating={setIsCreating}
            setCreateType={setCreateType}
            setIsEditing={setIsEditing}
            settoggleContainer={settoggleContainer}
          />
          </div>
        </>
       )

}
export default ChannelListContainer
