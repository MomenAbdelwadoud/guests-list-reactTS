import { useState } from "react";
import { Attendee,AttendeePermission } from "./types";

const initialAttendee : Attendee[] = [{name:"Momen",age:20,permission:AttendeePermission.SpecialGuest},{name:"John",age:30,permission:AttendeePermission.Admitted}]

export type addAttendeeFunction = (attendee:Attendee) => void

 const useAttendee = (): [Attendee[],addAttendeeFunction] =>{
     const [attendees, setAttendees] = useState(initialAttendee)
     const addAttendee = (attendee:Attendee) =>{
         setAttendees([...attendees,attendee])
     }
     return [attendees,addAttendee]
 }

 export default useAttendee