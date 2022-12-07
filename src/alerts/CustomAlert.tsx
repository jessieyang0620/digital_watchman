import React, { useState } from 'react';
import { Alert, Button } from 'react-bootstrap';

export interface CustomAlertProps {
    show: boolean,
    msg: string,
    variant: string,
    onAcknowledge: () => void
}

function CustomAlert(props: CustomAlertProps) {
    return (
        <div className="d-flex flex-column align-items-center justify-content-center">
            <Alert show={props.show} variant={props.variant} className="w-75">   
        {props.msg}
        <hr/>
        <div className="d-flex justify-content-end">
            <Button 
                onClick={props.onAcknowledge} 
                variant={`outline-${props.variant}`}>
            Acknowledge
            </Button>
        </div>
        </Alert>
        </div>
        
    )
}

export default CustomAlert;