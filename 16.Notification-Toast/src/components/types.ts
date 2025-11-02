export type ToastType = "success" | "error" | "info" | "warning"

export type ToastOptions = {
    id?: string;
    message:string;
    type?:ToastType;
    duration?:number;
}