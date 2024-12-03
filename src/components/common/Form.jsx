import { useRef } from "react";
import emailjs from "@emailjs/browser";

const Form = ({ formStyle, extraInput, inputStyle }) => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_41a5tn4", "template_mcpl6oq", form.current, {
        publicKey: "prkoPZEGOTPZ_ENVb",
      })
      .then(
        () => {
          alert("successfully sent");
        },
        (error) => {
          alert("FAILED...");
          console.log(error);
        }
      );
    e.target.reset();
  };

  return (
    <form
      ref={form}
      onSubmit={sendEmail}
      autoComplete="off"
      className={`custom_form bg-transparent max-w-[300px] grid grid-cols-1  gap-3 ${formStyle}`}
    >
      <input
        type="text"
        required
        placeholder="Full Name"
        name="sender_name"
        className={inputStyle}
      />
      <input
        type="text"
        required
        name="sender_number"
        placeholder="Phone No."
        className={inputStyle}
      />
      {extraInput}
      <textarea
        name="sender_message"
        id="message form_textarea"
        placeholder="Message"
        className={inputStyle}
      ></textarea>
      <button className="formBt bg-[var(--second-color)] py-[.5rem] rounded-sm uppercase font-semibold hover:bg-[var(--main-color)] hover:text-white ease-in-out duration-300">
        submit
      </button>
    </form>
  );
};

export default Form;
