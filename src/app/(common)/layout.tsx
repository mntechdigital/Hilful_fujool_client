import Topber from "@/components/shared/menu/Topber";
import Navber from "./_components/Navber";
import Footer from "@/components/shared/Footer";

const CommonLayout = async ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Topber/>
      <Navber/>
      {children}
      <Footer/>
    </div>
  );
};

export default CommonLayout;
