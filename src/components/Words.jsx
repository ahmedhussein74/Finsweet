import bg from '../images/words.png'

const Words = () => {
  return (
    <section className="w-[90%] mx-auto mt-[50px] lg:mt-[100px]">
      <h1 className="font-bold text-[25px] lg:text-[30px]">
        A few words about our team
      </h1>
      <img src={bg} className="w-full min-h-[200px] my-[15px]" />
      <div className="w-full flex flex-wrap justify-between gap-[50px]">
        <p className="grow md:max-w-[320px] lg:max-w-[400px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem eget
          condimentum enim libero ultricies amet odio fringilla. Ut nibh morbi
          augue porta aliquet commodo. Fermentum auctor lacus eget in ut integer
          viverra sed. Penatibus tortor consequat, habitasse non nisl.
        </p>
        <p className="grow md:max-w-[320px] lg:max-w-[400px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mus cras
          lacus tellus morbi viverra suspendisse ornare. Sit volutpat, volutpat
          ut netus malesuada enim penatibus non aliquet.
        </p>
      </div>
    </section>
  );
}

export default Words