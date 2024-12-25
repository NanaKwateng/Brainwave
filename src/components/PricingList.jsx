import React from "react";
import { pricing } from "../constants";
import Button from "./Button";
import { check } from "../assets";

const PricingList = () => {
  return (
    <div className="flex gap-[1rem] max-lg:flex-wrap items-center">
      {pricing.map((item) => (
        <div
          key={item.id}
          className="w-[19rem] max-lg:w-full h-full px-6 bg-n-8 border border-n-6 rounded-[2rem] lg:w-auto even:py-14 odd:py-8 odd:my-2 [&>h4]:first:text-color-2 [&>h4]:even:text-color-1
           [&>h4]:odd:text-color-3"
        >
          <h4 className="h4 mb-14">{item.title}</h4>
          <p className="body-2 min-h-[4rem] mb-3 text-n-1/50">
            {item.description}
          </p>

          <div className="flex items-center h[5.5rem] mb-6">
            {item.price && (
              <>
                <div className="h3">$</div>
                <div className="text-[5.5rem]">{item.price}</div>
              </>
            )}
          </div>
          <Button
            className={`w-full mb-6  p-3 rounded-xl ${
              item.description ? "mt-[2rem]" : ""
            }`}
            href={item.price ? "/pricing" : "mailto:blueskiesurl8@gmail.com"}
            white={!!item.price}
          >
            {item.price ? "Get Started" : "Contact Us"}
          </Button>

          <ul>
            {item.features.map((feature, index) => (
              <li
                key={index}
                className="flex items-center gap-5 py-5 border-t border-n-5"
              >
                <img src={check} alt="check" width={24} height={24} />
                <p>{feature}</p>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default PricingList;
