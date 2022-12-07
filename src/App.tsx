import React, { useEffect, useState } from 'react';
import CustomAlert from './alerts/CustomAlert';
import './App.css';
import BossFlow from './boss/BossFlow';
import AboutPage from './info/AboutPage';
import InfoPage from './info/InfoPage';
import TopNavbar from './navbar/TopNavbar';
import WelcomeFlow from './welcome/WelcomeFlow';
import WorkerFlow from './worker/WorkerFlow';

export enum Views {
  WelcomeFlow,
  Worker,
  Boss, 
  Info,
  About
}

interface ViewControllerProps {
  view: Views,
  setView: (v: Views) => void,
  linkClicked: boolean,
  setDoneWorker: () => void
}

function App() {
  const [view, setView] = useState(Views.WelcomeFlow);
  const [doneWorker, setDoneWorker] = useState(false); // cannot see any other views without completing worker
  const [linkClicked, setLinkClicked] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const handleClickedNavLink = (v: Views) => {
    if (doneWorker) {
      setView(v);
    } else {
      // alert("This page is locked until you complete ");
      setShowAlert(true);
    }
  }
  return (
    <div className='vh-100'>
      <TopNavbar 
        loggedInAs={view} 
        clickedInfo={() => {handleClickedNavLink(Views.Info)}} 
        clickedAbout={() => {handleClickedNavLink(Views.About)}}/>
      <CustomAlert 
        show={showAlert}
        msg="Warning: This page is locked until you complete the Employee View simulation." 
        variant='warning' 
        onAcknowledge={() => {setShowAlert(false)}} />
      <ViewController view={view} setView={setView} linkClicked={linkClicked} setDoneWorker={() => setDoneWorker(true)} />
      
    </div>
  )
}

// there literally has to be a cleaner way to do this??
function ViewController(props: ViewControllerProps) {
  switch (props.view) {
    case Views.WelcomeFlow:
      return <WelcomeFlow onClick={() => {props.setView(Views.Worker)}} />
    case Views.Worker:
      return <WorkerFlow clickedNavLink={props.linkClicked} onWorkerFlowComplete={() => {
        props.setView(Views.Boss);
        props.setDoneWorker();
      }}/>
    case Views.Boss:
      return <BossFlow />
    case Views.Info:
      return <InfoPage />
    case Views.About:
      return <AboutPage />
  }
}

export default App;
