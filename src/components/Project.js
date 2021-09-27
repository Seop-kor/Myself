import React, {useState, useRef, useEffect} from 'react';
import IsoTopeGrid from "react-isotope";
import axios from 'axios';

const filtersDefault = [
  { label: "all", isChecked: true },
  { label: "FrontEnd", isChecked: false },
  { label: "BackEnd", isChecked: false },
  { label: "HTML5", isChecked: false },
  { label: "CSS", isChecked: false },
  { label: "Thymeleaf", isChecked: false },
  { label: "Javascript", isChecked: false },
  { label: "jQuery", isChecked: false },
  { label: "ReactJS", isChecked: false },
  { label: "Redux", isChecked: false },
  { label: "Spring Boot", isChecked: false },
  { label: "API", isChecked: false },
  { label: "PHP", isChecked: false },
  { label: "MongoDB", isChecked: false },
  { label: "Mysql", isChecked: false }
];

// const gridDefault2 = [
  // {
  //   id: 'seopstagram',
  //   filter: ['HTML5', 'CSS', 'Javascript', 'Thymeleaf', 'Spring Boot']
  // }, // clone project
  // {
  //   id: 'reveal',
  //   filter: ['HTML5', 'CSS', 'Javascript', 'jQuery']
  // }, //practice
  // {
  //   id: 'todo',
  //   filter: ['HTML5', 'CSS', 'Javascript', 'jQuery', 'Mysql', 'PHP']
  // }, //Schedule project
  // {
  //   id: 'jomalone_renewal',
  //   filter: ['HTML5', 'CSS', 'Thymeleaf' ,'Javascript', 'jQuery', 'Mysql', 'Spring Boot']
  // }, //Renewal Project
  // {
  //   id: 'mammoth_renewal',
  //   filter: ['HTML5', 'CSS', 'jQuery']
  // }, //Renewal Project
  // {
  //   id: 'zay',
  //   filter: ['HTML5', 'CSS', 'Javascript', 'jQuery', 'Mysql', 'PHP']
  // }, //Database Project
  // {
  //   id: 'goCamping',
  //   filter: ['HTML5', 'CSS', 'ReactJS', 'Redux', 'Javascript', 'API']
  // }, //Redux Project
  // {
  //   id: 'portfolio',
  //   filter: ['HTML5', 'CSS', 'React', 'Javascript', 'Spring Boot', 'API']
  // }
// ];

export default function Project({history}){
  const [filters, updateFilters] = useState(filtersDefault);
  const [gridDefault, updateGrid] = useState([]);
  const [gridLayout, setGridLayout] = useState([]);
  const project = useRef(null);
  const projectAni = useRef(null);
  useEffect(() => {
    introaxios();
  }, [gridDefault]);
  let elementWidth = window.innerWidth;
  if(elementWidth < 1080){
    elementWidth /= 2;
  }else{
    elementWidth = 1080 / 2;
  }
  const onFilter = event => {
    const { target: {textContent, classList} } = event;
    classList.toggle("active");
    const checked = classList.contains("active");

    updateFilters(state => {
      return state.map(item => {
        if(item.label === textContent){
          return {
            ...item,
            isChecked: checked
          };
        }
        return item;
      });
    });
  };

  const introaxios = async () => {
    await axios.get('http://dbdlstjq930.cafe24.com/introproject/project').then((res) => {
      let temp = [];
      if(gridDefault.length === 0){
        res.data.forEach(item => {
          temp.push({
            id: item.name,
            filter: item.tech,
            projectComponent: item
          });
        });
        setGridLayout(temp);
        updateGrid(res.data);
      }
    }).catch((err) => {
      alert(err);
    });
  };
  // const elementWidth = document.querySelector("#projects .project").getBoundingClientRect().width / 2;
  return (
    <section id="projects" ref={projectAni}>
      <div className="project" ref={project}>
        <h1>Frontend Developer Portfolio</h1>
        <div className="project-lists">
          <div className="project-filter-menu">
            <ul>
              {filters.map(item => {
                let classNamed;
                item.isChecked ? classNamed = "btns active" : classNamed = "btns";
                return (<li className={classNamed} onClick={onFilter} key={item.label + "_key"}>{item.label}</li>);
              })}
            </ul>
          </div>
          <div className="project-list">
            <IsoTopeGrid gridLayout={gridLayout} filters={filters} noOfCols={2} unitWidth={elementWidth} unitHeight={400}>
              {gridLayout.map((item) => {
                return (
                <div key={item.id}>
                  <div className="project-content-wrap">
                    <div className="project-content-top">
                      <span />
                      <span />
                      <span />
                      <span className="project-content-top__title">
                        {item.id}
                      </span>
                    </div>
                    <div className="project-content__content" style={{background: `url(${item.projectComponent.imgurl[0]})`, backgroundSize: 'cover', backgroundPosition: 'center center', backgroundRepeat: 'no-repeat'}}>
                      <div className="project-content__content-overlay" style={{background: `url(${item.projectComponent.imgurl[1]})`, backgroundSize: 'cover', backgroundPosition: 'center center', backgroundRepeat: 'no-repeat'}}>
                        <div className="project-content__content-overlay-overlay"></div>
                        <div className="center">
                          <h1>{item.id}</h1>
                          <ul>
                            {item.filter.map(v => <li key={v}>
                              <img src={`./img/${v.toLowerCase().replace(' ', '')}.png`} alt={v}></img>
                            </li>)}
                          </ul>
                        </div>
                        {item.projectComponent.url.length === 1 ? <a href={item.projectComponent.url[0]} style={{bottom: '95px'}}>Git</a> : <><a href={item.projectComponent.url[0]} style={{bottom: '95px'}}>Git</a>
                        <a href={item.projectComponent.url[1]} style={{bottom: '60px'}}>Site</a></>}
                      </div>
                    </div>
                  </div>
                </div>);
              })}
            </IsoTopeGrid>
          </div>
        </div>
      </div>
      
    </section>
  );
}