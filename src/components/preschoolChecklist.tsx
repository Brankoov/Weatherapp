import { useState } from "react";

const PreschoolChecklist = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => setVisible(!visible);

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={toggleVisible}
        className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold hover:bg-blue-600"
        aria-label="Visa checklista"
      >
        ?
      </button>

      {visible && (
        <div className="absolute z-10 mt-2 p-4 bg-white border border-gray-300 rounded shadow-lg w-64 text-sm">
          <p className="font-semibold mb-2">✅ Förskolechecklista:</p>
          <ul className="list-bubble pl-5 space-y-1 ">
            <li>Ombyte (tröja, byxor, strumpor)</li>
            <li>Regnkläder & stövlar</li>
            <li>Extra vantar och mössa</li>
            <li>Vattenflaska</li>
            <li>Solkräm vid behov</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default PreschoolChecklist;