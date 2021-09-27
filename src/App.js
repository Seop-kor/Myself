import React, {useState} from 'react';
import { Route } from 'react-router-dom';


import PageTransitionCus from './components/PageTranstionCus';
import LeftLink from './components/LeftLink';
import RightLink from './components/RightLink';

const path = ['/', '/project', '/skills', '/contact'];

// console.log(React.createElement(Transition, {key: 'a', timeout: 600}));

function App() {
  const [preset, setPreset] = useState("cubeToLeft");
  const onClickLeft = () => {
    setPreset("cubeToRight");
  };
  
  const onclickRight = () => {
    setPreset("cubeToLeft");
  };
  return (
    <>
    <Route render={({location, history}) => {
      // console.log(location.state);
      const leftIsDisplay = location.pathname === '/' ? false : true;
      const rightIsDisplay = location.pathname === '/contact' ? false : true;
      const pathFilter = path.filter(item => item !== location.pathname);
      console.log(pathFilter);
      const leftIdx = (path.indexOf(location.pathname) + (pathFilter.length - 1)) % pathFilter.length;
      const rightIdx = path.indexOf(location.pathname) % pathFilter.length;
      return (
        <>
        <LeftLink path={pathFilter[leftIdx]} isDisplay={leftIsDisplay} onclick={onClickLeft} location={location} />
        <PageTransitionCus location={location} history={history} preset={preset} />
        <RightLink path={pathFilter[rightIdx]} isDisplay={rightIsDisplay} onclick={onclickRight} location={location} />
        </>
      );
    }} />
    </>
  );
}

export default App;