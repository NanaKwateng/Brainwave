import React from "react";
import { notificationImages } from "../constants";
import { notification1 } from "../assets";

const Notification = ({ className, title }) => {
  return (
    <div
      className={`${
        className || ""
      } items-center p-4 pr-6 bg-n-9/40 border border-n-1 rounded-2xl backdrop-blur`}
    >
      <img
        src={notification1}
        alt="notification"
        width={62}
        height={62}
        className="rounded-xl"
      />

      <div className="flex-1">
        <h6 className="mb-1 font-semi-bold text-base">{title}</h6>
        <div className="flex justify-between items-center">
          <ul className="flex -m-0.5">
            {notificationImages.map((item, index) => (
              <li
                key={index}
                className="flex w-7 h-6 border-2 border-n-12 rounded-full overflow-hidden "
              >
                <img
                  src={item}
                  width={20}
                  height={20}
                  alt={item}
                  className="w-full"
                />
              </li>
            ))}
          </ul>

          <div className="body-2 text-left"></div>
        </div>
      </div>
    </div>
  );
};

export default Notification;
