import React,{useState} from "react";



const FrameNav = () => {
  const [txt,setTxt]=useState('123')
  function test(e){
    setTxt(e)
  }
  return <div className={"frame-nav"} contentEditable="true" onChange={()=>test()}>{txt}</div>;
};

export default FrameNav