import React, { useState } from 'react';
import EmployeeDashboard from './EmployeeDashboard';
import EmployeeData from './EmployeeData';
import LoginBoss from './LoginBoss';

enum BossViews {
    Login, EmployeeDashboard, EmployeeData
}
function BossFlow() {
    const [view, setView] = useState(BossViews.Login);

    switch (view) {
        case BossViews.Login:
            return <LoginBoss onClick={() => setView(BossViews.EmployeeDashboard)}/>
        case BossViews.EmployeeDashboard:
            return <EmployeeDashboard onClick={() => setView(BossViews.EmployeeData)} />
        case BossViews.EmployeeData:
            return <EmployeeData />
    }
}

export default BossFlow;