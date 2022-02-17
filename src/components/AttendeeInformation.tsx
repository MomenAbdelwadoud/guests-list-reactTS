import React from 'react'
import { Attendee, AttendeePermission } from '../types'

interface AttendeeInformationProps {
    attendee: Attendee
}

const getBackgroundColor = (status:AttendeePermission) => { 
    switch (status) {
        case AttendeePermission.Admitted:     
        return "green"
            
        case AttendeePermission.Banned:
            return "grey"
            
        case AttendeePermission.Refused:
            return "red"
            
        case AttendeePermission.SpecialGuest:
            return "gold"
            
    
    }
 }
export default function AttendeeInformation(props:AttendeeInformationProps) {
  return (
    <div style={{backgroundColor: getBackgroundColor(props.attendee.permission)}}>
        {props.attendee.name + " | " +props.attendee.age}
    </div>
  )
}
