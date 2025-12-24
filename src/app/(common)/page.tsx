import { getPackages } from "@/services/package";
import HomepageHero from "./_components/HomepageHero";
import AboutUs from "./about-us/_components/AboutUs";
import PackageHeader from "./hajj-packages/_components/PackageHeader";
import PackageSection from "./hajj-packages/_components/PackageSection";
import { TQuery } from "@/types/query.types";
import FivePillarOfIslam from "./about-us/_components/FIvePillarOfIslam";
import ServiceHeader from "./services/_components/ServiceHeader";
import ServiceSection from "./services/_components/ServiceSection";
import { getServices } from "@/services/service";

export const dynamic = "force-dynamic";

const Home = async (props: {
  searchParams: Promise<{ search: string; page: string }>;
}) => {
  const searchParams = await props.searchParams;
  const search = searchParams.search || "";
  const page = parseInt(searchParams.page) || 1;
  const query: TQuery[] = [
    {
      key: "orderBy",
      value: JSON.stringify({
        createdAt: "desc",
      }),
    },
    {
      key: "searchTerm",
      value: search,
    },
    {
      key: "page",
      value: page.toString(),
    },
    {
      key: "limit",
      value: "10",
    },
  ];
  const packages = await getPackages(query);
  const servicesData = await getServices(query);
  return (
    <div>
      <HomepageHero />
      <AboutUs />
      <ServiceHeader />
      <ServiceSection servicesData={servicesData?.data?.data} />
      <PackageHeader />
      <PackageSection packages={packages?.data?.data} />
      <FivePillarOfIslam />
    </div>
  );
};

export default Home;
