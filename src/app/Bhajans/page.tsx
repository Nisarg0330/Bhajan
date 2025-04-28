import Navbar from "@/components/navbar";
import { bhajanList } from "@/lib/data"

type Bhajan ={
  id: number;
  title: string;
  src: string;
}

const BhajansPage = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-cover bg-center"
    style={{ backgroundImage: "url('/bg.jpg')" }}>
      <div className="w-[95%] h-[90%] bg-white/5 rounded-3xl backdrop-blur-sm shadow-xl flex flex-col justify-center items-center">
        <div className="text-2xl font-bold text-center text-gray-700 gap-2 flex flex-col justify-center items-center">
        <ul className="text-gray-800 font-Noto_Sans_Gujarati font-semibold text-xl gap-2 flex flex-col justify-center items-center">
          {bhajanList.map((bhajan: Bhajan) => (
            <li key={bhajan.id}>
             <a href={`/BhajanPage/${bhajan.id}`} className="font-Noto_Sans_Gujarati">{bhajan.id}. {bhajan.title}</a>
            </li>
         ))}
        </ul>
        </div>
      </div>
      <Navbar/>
    </div>
  )
}

export default BhajansPage