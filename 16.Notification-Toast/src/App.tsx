import { useToast } from "./components/ToastContext";

function App() {
  const showToast = useToast();
  return (
    <div className="min-h-screen flex flex-col md:flex-row justify-center items-center bg-gray-900 space-y-10 md:space-y-0 md:space-x-10">
      <button className="bg-green-500 hover:bg-green-500/80 text-white font-medium px-4 py-2 rounded-lg shadow-md"
      onClick={()=>showToast({message:"Order Placed successfully",type:'success'})}
      >
        Show Success
      </button>

      <button className="bg-orange-500 hover:bg-orange-500/80 text-white font-medium px-4 py-2 rounded-lg shadow-md"
      onClick={()=>showToast({message:"Slow internet connection",type:'warning'})}
      >
        Show Warning
      </button>
      <button className="bg-blue-500 hover:bg-blue-500/80 text-white font-medium px-4 py-2 rounded-lg shadow-md"
      onClick={()=>showToast({message:"You got a notification",type:'info'})}
      >
        Show Info
      </button>
      <button className="bg-red-500 hover:bg-red-500/80 text-white font-medium px-4 py-2 rounded-lg shadow-md"
      onClick={()=>showToast({message:"Internal Server Error", type:'error'})}
      >
        Show Error
      </button>
    </div>  
  );
}

export default App;
