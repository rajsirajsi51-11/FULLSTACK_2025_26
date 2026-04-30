import React from 'react';
function UserProfile({username}){
  return(
    <div>
      <h1>User:</h1>{username}
    </div>
  );
}
function Icon({username}){
  return(
    <div>
      <UserProfile username={username}/>
    </div>
  );
}
function Header({username}){
  return(
    <div>
        <Icon username={username}/>
    </div>
  );
}
export default function App(){
  return(
    <div>
      <Header username="Rajsi"/>
    </div>
  );
}