import React from 'react';
import { Stack } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

export interface EmployeeDashboardProps {
    onClick: () => void
}
function EmployeeDashboard(props: EmployeeDashboardProps) {
    return (
        <Stack gap={3} className="d-flex flex-column vh-100 align-items-center justify-content-center">
            <h1>Employee Stats</h1>
            <Card 
                style={{ width: '18rem' }}
                onClick={props.onClick}>
            <Card.Body>
                <Card.Title>John Doe</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Mechanical Turk Worker II</Card.Subtitle>
                <Card.Text>
                    Click to view Employee Stats.
                </Card.Text>
            </Card.Body>
            </Card>
        </Stack>
    )
}

export default EmployeeDashboard;