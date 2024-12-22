import video4 from "../assets/video4.mp4";
import video10 from "../assets/video10.mp4";
import video6 from "../assets/video6.mp4";

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20">
      <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
      Where Vision Meets Expertise
        <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
          {" "}
          ROSCOE
        </span>
      </h1>
      <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
      Innovate, Strategize, Succeed <br />
      Your Partner in Success! We offer expert consultancy services to help you achieve your business goals with tailored solutions and strategic guidance.
      </p>
      <div className="flex justify-center my-10">
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=bjorson.2023@gmail.com&su=Enquiry"
          className="bg-gradient-to-r from-orange-500 to-orange-800 py-3 px-4 mx-3 rounded-md"
        >
          Email
        </a>
        <a href="https://wa.me/918210444945" className="py-3 px-4 mx-3 rounded-md border">
          WhatsApp
        </a>
      </div>
      <div className="text-center mt-10">
        <h2 className="text-2xl sm:text-3xl font-semibold">
          {/* Edit this heading as needed */}
          Our Services
        </h2>
      </div>
      <div className="flex mt-10 justify-center space-x-6">
        {/* Video 4 */}
        <div className="flex flex-col items-center w-full sm:w-1/3 lg:w-1/4">
          <video
            autoPlay
            loop
            muted
            className="rounded-lg w-full border border-orange-700 shadow-sm shadow-orange-400"
          >
            <source src={video4} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <h3 className="text-lg sm:text-xl font-semibold mt-4">Web Development</h3> {/* Edit this heading as needed */}
        </div>

        {/* Video 5 */}
        <div className="flex flex-col items-center w-full sm:w-1/3 lg:w-1/4">
          <video
            autoPlay
            loop
            muted
            className="rounded-lg w-full border border-orange-700 shadow-sm shadow-orange-400"
          >
            <source src={video10} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <h3 className="text-lg sm:text-xl font-semibold mt-4">BPO/KPO</h3> {/* Edit this heading as needed */}
        </div>

        {/* Video 6 */}
        <div className="flex flex-col items-center w-full sm:w-1/3 lg:w-1/4">
          <video
            autoPlay
            loop
            muted
            className="rounded-lg w-full border border-orange-700 shadow-sm shadow-orange-400"
          >
            <source src={video6} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <h3 className="text-lg sm:text-xl font-semibold mt-4">Data Analytics</h3> {/* Edit this heading as needed */}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
