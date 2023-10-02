import React from "react";

const Product: React.FC = () => {
  return (
    <div id="main">
      <div
        id="page2"
        className="h-screen w-full relative flex items-center py-[3vw] px-[1vw] justify-between"
      >
        <div id="elem1" className=" h-full w-1/4 bg-red-400">
          <img
            className="h-full w-full object-cover"
            src="https://cdn.sanity.io/images/w8f1ak3c/production/ee1c2e8894a4c47c4f4ce71b8973589f8a5045b2-902x1500.png/Rectangle%203.png?rect=1,0,900,1500&w=640&h=1067&fit=min&auto=format"
            alt=""
          />
        </div>
        <div id="elem2" className=" h-full w-1/8">
          <img
            className="h-full w-full object-cover"
            src="https://cdn.sanity.io/images/w8f1ak3c/production/d3151106849ff2494d66916cf554c68a0603444d-902x1500.png/Rectangle%20220.png?rect=1,0,900,1500&w=640&h=1067&fit=min&auto=format"
            alt=""
          />
        </div>
        <div id="elem3" className=" h-full w-1/4 ">
          <img
            className="h-full w-full object-cover"
            src="https://cdn.sanity.io/images/w8f1ak3c/production/d6a2a4be8e3063d64648773f57f5f447609a93ab-5000x5000.png/Love-Care-Pack-Expanded-Two-Good-Co.png?w=1024&h=1024&auto=format"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Product;
