import { useState } from "react";
import { PaystackButton } from "react-paystack";
// import PageHead from "../components/common/PageHead";

const OnlineGive = () => {
  const publicKey = "pk_live_fdf5232924c94d943e7a13e527b135905e7aa25a";

  const [email, setEmail] = useState("");
  const [amount, setAmount] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  // const [reference, setReference] = useState("");

  const componentProps = {
    email,
    amount: amount * 100,
    currency: "GHS",
    metadata: {
      name,
      phone,
    },

    publicKey,
    text: "Give",
    // onSuccess: () => reference,
  };

  const style = {
    input:
      "block w-full px-4 py-2 mb-4 rounded-md border border-gray-300 focus:outline-none focus:border-primary-500",
    button:
      "block w-full px-4 py-2 bg-[var(--main-color)] font-semibold hover:opacity-80 ease-in-out duration-200 text-white rounded-md col-span-2",
  };
  return (
    <section className="">
      <div className="prayerwall_intro bg-[url('https://res.cloudinary.com/dv9aqxptd/image/upload/v1733102184/homchapel/high-angle-coins-stacked-dirt-with-plants_mz7hqs.webp')] bg-center bg-cover min-h-[60vh] ">
        <div className="min-h-[60vh] bg-[#000000be] w-full h-full flex flex-col items-center justify-center  gap-5 py-14 px-5">
          <q className="capitalize font-semibold text-[var(--second-color)] text-[1.2rem] md:text-[1.4rem] tracking-wider max-w-[70%] text-center">
            Give, and it will be given to you: good measure, pressed down,
            shaken together, and running over will be put into your bosom. For
            with the same measure that you use, it will be measured back to you.
          </q>
          <p className="font-bold text-[var(--main-color)] text-[1.3rem] md:text-[1.5rem]">
            Luke 6:38 (NKJV)
          </p>
        </div>
      </div>

      <div className="px-4 py-12  flex flex-col justify-center items-center justify-center max-w-[600px] mx-auto">
        <h1 className="text-stone-100 font-bold text-[1.4rem]">Give Here</h1>
        <div className="w-full mx-auto my-4 grid grid-cols-2 gap-x-4">
          <input
            type="email"
            placeholder="Email"
            className={style.input}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="number"
            placeholder="Amount"
            className={style.input}
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
          <input
            type="text"
            placeholder="Name"
            className={style.input}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="number"
            placeholder="Phone number"
            className={style.input}
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          {/* <select
            name="reference"
            id="reference"
            className={`bg-stone-200 rounded-md capitalize ${style.input}`}
            onChange={(e) => setReference(e.target.value)}
          >
            <option value="default">--Select Reference--</option>
            <option value="offering">offering</option>
            <option value="tithe">tithe</option>
            <option value="seed">seed</option>
            <option value="pledge">pledge</option>
          </select> */}
          {/* <input
            type="text"
            placeholder="Reference(e.g.tithe)"
            className={style.input}
            value={reference}
            onChange={(e) => setReference(e.target.value)}
          /> */}
          <PaystackButton className={style.button} {...componentProps} />
        </div>
      </div>
    </section>
  );
};

export default OnlineGive;
