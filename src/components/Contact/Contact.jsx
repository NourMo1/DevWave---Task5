import company from '../../assets/company.jpg'

const Contact = () => {
  return (
    <section className="relative top-[72px] w-full py-20 bg-white">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-20">
          <form className="col-span-1 place-content-center">
            <div className="grid md:grid-cols-2 md:gap-5">
              <div className="relative z-0 w-full mb-5 group">
                <input
                  type="text"
                  name="floating_full_name"
                  id="floating_full_name"
                  className="block py-2.5 px-0 w-full text-sm text-gray-800 bg-transparent border-0 border-b-2 border-zinc-800 appearance-none focus:outline-none focus:ring-0 focus:border-(--primary-color) focus:caret-zinc-800 focus:text-zinc-800 peer"
                  placeholder=" "
                  required
                />
                <label
                  htmlFor="floating_full_name"
                  className="peer-focus:font-medium absolute text-sm text-zinc-800  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-(--primary-color) rtl:peer-focus:translate-x-1/4  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Full name
                </label>
              </div>
              <div className="relative z-0 w-full mb-5 group">
                <input
                  type="email"
                  name="floating_email"
                  id="floating_email"
                  className="block py-2.5 px-0 w-full text-sm text-gray-800 bg-transparent border-0 border-b-2 border-zinc-800 appearance-none focus:outline-none focus:ring-0 focus:border-(--primary-color) focus:caret-zinc-800 focus:text-zinc-800 peer"
                  placeholder=" "
                  required
                />
                <label
                  htmlFor="floating_email"
                  className="peer-focus:font-medium absolute text-sm text-zinc-800  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-(--primary-color) rtl:peer-focus:translate-x-1/4  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Email address
                </label>
              </div>
            </div>
            <div className="grid md:grid-cols-2 md:gap-5">
              <div className="relative z-0 w-full mb-5 group">
                <input
                  type="text"
                  name="floating_subject"
                  id="floating_subject"
                  className="block py-2.5 px-0 w-full text-sm text-gray-800 bg-transparent border-0 border-b-2 border-zinc-800 appearance-none focus:outline-none focus:ring-0 focus:border-(--primary-color) focus:caret-zinc-800 focus:text-zinc-800 peer"
                  placeholder=" "
                  required
                />
                <label
                  htmlFor="floating_subject"
                  className="peer-focus:font-medium absolute text-sm text-zinc-800  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-(--primary-color) rtl:peer-focus:translate-x-1/4  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Subject
                </label>
              </div>
              <div className="relative z-0 w-full mb-5 group">
                <input
                  type="tel"
                  pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                  name="floating_phone"
                  id="floating_phone"
                  className="block py-2.5 px-0 w-full text-sm text-gray-800 bg-transparent border-0 border-b-2 border-zinc-800 appearance-none focus:outline-none focus:ring-0 focus:border-(--primary-color) focus:caret-zinc-800 focus:text-zinc-800 peer"
                  placeholder=" "
                  required
                />
                <label
                  htmlFor="floating_phone"
                  className="peer-focus:font-medium absolute text-sm text-zinc-800  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-(--primary-color) rtl:peer-focus:translate-x-1/4  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Phone number
                </label>
              </div>
            </div>
            <div className="grid md:grid-cols-1 mb-10">
              <textarea
                id="message"
                rows="4"
                className="block p-2.5 w-full text-sm text-zinc-800 border border-zinc-800 focus:border-(--primary-color) placeholder:text-zinc-800 resize-none"
                placeholder="Write your message"
              ></textarea>
            </div>
            <button
              type="submit"
              className="relative px-7 py-2 md:px-10 md:py-3.5 overflow-hidden group bg-gradient-to-r from-(--secondary-color) to-(--primary-color) hover:bg-gradient-to-r hover:from-(--secondary-color) hover:to-(--primary-color) text-white transition-all ease-out duration-300 cursor-pointer"
            >
              <span className="absolute right-0 w-10 h-full top-0 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 -skew-x-12 group-hover:-translate-x-36 ease"></span>
              <span className="relative text-xl font-semibold">Submit</span>
            </button>
          </form>
          <div className="col-span-1">
            <h2 className="text-2xl md:text-4xl font-semibold text-(--primary-color) uppercase mb-5">
              B.Laban Dairy Products
            </h2>
            <p className="text-lg md:text-xl text-zinc-800">
              9 Abbas Helmy Street, Al Merghani
            </p>
            <p className="text-lg md:text-xl text-zinc-800">Cairo, Egypt</p>
            <p className="text-lg md:text-xl text-zinc-800 mb-5">
              Phone: +20 15761
            </p>
            <figure>
              <img
                src={company}
                className="h-[300px] w-full object-cover"
                alt="Company image"
              />
            </figure>
          </div>
        </div>
        <h2 className="text-2xl md:text-4xl font-semibold text-(--primary-color) uppercase mb-10">
          Our Branches
        </h2>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d187075.21064432256!2d30.46508279315379!3d30.94868832724484!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1z2YHYsdmI2Lkg2KjZhNio2YY!5e0!3m2!1sar!2seg!4v1752793054022!5m2!1sar!2seg"
          className="w-full h-[400px] md:h-[500px]"
          allowFullScreen="tru"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
}

export default Contact;