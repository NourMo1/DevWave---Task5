import { useNavigate } from "react-router-dom";

const Error = () => {
  
  const navigate = useNavigate();
  
  return (
    <section className="w-full relative top-[72px] py-20 min-h-[calc(100vh-72px)] bg-(--creamy-color)">
      <div className="max-w-screen-xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-semibold text-(--primary-color) text-center uppercase mb-15">
          Error 404!
        </h2>
        <div className="text-center p-10 bg-white shadow-lg flex flex-col">
          <p className="text-xl md:text-2xl text-gray-800 mb-5">
            The page you were looking for doesn't exist
          </p>
          <button
            onClick={() => {
              navigate("/home");
            }}
            className="relative w-fit px-7 py-2 left-1/2 -translate-x-1/2 md:px-10 md:py-3.5 overflow-hidden group bg-gradient-to-r from-(--secondary-color) to-(--primary-color) hover:bg-gradient-to-r hover:from-(--secondary-color) hover:to-(--primary-color) text-white transition-all ease-out duration-300 cursor-pointer"
          >
            <span className="absolute right-0 w-10 h-full top-0 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 -skew-x-12 group-hover:-translate-x-36 ease"></span>
            <span className="relative text-xl font-semibold">Go To Home</span>
          </button>
        </div>
      </div>
    </section>
  );
}

export default Error
