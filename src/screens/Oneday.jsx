import React, { useState } from "react";
import axios from "axios";

import CalCard from "../components/CalCard";

function Oneday() {
  const [kms, setKms] = useState(0);
  const [custName, setCustName] = useState("");
  const [custNo, setCustNo] = useState("");
  const initPayment = 1800;
  const pricePerKm = 7;
  const totalPrice = initPayment + pricePerKm * kms;

  function kmsHandler(e) {
    setKms(e.target.value);
  }
  function custNameHandler(e) {
    setCustName(e.target.value);
  }
  function custNoHandler(e) {
    setCustNo(e.target.value);
  }
  function submitHandler(e) {
    e.preventDefault();
    let data = {
      cus_name: custName,
      mobile: custNo,
      distance: kms,
      total: totalPrice,
    };
    async function addbill() {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/add-day-trip",
        data
      );
      if (response) {
        alert(response.data.message);
      } else {
        alert("Something went wrong..!");
      }
    }
    addbill();

    console.log(JSON.stringify(data));
    setCustName("");
    setCustNo("");
    setKms(0);
  }

  return (
    <main className="d-flex justify-content-center align-items-center  vh-100">
      <div className="card shadow-sm py-4 px-5">
        <CalCard
          initPayment={initPayment}
          pricePerKm={pricePerKm}
          totalPrice={totalPrice}
        />
        <form onSubmit={submitHandler} className="pt-3">
          <label className="mt-2 mb-1" htmlFor={"customer_name"}>
            Customer Name :
          </label>
          <input
            className={`form-control mb-2 border border-warning`}
            type={"text"}
            id={"customer_name"}
            name={"customer_name"}
            placeholder={"Customer Name"}
            value={custName}
            onChange={custNameHandler}
            required="required"
          />
          <label className="mt-2 mb-1" htmlFor={"mobile_no"}>
            Mobile No :
          </label>
          <input
            className={`form-control mb-2 border border-warning`}
            type={"tel"}
            pattern="^\d{10}$"
            id={"mobile_no"}
            name={"mobile_no"}
            placeholder={"Mobile No"}
            value={custNo}
            onChange={custNoHandler}
            required="required"
          />
          <label className="mt-2 mb-1" htmlFor={"initial_payment"}>
          Initial Payment :
          </label>
          <input
            value={initPayment}
            name="initial_payment"
            id="initial_payment"
            type="number"
            className="form-control mt-1"
            placeholder="Initial Payment"
            disabled
          />
          <label className="mt-2 mb-1" htmlFor={"kms_covered"}>
          Distance Travelled :
          </label>
          <input
            className={`form-control mb-2 border border-warning`}
            type={"number"}
            id={"kms_covered"}
            name={"kms_covered"}
            placeholder={"Distance Travelled"}
            value={kms}
            onChange={kmsHandler}
            required="required"
            min={1}
          />
          <div className="text-center mt-4">
            <button value="submit" className="btn btn-warning" type="submit">
              {" "}
              Submit{" "}
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}

export default Oneday;
