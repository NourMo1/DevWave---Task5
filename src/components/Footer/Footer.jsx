import { Link } from "react-router-dom";
import logo from "../../assets/blabanlogo.png";

const Footer = () => {
  return (
    <footer className="w-full bg-(--primary-color) relative top-[72px] py-5">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 py-4 border-b-2 border-b-(--secondary-color)">
          <div className="col-span-1 place-self-center md:place-self-auto">
            <Link to={"/"} className="flex items-center space-x-3 mb-1">
              <img
                src={logo}
                className="h-8"
                alt="Flowbite Logo"
              />
              <span className="self-center text-2xl text-white font-semibold whitespace-nowrap">
                B.Laban
              </span>
            </Link>
            <p className="text-(--creamy-color) font-semibold md:text-lg">
              From a sweet world
            </p>
          </div>
          <div className="col-span-1 place-self-center md:place-self-auto md:place-content-end flex items-center flex-wrap gap-2 md:gap-5">
            <span className="self-center text-lg md:text-2xl text-white font-semibold whitespace-nowrap">
              Social Media:
            </span>
            <Link target="_blanck" to={"https://www.facebook.com/profile.php?id=61554331319184&mibextid=wwXIfr"} className="w-10 h-10 flex justify-center items-center bg-(--creamy-color) border-2 border-(--third-color) shadow-lg hover:scale-110 transition-all ease-out duration-300">
              <i className="fa-brands fa-facebook-f text-lg text-[#1877f2]"></i>
            </Link>
            <Link target="_blanck" to={"https://www.instagram.com/b.laban.eg?igsh=ZHI4ejF3MnI3MWdi"}  className="w-10 h-10 flex justify-center items-center bg-(--creamy-color) border-2 border-(--third-color) shadow-lg hover:scale-110 transition-all ease-out duration-300">
              <i className="fa-brands fa-instagram text-lg text-[#f56040]"></i>
            </Link>
            <Link target="_blanck" to={"https://www.tiktok.com/@b.laban.egypt"}  className="w-10 h-10 flex justify-center items-center bg-(--creamy-color) border-2 border-(--third-color) shadow-lg hover:scale-110 transition-all ease-out duration-300">
              <i className="fa-brands fa-tiktok text-lg text-[#27272a]"></i>
            </Link>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center text-white py-2 gap-2 mt-2">
          <p className="text-xs sm:text-[14px] lg:text-[16px] font-semibold lg:uppercase me-2 lg:me-4">
            Copyright <i className="fa-solid fa-copyright"></i> 2025 NourMo | all
            rights reserved
          </p>
          <div className="flex justify-between items-center">
            <p className="text-xs sm:text-[14px] lg:text-[16px] font-semibold lg:uppercase me-2 lg:me-4">
              terms & conditions
            </p>
            <p className="text-xs sm:text-[14px] lg:text-[16px] font-semibold lg:uppercase me-2 lg:me-4">
              privacy policy
            </p>
            <p className="text-xs sm:text-[14px] lg:text-[16px] font-semibold lg:uppercase">
              cockie notice
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;