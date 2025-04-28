import Navbar from "@/components/navbar";
import Image from "next/image";

const Page = () => {
    return (
      <div className="flex flex-col justify-center items-center h-screen bg-cover bg-center" style={{ backgroundImage: "url('/bg.jpg')" }}>
        <div className="w-[95%] h-[90%] bg-white/5 rounded-3xl backdrop-blur-sm shadow-xl flex flex-col justify-center items-center">
          <div className="text-2xl font-bold text-center text-gray-700 gap-2 flex flex-col justify-center items-center">
            <div className=''>
              
            </div>
          </div>
        </div>
        <Navbar/>
      </div>

    );
  };
  
  export default Page;
  