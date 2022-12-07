import React, { useState } from 'react';
import Login from './Login';
import Welcome from './Welcome';
import WelcomeMessage from './WelcomeMessage';

enum WelcomeFlowViews {
    Welcome,
    WelcomeInfo,
    Login
}

// used for Welcome, WelcomeInfo, and Login components
export interface WelcomeFlowProps { 
    onClick: () => void
}

function WelcomeFlow(props: WelcomeFlowProps) {
    const [view, setView] = useState(WelcomeFlowViews.Welcome);
    switch(view) {
        case WelcomeFlowViews.Welcome: {
          return (
            <Welcome onClick={() => setView(WelcomeFlowViews.WelcomeInfo)}/>
          )
        }
        case WelcomeFlowViews.WelcomeInfo: {
          return (
            <WelcomeMessage onClick={() => setView(WelcomeFlowViews.Login)}/>
          )
        }
        case WelcomeFlowViews.Login: {
          return (
            <Login onClick={props.onClick}/>
          )
        }
    }
}

export default WelcomeFlow;
