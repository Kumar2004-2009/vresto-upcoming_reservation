import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import initialData from "./dummy_data/data";
import ReservationCard from "./components/ReservationCard";
import Navbar from "./components/Navbar";
import AddReservationModal from "./components/AddReservationModal";

function App() {
 const getInitialDarkMode = () => {
  const saved = localStorage.getItem('darkMode');
  return saved === 'true';
};

  const [darkMode, setDarkMode] = useState(getInitialDarkMode);

  const [reservationsData, setReservationsData] = useState([]);
  const [showAddModal, setShowAddModal] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  useEffect(() => {
    const savedReservations = localStorage.getItem("reservations");
    setReservationsData(
      savedReservations ? JSON.parse(savedReservations) : initialData
    );
  }, []);

  useEffect(() => {
    if (reservationsData.length > 0) {
      localStorage.setItem("reservations", JSON.stringify(reservationsData));
    }
  }, [reservationsData]);

  const handleCancel = (id) => {
    const updatedReservations = reservationsData.filter((res) => res.id !== id);
    setReservationsData(updatedReservations);
    toast.success("Reservation cancelled successfully!");
  };

  const toggleDarkMode = () => setDarkMode(!darkMode);

  const handleAddReservation = (newReservation) => {
    const newId = Math.max(...reservationsData.map((r) => r.id), 0) + 1;
    const updatedReservations = [
      ...reservationsData,
      { ...newReservation, id: newId, status: "Pending" },
    ];
    setReservationsData(updatedReservations);
    setShowAddModal(false);
    toast.success("New reservation added!");
  };

  return (
    <div className="min-h-screen bg-primary text-primary transition-colors duration-300">
      <Navbar
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
        onAddReservation={() => setShowAddModal(true)}
      />

      <main className="p-4 sm:p-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-2xl sm:text-3xl font-bold mb-6">
            Upcoming Reservations
          </h1>
          <div className="space-y-4">
            {reservationsData.length > 0 ? (
              reservationsData.map((res) => (
                <ReservationCard
                  key={res.id}
                  {...res}
                  onCancel={handleCancel}
                />
              ))
            ) : (
              <div className="text-center py-10">
                <p className="text-secondary">No upcoming reservations found</p>
              </div>
            )}
          </div>
        </div>
      </main>

      {showAddModal && (
        <AddReservationModal
          onClose={() => setShowAddModal(false)}
          onSubmit={handleAddReservation}
        />
      )}

      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme={darkMode ? "dark" : "light"}
      />
    </div>
  );
}

export default App;
