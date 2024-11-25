'use client'

import { useEffect } from "react";

const WebDefaultBgColor = () => {
    useEffect(()=>{
        document.body.style.backgroundColor= '#F0F3E5'
    })

  return (
    // document.body.style.backgroundColor = ''
    null
  )
};

export default WebDefaultBgColor;
