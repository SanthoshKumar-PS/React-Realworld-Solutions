import { createContext, useContext } from "react";
import type { ToastOptions } from "./types";

export const ToastContext = createContext<(options:ToastOptions)=>void>(()=>{});

export const useToast = ()=> useContext(ToastContext)