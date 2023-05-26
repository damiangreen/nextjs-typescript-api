import React, { ReactNode } from "react";

interface Props {
  title: ReactNode;
  subtitle?: ReactNode;
}

const Hero = ({ title, subtitle }: Props) => (
  <div className="bg-white pt-8 pb-6">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-sm">
      <h1 className="text-4xl font-bold text-center text-gray-900 mb-4">
        {title}
      </h1>
      {subtitle && (
        <p className="text-xl text-center text-gray-600">{subtitle}</p>
      )}
    </div>
  </div>
);
export default Hero;
