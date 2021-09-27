import React, {useEffect, useRef} from 'react';
import {typeEffect} from '../module/firstService';

function About({ani}){
  const typewrit = useRef(null);
  const aboutAni = useRef(null);
  useEffect(() => {
    const info = ["안녕하세요.<span class='hand'>👋</span><br>", "저는 프론트엔드 개발자 유인섭입니다."];
    const about = new typeEffect(info, typewrit.current);
    about.startType(0);
    // console.log(aboutAni.current.parentElement);
    // aboutAni.current.parentElement.style.animation = 'rotateCubeRightOut 0.6s ease-in both';
    // aboutAni.current.parentElement.style.transformOrigin = '0% 50%';
    //여기까지 진행 근데 안됨
  }, []);
  return (
    <section id="about" ref={aboutAni}>
      <div className="console-input">
        <span className="blink" ref={typewrit}></span>
      </div>
    </section>
  );
}

export default About;