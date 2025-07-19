import { useState } from 'react';
import avatar from '../../assets/avatar.svg'
import data from "../../data/reviews.json";

const reviews = data;

const Testimonials = () => {
  
  const [showAll, setShowAll] = useState(false);
  const displayedReviews = showAll ? reviews : reviews.slice(0, 3);
  
  return (
    <section className="w-full relative top-[72px] py-20 bg-(--creamy-color)">
      <div className="max-w-screen-xl mx-auto px-4">
        <h2 className="text-2xl md:text-4xl font-semibold text-(--primary-color) text-center uppercase mb-15">
          Client's Testimonials
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
          {displayedReviews.map((item) => (
            <div
              key={item.id}
              className="p-4 h-[300px] flex flex-col justify-between shadow-lg border-2 border-(--creamy-color) bg-(--testimonial-color)"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="mb-5"
                fill="#615EFC"
              >
                <path d="M9.983 3v7.391c0 5.704-3.731 9.57-8.983 10.609l-.995-2.151c2.432-.917 3.995-3.638 3.995-5.849h-4v-10h9.983zm14.017 0v7.391c0 5.704-3.748 9.571-9 10.609l-.996-2.151c2.433-.917 3.996-3.638 3.996-5.849h-3.983v-10h9.983z" />
              </svg>
              <p className="text-lg md:text-xl text-zinc-800 mb-5">
                {item.comment_en}
              </p>
              <div className="flex gap-3">
                <figure className="flex justify-center items-center w-10 h-10 rounded-full border-2 border-zinc-800">
                  <img src={avatar} width={32} height={32} alt="Avatar" />
                </figure>
                <div>
                  <h4 className="md:text-lg font-medium text-zinc-800">
                    {item.reviewer_name}
                  </h4>
                  <div key={item.id} className="flex gap-1">
                    {Array.from({ length: 5 }, (_, index) => (
                      <i
                        key={index}
                        className={`text-xs ${
                          index < item.rating
                            ? "fa-solid fa-star text-amber-300" // Filled star color
                            : "fa-regular fa-star text-gray-400" // Empty star color
                        }`}
                      ></i>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        {!showAll && (
          <button
            onClick={() => {
              setShowAll(true);
            }}
            className="relative px-7 py-2 left-1/2 -translate-x-1/2 md:px-10 md:py-3.5 overflow-hidden group bg-gradient-to-r from-(--secondary-color) to-(--primary-color) hover:bg-gradient-to-r hover:from-(--secondary-color) hover:to-(--primary-color) text-white transition-all ease-out duration-300 cursor-pointer"
          >
            <span className="absolute right-0 w-10 h-full top-0 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 -skew-x-12 group-hover:-translate-x-36 ease"></span>
            <span className="relative text-xl font-semibold">Show More</span>
          </button>
        )}
      </div>
    </section>
  );
}

export default Testimonials;