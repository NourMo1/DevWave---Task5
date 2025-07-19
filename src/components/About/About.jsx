import about from '../../assets/about.jpg'
import aboutFull from '../../assets/about-full.jpg'
import aboutThird from '../../assets/about-third.webp'
import aboutOne from '../../assets/about-one.jpg'

const About = () => {
  return (
    <section className="relative top-[72px] w-full py-20 bg-(--creamy-color)">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="flex flex-col text-center justify-between gap-10 md:flex-row md:text-start md:gap-[4%] mb-20">
          <div className="md:w-[48%]">
            <h2 className="text-2xl md:text-4xl font-semibold text-(--primary-color) uppercase mb-15">
              About Us
            </h2>
            <p className="text-lg md:text-xl text-zinc-800">
              Established in 2021 , Alexandria, Blaban began as a small factory
              specializing in traditional Egyptian desserts such as rice
              pudding, couscous, Om Ali, and ice cream. Blaban revolutionized
              the market with its innovative product, Ashtouta, which quickly
              became a bestseller and drove rapid growth.
            </p>
          </div>
          <figure className="md:w-[48%]">
            <img src={about} className="h-full object-cover" alt="Image" />
          </figure>
        </div>
      </div>
      <div className="relative commitment text-center py-10 px-4">
        <h2 className="text-2xl md:text-4xl font-semibold text-white uppercase mb-15">
          Commitment to Quality
        </h2>
        <p className="text-lg md:text-xl md:w-[60%] mx-auto text-(--creamy-color) mb-5">
          B.Laban operates under a robust Quality Assurance Department to ensure
          consistency, precision, and excellence.
        </p>
        <p className="text-lg md:text-xl md:w-[60%] mx-auto text-(--creamy-color)">
          This focus is guided by the expertise of Dr. Moamen Ammar, whose
          veterinary background emphasizes attention to detail.
        </p>
      </div>
      <div className="max-w-screen-xl mx-auto px-4 pt-20 ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-5">
          <div className="numbers px-4 py-10 bg-(--secondary-color) flex justify-center items-center">
            <div className="px-4">
              <h2 className="text-2xl md:text-4xl font-semibold text-white uppercase mb-15">
                B.Laban in Numbers
              </h2>
              <ul className="flex flex-col gap-3">
                <li>
                  <span className="font-semibold me-3">2021 - 2022 :</span>
                  22 branches across Egypt.
                </li>
                <li>
                  <span className="font-semibold me-3">2021 - 2023 :</span>
                  53 branches (18 in Upper Egypt, 3 in KSA).
                </li>
                <li>
                  <span className="font-semibold me-3">2021 - 2024 :</span>
                  87 branches in Egypt, 30 in KSA, and new branches in Oman,
                  Qatar, Libya, Jordan, and UAE.
                </li>
                <li>
                  <span className="font-semibold me-3">2021 - 2025 :</span>
                  Expanding to Morocco, Kuwait, Bahrain, Iraq, Europe, and the
                  USA.
                </li>
              </ul>
            </div>
          </div>
          <div className="images grid grid-cols-1 gap-2 md:gap-5">
            <figure className="full">
              <img
                src={aboutFull}
                className="h-full object-cover"
                alt="Image"
              />
            </figure>
            <div className="one-to-third grid grid-cols-12 gap-2 md:gap-5">
              <div className="col-span-7">
                <img
                  src={aboutThird}
                  className="h-full object-cover"
                  alt="Image"
                />
              </div>
              <div className="col-span-5">
                <img
                  src={aboutOne}
                  className="h-full object-cover"
                  alt="Image"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;