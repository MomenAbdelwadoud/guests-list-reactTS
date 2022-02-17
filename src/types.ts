export interface Attendee { 
    name: string,
    age: number,
    permission: AttendeePermission
}
export enum AttendeePermission {
    Admitted,
    Refused,
    Banned,
    SpecialGuest
}