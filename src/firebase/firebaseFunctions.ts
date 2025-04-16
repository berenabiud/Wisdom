import { collection, query, where, getDocs, addDoc, deleteDoc, doc } from "firebase/firestore";
import { db } from "./firebaseConfig";

// Define the Appointment type
interface Appointment {
  userId: string;
  date: string;
  timeSlot: string;
  status: string;
}

// Check if the selected slot is available and book it
export const checkAvailabilityAndBook = async (
  userId: string, 
  date: string, 
  timeSlot: string
): Promise<{ success: boolean; message: string }> => {
  try {
    const appointmentsRef = collection(db, "appointments");

    // Check if the slot is already booked
    const q = query(appointmentsRef, where("date", "==", date), where("timeSlot", "==", timeSlot));
    const querySnapshot = await getDocs(q);

    if (!querySnapshot.empty) {
      return { success: false, message: "Time slot already booked!" };
    }

    // Book the appointment
    const appointment: Appointment = { userId, date, timeSlot, status: "booked" };
    await addDoc(appointmentsRef, appointment);

    return { success: true, message: "Appointment booked successfully!" };
  } catch (error) {
    return { success: false, message: "Error booking appointment." };
  }
};

// Fetch available time slots for a given date
export const getAvailableSlots = async (date: string): Promise<string[]> => {
  const allSlots: string[] = ["9:00 AM", "10:00 AM", "11:00 AM", "2:00 PM", "3:00 PM"];
  
  const bookedSlotsQuery = query(collection(db, "appointments"), where("date", "==", date));
  const snapshot = await getDocs(bookedSlotsQuery);

  const bookedSlots: string[] = snapshot.docs.map(doc => doc.data().timeSlot);
  return allSlots.filter(slot => !bookedSlots.includes(slot));
};

// Cancel an appointment
export const cancelAppointment = async (appointmentId: string): Promise<{ success: boolean; message: string }> => {
  try {
    await deleteDoc(doc(db, "appointments", appointmentId));
    return { success: true, message: "Appointment canceled." };
  } catch (error) {
    return { success: false, message: "Error canceling appointment." };
  }
};
