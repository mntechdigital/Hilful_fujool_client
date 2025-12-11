import Topber from "@/components/shared/menu/Topber";
import Navber from "./_components/Navber";

export const dynamic = "force-dynamic";

const Home = async () => {
  return (
    <div>
      <Topber/>
      <Navber/>
    </div>
  );
};

export default Home;
