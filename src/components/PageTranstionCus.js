import React from 'react';
import {PageTransition} from '@steveeeie/react-page-transition';
import {Switch, Route} from 'react-router-dom';

import About from './About';
import Project from './Project';
import Skills from './Skills';
import Contact from './Contact';

//cubeToLeft, cubeToRight
function PageTransitionCus({location, history, preset}){
  return (
    <PageTransition preset={preset} transitionKey={location.pathname} className="page-trans" style={{overflowX: 'clip', overflowY: 'unset'}}>
      <Switch location={location}>
        <Route exact path="/" render={() => <About history={history} />} />
        <Route exact path="/project" render={() => <Project history={history} />} />
        <Route exact path="/skills" render={() => <Skills history={history} />} />
        <Route exact path="/contact" render={() => <Contact history={history} />} />
      </Switch>
    </PageTransition>
  );
}

export default PageTransitionCus;