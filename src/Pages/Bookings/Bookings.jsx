import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import Booking from "./booking";
import { useNavigate } from "react-router-dom";

const Bookings = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [bookings, setBookings] = useState([]);
  useEffect(() => {
    fetch(`https://car-doctor-server-p2jz.onrender.com/bookings?email=${user?.email}`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("car-access-token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (!data.error) {
          setBookings(data);
        }
        else {
            navigate("/");
        }
      });
  }, []);
  const handleDelete = (id, title) => {
    const proceed = confirm(`Are you sure you want to cancel "${title}"?`);
    if (proceed) {
      fetch(`https://car-doctor-server-p2jz.onrender.com/bookings/${id}`, { method: "DELETE" })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            alert("Deleted successfully");
            setBookings(bookings.filter((booking) => booking._id !== id));
          }
        });
    }
  };
  const handleBookingConfirm = (id) => {
    fetch(`https://car-doctor-server-p2jz.onrender.com/bookings/${id}`, {
      method: "PATCH",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ status: "confirm" }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          bookings.find((booking) => booking._id === id).status = "confirm";
          setBookings([
            bookings.find((booking) => booking._id === id),
            ...bookings.filter((booking) => booking._id !== id),
          ]);
        }
      });
  };
  return (
    <div className="overflow-x-auto backdrop-blur-md bg-white/40 rounded-xl">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>
              
            </th>
            <th>Service Name</th>
            <th>Date</th>
            <th>Amount Due($)</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((booking) => (
            <Booking
              key={booking._id}
              booking={booking}
              handleDelete={handleDelete}
              handleBookingConfirm={handleBookingConfirm}
            ></Booking>
          ))}
        </tbody>
        {/* foot */}
        <tfoot>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Job</th>
            <th>Favorite Color</th>
            <th></th>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default Bookings;
