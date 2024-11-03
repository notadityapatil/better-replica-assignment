"use client";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { useEffect, useState } from "react";

export default function Mortgage() {
  const [housePrice, setHousePrice] = useState(50000);
  const [zipCode, setZipCode] = useState(10001);
  const [downPayment, setDownPayment] = useState(1000);
  const [interestRate, setInterestRate] = useState(3.5);
  const [lengthOfLoan, setLengthOfLoan] = useState(30);
  const [monthlyPayment, setMonthlyPayment] = useState(0);
  const [propertyTax, setPropertyTax] = useState(0);
  const [insurance, setInsurance] = useState(0);
  const [hoaFees, setHoaFees] = useState(0);
  const [utilities, setUtilities] = useState(0);
  const [totalMonthlyCost, setTotalMonthlyCost] = useState(0);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    calculateMonthlyCost();
  }, [
    housePrice,
    downPayment,
    interestRate,
    lengthOfLoan,
    propertyTax,
    insurance,
    hoaFees,
    utilities,
  ]);

  const calculateMonthlyCost = () => {
    const loanAmount = housePrice - downPayment;

    const monthlyRate = interestRate / 100 / 12;
    const totalPayments = lengthOfLoan * 12;

    let principalAndInterest;
    if (monthlyRate > 0) {
      principalAndInterest =
        (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, totalPayments)) /
        (Math.pow(1 + monthlyRate, totalPayments) - 1);
    } else {
      principalAndInterest = loanAmount / totalPayments;
    }

    const estimatedPropertyTax = (housePrice * 0.01) / 12;

    const estimatedInsurance = (housePrice * 0.005) / 12;

    const estimatedHoaFees = 50;
    const estimatedUtilities = 150;

    setPropertyTax(parseFloat(estimatedPropertyTax.toFixed(2)));
    setInsurance(parseFloat(estimatedInsurance.toFixed(2)));
    setHoaFees(estimatedHoaFees);
    setUtilities(estimatedUtilities);

    const totalCost =
      principalAndInterest +
      estimatedPropertyTax +
      estimatedInsurance +
      estimatedHoaFees +
      estimatedUtilities;

    setMonthlyPayment(parseFloat(principalAndInterest.toFixed(2)));
    setTotalMonthlyCost(parseFloat(totalCost.toFixed(2)));
  };

  return (
    <div className="mt-20">
      <Navbar style={{ backgroundColor: "white" }} />

      <div className="h-screen bg-successBackground flex flex-col px-12">
        <h1 className="pt-7 font-bold text-4xl">Mortgage Calculator</h1>

        <p className="mt-3 text-xs">
          Our mortgage calculator includes key factors like homeowners
          association fees, property taxes, and <br /> private mortgage
          insurance (PMI). Get the whole picture and calculate your total
          monthly payment.
        </p>

        <div className="flex flex-row justify-between items-baseline mt-12">
          <div className="flex flex-col gap-5">
            <h1>Home price</h1>

            <form action="">
              <input
                type="text"
                placeholder="$0.00"
                value={housePrice}
                onChange={(e) => setHousePrice(Number(e.target.value))}
                className=" h-14 w-44 text-2xl border border-gray-300 rounded-lg p-2"
              />
            </form>
          </div>

          <div className="flex flex-col gap-5">
            <h1>Monthly Payment</h1>

            <h1 className="text-3xl">
              {totalMonthlyCost.toLocaleString("en-US", {
                style: "currency",
                currency: "USD",
              })}
            </h1>
          </div>

          <div className="hidden md:block">
            <button className="rounded-md text-interactiveForegroundPrimary bg-interactivePrimary hover:bg-accentPrimary focus:bg-accentPrimary focus:shadow-accentBorderPrimary active:bg-accentPrimary px-xl h-12 w-auto inline-flex items-center justify-center min-w-48">
              Get Pre-approved
            </button>
          </div>
        </div>

        <div className="mt-6">
          <input
            type="range"
            min={50000}
            max={3000000}
            value={housePrice}
            onChange={(e) => setHousePrice(Number(e.target.value))}
            className="w-full h-1  bg-gray-300 rounded-lg appearance-none cursor-pointer"
          />
        </div>

        <div className="md:flex flex-row justify-between mt-8 hidden">
          <div className="flex flex-row gap-7">
            <form>
              <div className="relative w-fit">
                <input
                  type="number"
                  id="zip-code"
                  value={zipCode}
                  onChange={(e) => setZipCode(Number(e.target.value))}
                  placeholder=" "
                  required
                  className="block w-44 h-12 px-2 pt-4 text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <label
                  htmlFor="zip-code"
                  className="absolute top-2 left-2 text-gray-500 text-xs transition-all transform -translate-y-1 scale-100 
            peer-placeholder-shown:top-4 peer-placeholder-shown:text-2xl peer-placeholder-shown:translate-y-0 peer-focus:top-2 peer-focus:text-sm peer-focus:text-blue-500"
                >
                  Zip Code
                </label>
              </div>
            </form>

            <form>
              <div className="relative w-fit">
                <input
                  type="number"
                  value={downPayment}
                  onChange={(e) => setDownPayment(Number(e.target.value))}
                  id="down-payment"
                  placeholder=" "
                  required
                  className="block w-44 h-12 px-2 pt-4 text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <label
                  htmlFor="down-payment"
                  className="absolute top-2 left-2 text-gray-500 text-xs transition-all transform -translate-y-1 scale-100 
            peer-placeholder-shown:top-4 peer-placeholder-shown:text-2xl peer-placeholder-shown:translate-y-0 peer-focus:top-2 peer-focus:text-sm peer-focus:text-blue-500"
                >
                  Down Payment
                </label>
              </div>
            </form>
          </div>

          <div className="flex flex-row gap-7 ">
            <form>
              <div className="relative w-fit">
                <input
                  type="number"
                  value={interestRate}
                  onChange={(e) => setInterestRate(Number(e.target.value))}
                  id="interest-rate"
                  placeholder=" "
                  required
                  className="block w-44 h-12 px-2 pt-4 text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <label
                  htmlFor="interest-rate"
                  className="absolute top-2 left-2 text-gray-500 text-xs transition-all transform -translate-y-1 scale-100 
            peer-placeholder-shown:top-4 peer-placeholder-shown:text-2xl peer-placeholder-shown:translate-y-0 peer-focus:top-2 peer-focus:text-sm peer-focus:text-blue-500"
                >
                  Interest Rate
                </label>
              </div>
            </form>

            <form>
              <div className="relative w-fit">
                <input
                  type="number"
                  value={lengthOfLoan}
                  onChange={(e) => setLengthOfLoan(Number(e.target.value))}
                  id="length"
                  placeholder=" "
                  required
                  className="block w-44 h-12 px-2 pt-4 text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <label
                  htmlFor="length"
                  className="absolute top-2 left-2 text-gray-500 text-xs transition-all transform -translate-y-1 scale-100 
            peer-placeholder-shown:top-4 peer-placeholder-shown:text-2xl peer-placeholder-shown:translate-y-0 peer-focus:top-2 peer-focus:text-sm peer-focus:text-blue-500"
                >
                  Length of Loan (Years)
                </label>
              </div>
            </form>
          </div>
        </div>

        <div className="mt-10 block md:hidden">
          <div className="w-full flex flex-col justify-center items-center">
            <button className="rounded-md text-interactiveForegroundPrimary bg-interactivePrimary hover:bg-accentPrimary focus:bg-accentPrimary focus:shadow-accentBorderPrimary active:bg-accentPrimary px-xl h-12 w-full  inline-flex items-center justify-center min-w-48">
              Get Pre-approved
            </button>

            <button
              onClick={() => setIsMenuOpen(true)}
              className=" mt-5 rounded-md text-interactiveForegroundInversePrimary bg-transparent  border-black border hover:border-2 hover:border-accentPrimary focus:border-accentPrimary transition-all duration-300 hover:text-accentPrimary focus:text-accentPrimary focus:shadow-accentBorderPrimary px-xl h-12 w-full  inline-flex items-center justify-center min-w-48"
            >
              Add Detailes +
            </button>
          </div>

          <div
            className={`fixed bottom-0 left-0 right-0 bg-gray-900 text-black bg-opacity-90 flex justify-start z-20 transform transition-transform duration-300 ${
              isMenuOpen ? "translate-y-0" : "translate-y-full"
            }`}
            style={{ height: "70vh" }}
          >
            <div className="w-full max-w-screen bg-white h-full p-3">
              <div className="flex justify-between items-center">
                <div className="inline-block px-2 flex-none">
                  {/* Additional content */}
                </div>
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="inline-block rounded-base leading-body text-base text-center font-bold select-none outline-none transition duration-300 ease-universal focus:shadow-[0_0_0_4px_inset] disabled:text-interactiveForegroundMuted disabled:bg-interactiveMuted disabled:shadow-none text-interactiveForegroundTertiary bg-transparent hover:bg-interactiveSecondary focus:bg-interactiveSecondary focus:border-transparent focus:shadow-accentBorderSecondary active:bg-interactiveSecondary px-base h-2xl w-auto"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-x"
                  >
                    <path d="M18 6 6 18"></path>
                    <path d="m6 6 12 12"></path>
                  </svg>
                </button>
              </div>

              {/* Forms section */}

<div className="flex flex-col justify-between">
              <div className="mt-4 w-full">
                <div className="flex flex-col md:flex-row md:justify-between gap-4">
                  <div className="flex flex-col md:flex-row gap-4 w-full">
                    <form className="w-full md:w-1/2">
                      <div className="relative w-full">
                        <input
                          type="number"
                          id="zip-code"
                          value={zipCode}
                          onChange={(e) => setZipCode(Number(e.target.value))}
                          placeholder=" "
                          required
                          className="block w-full h-12 px-2 pt-4 text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <label
                          htmlFor="zip-code"
                          className="absolute top-2 left-2 text-gray-500 text-xs transition-all transform -translate-y-1 scale-100 
                peer-placeholder-shown:top-4 peer-placeholder-shown:text-2xl peer-placeholder-shown:translate-y-0 peer-focus:top-2 peer-focus:text-sm peer-focus:text-blue-500"
                        >
                          Zip Code
                        </label>
                      </div>
                    </form>

                    <form className="w-full md:w-1/2">
                      <div className="relative w-full">
                        <input
                          type="number"
                          value={downPayment}
                          onChange={(e) =>
                            setDownPayment(Number(e.target.value))
                          }
                          id="down-payment"
                          placeholder=" "
                          required
                          className="block w-full h-12 px-2 pt-4 text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <label
                          htmlFor="down-payment"
                          className="absolute top-2 left-2 text-gray-500 text-xs transition-all transform -translate-y-1 scale-100 
                peer-placeholder-shown:top-4 peer-placeholder-shown:text-2xl peer-placeholder-shown:translate-y-0 peer-focus:top-2 peer-focus:text-sm peer-focus:text-blue-500"
                        >
                          Down Payment
                        </label>
                      </div>
                    </form>
                  </div>

                  <div className="flex flex-col md:flex-row gap-4 w-full">
                    <form className="w-full md:w-1/2">
                      <div className="relative w-full">
                        <input
                          type="number"
                          value={interestRate}
                          onChange={(e) =>
                            setInterestRate(Number(e.target.value))
                          }
                          id="interest-rate"
                          placeholder=" "
                          required
                          className="block w-full h-12 px-2 pt-4 text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <label
                          htmlFor="interest-rate"
                          className="absolute top-2 left-2 text-gray-500 text-xs transition-all transform -translate-y-1 scale-100 
                peer-placeholder-shown:top-4 peer-placeholder-shown:text-2xl peer-placeholder-shown:translate-y-0 peer-focus:top-2 peer-focus:text-sm peer-focus:text-blue-500"
                        >
                          Interest Rate
                        </label>
                      </div>
                    </form>

                    <form className="w-full md:w-1/2">
                      <div className="relative w-full">
                        <input
                          type="number"
                          value={lengthOfLoan}
                          onChange={(e) =>
                            setLengthOfLoan(Number(e.target.value))
                          }
                          id="length"
                          placeholder=" "
                          required
                          className="block w-full h-12 px-2 pt-4 text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <label
                          htmlFor="length"
                          className="absolute top-2 left-2 text-gray-500 text-xs transition-all transform -translate-y-1 scale-100 
                peer-placeholder-shown:top-4 peer-placeholder-shown:text-2xl peer-placeholder-shown:translate-y-0 peer-focus:top-2 peer-focus:text-sm peer-focus:text-blue-500"
                        >
                          Length of Loan (Years)
                        </label>
                      </div>
                    </form>
                  </div>
                </div>

              </div>
                <button 
                onClick={() => setIsMenuOpen(false)}
                className="bg-accentPrimary text-white w-full h-12 rounded-lg mt-8">
                  See Results
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="mt-10 px-14">
        <div className="flex flex-row justify-between">
          <div className="flex flex-col">
            <div>Monthly Payment Breakdown</div>

            <h1 className="text-3xl mt-3">
              {`${totalMonthlyCost.toLocaleString("en-US", {
                style: "currency",
                currency: "USD",
              })}/mo`}
            </h1>
          </div>

          <div className="flex flex-col gap-6 items-start">
            <div className="flex flex-row items-center gap-32">
              <div>Principal & interest</div>
              <div>
                {`${monthlyPayment.toLocaleString("en-US", {
                  style: "currency",
                  currency: "USD",
                })}`}
              </div>
            </div>

            <div className="flex flex-row items-center gap-32">
              <div>Property Tax</div>
              <div>
                <input
                  type="number"
                  value={propertyTax}
                  onChange={(e) => setPropertyTax(Number(e.target.value))}
                  id="property-tax"
                  placeholder=" "
                  required
                  className="block w-32 h-10 px-2 pt-4 text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            <div className="flex flex-row items-center gap-32">
              <div>Homeowner's insurance</div>
              <div>
                <input
                  type="number"
                  value={insurance}
                  onChange={(e) => setPropertyTax(Number(e.target.value))}
                  id="insurance"
                  placeholder=" "
                  required
                  className="block w-32 h-10 px-2 pt-4 text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            <div className="flex flex-row items-center gap-32">
              <div>HOA Fees</div>
              <div>
                <input
                  type="number"
                  value={hoaFees}
                  onChange={(e) => setPropertyTax(Number(e.target.value))}
                  id="hoa-fees"
                  placeholder=" "
                  required
                  className="block w-32 h-10 px-2 pt-4 text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            <div className="flex flex-row items-center gap-32">
              <div>Utilities</div>
              <div>
                <form action="">
                <input
                  type="number"
                  value={utilities}
                  onChange={(e) => setPropertyTax(Number(e.target.value))}
                  id="utilities"
                  placeholder=" "
                  required
                  className="block w-32 h-10 px-2 pt-4 text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                </form>
              </div>
            </div> */}

      {/* </div> */}
      {/* </div> */}
      {/* </div> */}

      <Footer />
    </div>
  );
}
