import type { ToastOptions } from "./types";
import { Check, CircleX, Info, Shield, TriangleAlert, X } from "lucide-react";
import {motion} from "framer-motion";
const statusMap = {
  success: {
    icon: <Check size={20} />,
    color: "bg-green-500/90"
  },
  error: {
    icon: <Shield size={20} />,
    color: "bg-red-500/50"
  },
  warning: {
    icon: <TriangleAlert  size={20} />,
    color: "bg-orange-500/80"
  },
  info: {
    icon: <Info size={20} />,
    color: "bg-blue-500/50"
  },
};
const Toast = ({toast,onRemove}:{toast:ToastOptions; onRemove:(id:string)=>void}) => {
    const {id,message,type='info',duration=3000} = toast;
  return (
    <motion.div 
    initial={{x:500}}
    animate={{x:0}}
    exit={{x:500}}
    className={`relative p-2 h-14 flex items-center justify-between rounded-lg min-w-80 gap-1 text-white  ${statusMap[type].color}`}>
        <div className="flex items-center gap-2 font-medium">
            {statusMap[type].icon}
            <p>{message}</p>
        </div>

        <button onClick={()=>onRemove(id!)} className="px-3 py-1 rounded-lg text-gray-300">
            <X size={18}/> 
        </button>
        <motion.div
            className="absolute bottom-0 left-0 h-1 bg-white rounded-bl-lg rounded-r-sm"
            initial={{width:"100%"}}
            animate={{width:0}}
            transition={{duration: duration / 1000, ease: "linear"}}
        >

        </motion.div>
    </motion.div>

  )
}

export default Toast