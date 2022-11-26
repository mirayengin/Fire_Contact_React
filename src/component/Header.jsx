import React from "react";

const Header = ({ header }) => {
  return (
    <div className="my-3 bg-white h-14 flex justify-center items-center rounded-lg">
      <h2 className="text-center text-2xl font-mono font-extrabold">
        {header}
      </h2>
    </div>
  );
};

export default React.memo(Header);
