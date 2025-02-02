import React, { useState } from "react";
import Image from "next/image";
import { useValueStore } from "@/store/valueStore";
import Swal from "sweetalert2";
import { Seconds } from "@/utils/Constants";

function Contact() {
  const { setContactState } = useValueStore((state) => ({
    setContactState: state.setContactState,
  }));

  const [formData, setFormData] = useState({
    email: "",
    message: "",
  });

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!formData.email || !formData.message) {
      Swal.fire({
        position: "center",
        icon: "warning",
        title: "Please, remember to attach your email and message.",
        showConfirmButton: false,
        timer: Seconds.TWO_SECONDS,
      });
    } else {
      event.currentTarget.submit();
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <>
      <form
        action="https://formspree.io/f/mzbqzaad"
        method="POST"
        className="md:flex hidden flex-col items-center bg-[#1A1A1A] min-w-[500px] max-w-[700px] rounded-3xl border-4"
        onSubmit={handleSubmit}
      >
        <div className="flex gap-10 bg-black p-3 w-full rounded-t-3xl">
          <Image
            className="rounded-[100px]"
            src="/profile-image-2.jpg"
            height={60}
            width={60}
            alt="Profile image"
          />
          <div>
            <h1 className="acorn-bold text-2xl">Leiber Bertel</h1>
            <h2 className="acorn-bold text-xl">Ask me a question.</h2>
          </div>
        </div>
        <div className="flex flex-col gap-8 py-12 w-full px-5">
          <label className="flex flex-col montserrat font-bold">
            Email:{" "}
            <input
              type="email"
              name="email"
              placeholder="john@domain.com"
              className="py-3 px-2 text-black rounded-md"
              value={formData.email}
              onChange={handleChange}
            />
          </label>
          <label className="flex flex-col montserrat font-bold">
            Message:{" "}
            <textarea
              name="message"
              placeholder="Type your query here..."
              className="w-full h-[100px] py-3 px-2 text-black rounded-md"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </label>
          <div className=" flex justify-between w-full">
            <button
              type="submit"
              className="bg-[#6088EE] py-3 px-5 rounded-md w-1/2 montserrat font-bold"
            >
              Send my message
            </button>
            <button
              type="button"
              onClick={() => setContactState(false)}
              className="bg-[#DB3232] py-3 px-5 rounded-md montserrat font-bold w-[30%]"
            >
              Close
            </button>
          </div>
        </div>
      </form>
      <form
        action="https://formspree.io/f/mzbqzaad"
        method="POST"
        className="flex md:hidden flex-col items-center bg-[#1A1A1A] rounded-3xl border-4"
        onSubmit={handleSubmit}
      >
        <div className="flex gap-10 bg-black p-3 w-full rounded-t-3xl">
          <Image
            className="rounded-[100px]"
            src="/profile-image-2.jpg"
            height={60}
            width={60}
            alt="Profile image"
          />
          <div>
            <h1 className="acorn-bold text-2xl">Leiber Bertel</h1>
            <h2 className="acorn-bold text-xl">Ask me a question.</h2>
          </div>
        </div>
        <div className="flex flex-col gap-8 py-12 w-full px-5">
          <label className="flex flex-col montserrat font-bold">
            Email:{" "}
            <input
              type="email"
              name="email"
              placeholder="john@domain.com"
              className="py-3 px-2 text-black rounded-md"
              value={formData.email}
              onChange={handleChange}
            />
          </label>
          <label className="flex flex-col montserrat font-bold">
            Message:{" "}
            <textarea
              name="message"
              placeholder="Type your query here..."
              className="w-full h-[100px] py-3 px-2 text-black rounded-md"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </label>
          <div className=" flex justify-between w-full">
            <button
              type="submit"
              className="bg-[#6088EE] py-3 px-5 rounded-md w-1/2 montserrat font-bold"
            >
              Send my message
            </button>
            <button
              type="button"
              onClick={() => setContactState(false)}
              className="bg-[#DB3232] py-3 px-5 rounded-md montserrat font-bold w-[30%]"
            >
              Close
            </button>
          </div>
        </div>
      </form>
    </>
  );
}

export default Contact;
