import React from "react";
import HeroAreaCRUD from "./_components/HeroAreaCRUD";
import { getHeroSection } from "@/services/Hero-section";
const HeroAreaPage = async () => {
  const heroData = await getHeroSection([]);
  console.log("see upcoming hero==>",heroData.data[0])

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold text-[#0f3d3e] mb-6">Hero Area</h1>
      <HeroAreaCRUD heroData={heroData.data[0]} />
    </div>
  );
};

export default HeroAreaPage;
