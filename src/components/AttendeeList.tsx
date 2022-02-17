import React from 'react'
import { Attendee } from '../types'
import { addAttendeeFunction } from '../useAttendee'
import AttendeeInformation from './AttendeeInformation'
import CreateAttendee from './CreateAttendee'

interface AttendeeListProps {
    attendees: Attendee[],
    addAttendee: addAttendeeFunction
}
export default function AttendeeList(props:AttendeeListProps) {
  return (
    <div className='AttendeeList'>
        {props.attendees.map(attendee => <AttendeeInformation attendee={attendee}></AttendeeInformation>)}
        <br/>
        <CreateAttendee addAttendee= {props.addAttendee}></CreateAttendee>
    </div>
  )
}
