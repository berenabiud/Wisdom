import React, { useState } from "react";
import Swal from "sweetalert2";
import { db, collection, addDoc, query, where, getDocs } from "../firebase/firebaseConfig";
import axios from "axios";

const AppointmentForm: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  // Function to check if appointment exists
  const checkAvailability = async (date: string, time: string) => {
    const q = query(collection(db, "appointments"), where("date", "==", date), where("time", "==", time));
    const querySnapshot = await getDocs(q);
    return querySnapshot.empty; // Returns true if no matching records found
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Check if the slot is available
    const isAvailable = await checkAvailability(date, time);
    if (!isAvailable) {
      Swal.fire("Oops!", "This appointment slot is already booked!", "error");
      return;
    }

    try {
      // Save appointment to Firestore
      await addDoc(collection(db, "appointments"), { name, email, date, time });

      // Send email notification
      await axios.post("http://localhost:5000/send-email", { name, email, date, time });

      // Success message
      Swal.fire("Success!", "Your appointment has been booked.", "success");

      // Clear form
      setName("");
      setEmail("");
      setDate("");
      setTime("");
    } catch (error) {
      Swal.fire("Error!", "Something went wrong. Try again.", "error");
    }
  };

  return (
    <div>
      <h2>Book Appointment</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
        <input type="time" value={time} onChange={(e) => setTime(e.target.value)} required />
        <button type="submit">Book Appointment</button>
      </form>
    </div>
  );
};

export default AppointmentForm;
