import newItem from '../../assets/new.jpg'

const NewItem = () => {
  return (
    <section className="w-full relative top-[72px] py-10 bg-(--creamy-color)">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="flex flex-col justify-center items-center">
          <h2 className="text-2xl md:text-4xl font-semibold text-blue-500 text-center uppercase mb-15">
            New Arrival
          </h2>
          <div className="w-full flex flex-col items-center gap-10">
            <div className="text-center md:text-left">
              <h4>Dubai Choco Burger</h4>
              <span>Price: 120 EGP</span>
              <p></p>
            </div>
            <figure>
              <img
                src={newItem}
                className="w-[300px] h-[300px] md:w-[400px] md:h-[400px]"
                alt="Item Image"
              />
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NewItem
