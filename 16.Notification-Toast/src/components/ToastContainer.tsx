import { createPortal } from "react-dom";
import type { ToastOptions } from "./types"
import Toast from "./Toast";
import { AnimatePresence } from "framer-motion";


const ToastContainer = ({toasts,onRemove}:{toasts:ToastOptions[]; onRemove:(id:string)=>void}) => {
  const toastRoot = document.getElementById('toast-root');
  if(!toastRoot) return null;
    return createPortal(
        <div className="fixed top-10 right-10 flex flex-col gap-2">
            <AnimatePresence mode="popLayout">
            {toasts.map(toast=>(
                <Toast toast={toast} onRemove={onRemove} key={toast.id}/>
            ))}
            </AnimatePresence>
        </div>,toastRoot
    )
}

export default ToastContainer