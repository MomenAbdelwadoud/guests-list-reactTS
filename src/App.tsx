import React from 'react';
import AttendeeList from './components/AttendeeList';
import useAttendee from './useAttendee';

function App() {
  const [attendees,addAttendee] = useAttendee()
  return (
    <div className="App">
    <AttendeeList 
    attendees={attendees}
    addAttendee={addAttendee}></AttendeeList>

    </div>
  );
}

export default App;
