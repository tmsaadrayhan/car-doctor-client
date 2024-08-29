import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";

const BookService = () => {
  const { title, _id, img } = useLoaderData();
  const { user } = useContext(AuthContext);
  const handleBookService = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const date = form.date.value;
    const email = form.email.value;
    const price = form.price.value;
    const booking = {
      customerName: name,
      title,
      email,
      date,
      img,
      service: _id,
      price: price,
    };
    console.log(booking);
    fetch("https://car-doctor-server-w4gr.vercel.app/bookings", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          alert("Service booked successfully!");
        }
      });
  };
  return (
    <div>
      <div className="backdrop-blur-md bg-white/40 rounded-xl p-2">
        <h2 className="font-bold text-2xl text-center">
          Book Service: {title}
        </h2>
      </div>

      <div className="hero-content flex-col lg:flex-row-reverse w-full">
        <div className="card shrink-0 w-full shadow-2xl backdrop-blur-md bg-white/40 rounded-xl">
          <form onSubmit={handleBookService} className="card-body">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="form-control">
                <label className="label">
                  <span>Name</span>
                </label>
                <input
                  type="text"
                  placeholder="name"
                  name="name"
                  defaultValue={user?.displayName}
                  className="input bg-white  input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span>Date</span>
                </label>
                <input
                  type="date"
                  name="date"
                  className="input bg-white  input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span>Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  defaultValue={user?.email}
                  className="input bg-white  input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span>Deu amount($)</span>
                </label>
                <input
                  type="text"
                  name="price"
                  placeholder="price"
                  className="input bg-white  input-bordered"
                  required
                />
              </div>
            </div>
            <div className="form-control mt-6">
              <button className="text-xl btn border-2 border-[#FF3811] hover:bg-[#FF3811] hover:border-[#FF3811] hover:border-2">
                Book Service
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookService;
