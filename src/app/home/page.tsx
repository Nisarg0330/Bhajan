import Image from "next/image";

const Page = () => {
    return (
      <div className="flex justify-center items-center h-screen bg-repeat bg-center" style={{ backgroundImage: "url('/backgroundLight.png')" }}>
        <div className="w-[95%] h-[90%] bg-white rounded-3xl shadow-lg flex flex-col justify-center items-center">
          <div className="text-2xl font-bold text-center text-gray-700 gap-2 flex flex-col justify-center items-center">
            <h2 className="font-Noto_Sans_Gujarati">જાય સ્વામિનારાયણ</h2>
            <h1>Welcome to The Bhajan!</h1>
          </div>

          <div className="flex justify-center items-center mt-10">
            <a href="/Bhajans">
            <Image src="/right-arrow-bold.png" alt="" width={30} height={30}/>
            </a>
          </div>
        </div>
      </div>
    );
  };
  
  export default Page;
  