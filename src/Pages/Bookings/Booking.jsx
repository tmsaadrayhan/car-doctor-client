import React from "react";

const Booking = ({ booking, handleDelete, handleBookingConfirm }) => {
  return (
    <tr>
      <th>
        {booking.status !== "confirm" && (
          <button
            onClick={() => handleDelete(booking._id, booking.title)}
            className="btn btn-sm btn-neutral btn-circle"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        )}
      </th>
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              {booking.img && <img src={booking.img} alt="Service Image" />}
            </div>
          </div>
          <div>
            <div className="font-bold">{booking.title}</div>
            <div className="text-sm">{booking.title}</div>
          </div>
        </div>
      </td>
      <td>{booking.date}</td>
      <td>{booking.price}</td>
      <th>
        {booking.status === "confirm" ? (
          <span className="font-bold text-primary"> Confirmed</span>
        ) : (
          <button
            onClick={() => handleBookingConfirm(booking._id)}
            className="btn btn-ghost btn-xs"
          >
            Confirm
          </button>
        )}
      </th>
    </tr>
  );
};

export default Booking;
