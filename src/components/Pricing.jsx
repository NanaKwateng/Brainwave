import React from "react";
import Section from "./Section";
import { smallSphere, stars } from "../assets";
import Heading from "./Heading";
import PricingList from "./PricingList";
import { LeftLine, RightLine } from "../components/design/Pricing";

const Pricing = () => {
  return (
    <Section className="overflow-hidden" id="pricing">
      <div className="container relative z-2">
        <div className="hidden relative justify-center mb-[6.5rem] lg:flex">
          <img
            src={smallSphere}
            alt="Sphere"
            className="relative z-1"
            width={255}
            height={255}
          />
          <div className="absolute top=1/2 left-1/2 w-[60rem] -translate-x-1/2 -translate-y-1/2 pointer-events-none">
            <img
              src={stars}
              alt="Stars"
              className="w-full object-cover"
              width={950}
              height={400}
            />
          </div>
        </div>

        <Heading
          tag="Get Started with Brainwave"
          title="Pay once, use forever"
        />

        <div className="relative">
          <PricingList />
          <LeftLine />
          <RightLine />
        </div>

        <div className="flex justify-center mt-10 ">
          <a
            href="/pricing"
            className="text-xs font-bold font-code tracking-wider uppercase border-b border-n-1 transition-colors hover:text-n-13"
          >
            See the full details
          </a>
        </div>
      </div>
    </Section>
  );
};

export default Pricing;
