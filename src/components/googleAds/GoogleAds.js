import {React, useEffect} from 'react'

const GoogleAds = () => {

    useEffect(()=>{
        (window.adsbygoogle = window.adsbygoogle || []).push({})
    },[])
  return (
    <ins className='adsbygoogle'
    style={{display:'block'}}
    data-ad-client={}
    data-ad-slot={this.props.slot}
    data-ad-format= 'auto'
    data-full-width-responsive="true"

    >

    </ins>
  )
}

export default GoogleAds