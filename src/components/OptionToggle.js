import { useState, useContext } from "react";
import { AppContext } from '../App';
export const OptionToggle = () => {
  const toggleOptions = ["Quotes", "Finance", "Poems and Stories", "Favorites"];

  const {selectedOption, setSelectedOption } = useContext(AppContext);

  return (
    <div className="gap-3 flex flex-row justify-between items-center h-1/5">
      {toggleOptions.map((sectionName) => (
        <Option
          key={sectionName}
          sectionName={sectionName}
          setSelectedOption={setSelectedOption}
          selectedOption={selectedOption}
        />
      ))}
    </div>
  );
};

const Option = ({ sectionName, setSelectedOption, selectedOption }) => {
  return (
    <button
      className={`rounded-full w-[200px] h-[50px] bg-slate-800 drop-shadow-lg ${
        sectionName === selectedOption ? "" : "bg-opacity-50"
      } text-white`}
      onClick={() => {
        setSelectedOption(sectionName);
      }}
    >
      {sectionName}
    </button>
  );
};
