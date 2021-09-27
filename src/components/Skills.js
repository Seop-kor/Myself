import React from 'react';

export default function Skills(){
  return (
    <section id='skills'>
      <div className='skills'>
        <h1>Skills</h1>
        <div className='card'>
          <div className='card-content'>
            <h4>HTML</h4>
            <div className="card-img-list">
              <div>
                <img src="./img/html5.png" alt="html"></img>
                HTML
              </div>
              <div>
                <img src="./img/reactjs.png" alt="JSX"></img>
                JSX
              </div>
              <div>
                <img src="./img/thymeleaf.png" alt="Thymeleaf"></img>
                Thymeleaf
              </div>
            </div>
          </div>
        </div>
        
        <div className='card'>
          <div className='card-content'>
            <h4>CSS</h4>
            <div className="card-img-list">
              <div>
                <img src="./img/css.png" alt="css"></img>
                CSS
              </div>
              <div>
                <img src="./img/sass.png" alt="sass"></img>
                SASS
              </div>
              <div>
                <img src="./img/bootstrap.png" alt="bootstrap"></img>
                Bootstrap
              </div>
            </div>
          </div>
        </div>

        <div className='card'>
          <div className='card-content'>
            <h4>Javascript</h4>
            <div className="card-img-list">
              <div>
                <img src="./img/javascript.png" alt="javascript"></img>
                JAVASCRIPT
              </div>
              <div>
                <img src="./img/reactjs.png" alt="react"></img>
                REACT
              </div>
              <div>
                <img src="./img/jquery.png" alt="jquery"></img>
                jQuery
              </div>
            </div>
          </div>
        </div>

        <div className='card'>
          <div className='card-content'>
            <h4>BackEnd</h4>
            <div className="card-img-list">
              <div>
                <img src="./img/springboot.png" alt="spring boot"></img>
                Spring Boot
              </div>
              <div>
                <img src="./img/php.png" alt="php"></img>
                PHP
              </div>
              <div>
                <img src="./img/mysql.png" alt="mysql"></img>
                MYSQL
              </div>
              <div>
                <img src="./img/mongodb.png" alt="mongodb"></img>
                MONGODB
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}