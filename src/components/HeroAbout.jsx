import bg from '../images/microfon.png'

const HeroAbout = () => {
  return (
    <section className='h-screen px-[5%] flex flex-col-reverse lg:flex-row justify-around items-center'>
      <div className="w-full md:w-[400px] flex flex-col gap-[30px]">
        <h1 className="font-bold text-[30px]">About Finsweet Podcast</h1>
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua.
        </p>
        <button className="w-[150px] h-[50px] text-white bg-[#503AE7]">
          Subscribe Now!
        </button>
      </div>
      <img src={bg} className="h-[200px] md:h-[260px]" />
    </section>
  );
}

export default HeroAbout