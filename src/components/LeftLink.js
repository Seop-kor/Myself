import React from 'react';
import { Link } from 'react-router-dom';

export default function LeftLink({path, isDisplay, onclick, location}){
  let dataCon = path.slice(1);
  let displayed;
  if(dataCon === ''){
    dataCon = "about";
  }
  if(!isDisplay){
    displayed = 'none';
  }
  // const next = path === '/' ? '#about' : path === '/project' ? '#projects' : '#skills';
  const prev = location.pathname === '/' ? '#about' : location.pathname === '/project' ? '#projects' : '#skills';
  return (
    <div className="section-controller-left-wrapper" style={{display: displayed}}>
      <Link to={path} className="section-controller-left" data-con={dataCon} onClick={onclick.bind(this, prev)}>
        <span></span>
        <span></span>
      </Link>
    </div>
  );
}

// activeStyle={{
//   animation: 'rotateCubeRightIn 0.6s ease-in both', transformOrigin: '100% 50%'
// }}