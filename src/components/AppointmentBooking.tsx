import React, { useState, useEffect } from "react";
import { checkAvailabilityAndBook, getAvailableSlots } from "../firebase/firebaseFunctions";

const AppointmentBooking: React.FC = () => {
  const [date, setDate] = useState<string>("");
  const [timeSlot, setTimeSlot] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [availableSlots, setAvailableSlots] = useState<string[]>([]);

  // Fetch available slots when date changes
  useEffect(() => {
    if (date) {
      getAvailableSlots(date).then(setAvailableSlots);
    }
  }, [date]);

  const handleBooking = async () => {
    if (!date || !timeSlot) {
      setMessage("Please select a date and time slot.");
      return;
    }

    const response = await checkAvailabilityAndBook("user123", date, timeSlot);
    setMessage(response.message);
    
    // Refresh available slots after booking
    getAvailableSlots(date).then(setAvailableSlots);
  };

  return (
    <div>
      <h2>Book an Appointment</h2>
      
      <input 
        type="date" 
        value={date} 
        onChange={(e) => setDate(e.target.value)} 
      />
      
      <select 
        value={timeSlot} 
        onChange={(e) => setTimeSlot(e.target.value)}
      >
        <option value="">Select Time Slot</option>
        {availableSlots.map((slot) => (
          <option key={slot} value={slot}>{slot}</option>
        ))}
      </select>

      <button onClick={handleBooking}>Book</button>

      {message && <p>{message}</p>}
    </div>
  );
};

export default AppointmentBooking;
