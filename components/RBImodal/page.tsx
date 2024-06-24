'use client'
import { AnimatePresence, motion } from "framer-motion";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { FiAlertCircle } from "react-icons/fi";

const Modal = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 8000); // 8000 milliseconds = 8 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className=" bg-slate-900 flex items-center justify-center">
      <SpringModal isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
};

const SpringModal = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsOpen(false)}
          className="bg-slate-900/20 backdrop-blur p-2 fixed inset-0 z-50 grid place-items-center overflow-y-scroll cursor-pointer"
        >
          <motion.div
            initial={{ scale: 0, rotate: "12.5deg" }}
            animate={{ scale: 1, rotate: "0deg" }}
            exit={{ scale: 0, rotate: "0deg" }}
            onClick={(e) => e.stopPropagation()}
            className="bg-gradient-to-br from-emerald-600 to-emerald-500 text-white p-2 rounded-lg w-full max-w-lg shadow-xl cursor-default relative overflow-hidden"
          >
            <FiAlertCircle className="text-white/10 rotate-12 text-[250px] absolute z-0 -top-24 -left-24" />
            <div className="relative z-10 p-4">
              <div className="bg-white w-16 h-16 mb-2 rounded-full text-3xl text-emerald-600 grid place-items-center mx-auto">
                <FiAlertCircle />
              </div>
              <h3 className="text-3xl font-bold text-center mb-2">
              Important Update
              </h3>
              <p className="text-center mb-6">
           
KYC and Nomination Deadlines Extended to June 30, 2024. Ensure compliance by updating Aadhar and PAN details. Details at SEBI Circular
              <br></br>
              <a className="font-italic underline " href="https://www.sebi.gov.in/legal/circulars/dec-2023/extension-of-timelines-for-providing-choice-of-nomination-in-eligible-demat-accounts-and-mutual-fund-folios_80221.html" target="_blank">Check on Sebi Site</a>
              </p>
              <div className="flex gap-2">
                {/* <button
                  onClick={() => setIsOpen(false)}
                  className="bg-transparent hover:bg-white/10 transition-colors text-white font-semibold w-full py-2 rounded"
                >
               
                </button> */}
                <button
                  onClick={() => setIsOpen(false)}
                  className="bg-white hover:opacity-90 transition-opacity text-emerald-600 font-semibold w-full py-2 rounded"
                >
                  Understood!
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
