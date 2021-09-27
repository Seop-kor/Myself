import React from 'react';
import { Link } from 'react-router-dom';

export default function RightLink({path, isDisplay, onclick, location}){
  let dataCon = path.slice(1);
  if(dataCon === ''){
    dataCon = "about";
  }
  let displayed
  if(!isDisplay){
    displayed = 'none';
  }
  return (
    <div className="section-controller-right-wrapper" style={{display: displayed}}>
      <Link to={{pathname: path, state: {from: location.pathname}}} className="section-controller-right" data-con={dataCon} onClick={onclick}>
        <span></span>
        <span></span>
      </Link>
    </div>
  );
}