import React, { useState } from 'react'
import { ToastContext } from './ToastContext'
import type { ToastOptions } from './types';
import ToastContainer from './ToastContainer';

const ToastProvider:React.FC<{children:React.ReactNode}> = ({children}) => {
    const [toasts, setToasts] = useState<ToastOptions[]>([]);
    const showToast = (options:ToastOptions)=>{
        const id = new Date().toISOString();
        setToasts(prev=>[...prev,{...options,id}]);
        setTimeout(()=>{
            setToasts(prev => prev.filter(toast=> toast.id !==id));
        },options.duration||3000);
    }
    const onRemove = (id:string) =>{
        setToasts(prev => prev.filter(toast=>toast.id!==id));
    }
  
    return (
    <ToastContext.Provider value={showToast}>
        {children}
        <ToastContainer toasts={toasts} onRemove={onRemove}/>
    </ToastContext.Provider>

  )
}

export default ToastProvider