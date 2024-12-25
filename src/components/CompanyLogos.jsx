import React from "react";
import { companyLogos } from "../constants";

const CompanyLogos = ({ className }) => {
  return (
    <div className={className}>
      <h5 className="tagline mb-6 text-center text-n-1/50">
        Helping People to create Beautiful content at{" "}
      </h5>

      <ul className="flex items-center justify-center gap-5 ">
        {companyLogos.map((logo, index) => (
          <li key={index} className="flex items-center justify-center ">
            <img src={logo} alt={logo} width={134} height={28} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CompanyLogos;
