import { bhajanList } from "@/lib/data"

type Bhajan ={
  id: number;
  title: string;
  src: string;
}

const BhajansPage = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-repeat bg-center" style={{ backgroundImage: "url('/backgroundLight.png')" }}>
      <div className="w-[95%] h-[90%] bg-white rounded-3xl shadow-lg flex flex-col justify-center items-center">
        <div className="text-2xl font-bold text-center text-gray-700 gap-2 flex flex-col justify-center items-center">
        <ul>
          {bhajanList.map((bhajan: Bhajan) => (
            <li key={bhajan.id}>
             <a href={`/BhajanPage/${bhajan.id}`} className="font-Noto_Sans_Gujarati">{bhajan.title}</a>
            </li>
         ))}
        </ul>
        </div>
      </div>
    </div>
  )
}

export default BhajansPage