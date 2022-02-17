import React, {useState} from 'react'
import { AttendeePermission } from '../types'
import { addAttendeeFunction } from '../useAttendee'

interface CreateAttendeeProps{
  addAttendee: addAttendeeFunction
}
const permissionsOptions:Record<string,AttendeePermission> = {
  'Admitted': AttendeePermission.Admitted,
  'Banned': AttendeePermission.Banned,
  'Refused': AttendeePermission.Refused,
  'SpecialGuest': AttendeePermission.SpecialGuest,
}
const permissionKeys = Object.keys(permissionsOptions)
export default function CreateAttendee(props:CreateAttendeeProps) {
  const [name, setName] = useState('')
  const [age, setAge] = useState(0)
  const [permission, setPermission] = useState(permissionKeys[0])

  const save = () => { 
    props.addAttendee({name,age,permission: permissionsOptions[permission]})
   }
  return (
     <div>
            <input
                value={name}
                onChange={e => setName(e.target.value)}
                placeholder="Enter name"
            />
            <br />
            <input
                value={age}
                type="number"
                onChange={e => setAge(Number(e.target.value))}
                placeholder="Enter age"
            />
            <br />
            <select value={permission} onChange={e => setPermission(e.target.value)}>
                {permissionKeys.map(perm => (
                    <option value={perm}>
                        {perm}
                    </option>
                ))}
            </select>
            <br />
            <button onClick={save}>
                Save
            </button>
        </div>
  )
}
