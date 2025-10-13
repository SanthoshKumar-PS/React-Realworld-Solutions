import React,{useState} from 'react'
import QRCode from 'react-qr-code'

const QrCodeGenerator = () => {
    const [qrCodeText,setQrCodeText]=useState<string>('')
    const [inputValue,setInput]=useState<string>('')

    const handleQrCodeText = () =>{
        setQrCodeText(inputValue)
        setInput('')
    }
  return (
    <div className='bg-zinc-500 min-h-screen flex flex-col justify-center items-center space-y-4'>
        <div>
            <input 
                value={inputValue}
                onChange={(e)=>{
                    setInput(e.target.value)
                }}
                type="text" name="qrText" id="" 
                className='p-2 mr-4 focus:outline-none border-2 border-zinc-900 focus:shadow-xl rounded-lg' placeholder='Enter your value here' />
            <button 
                disabled={inputValue && inputValue.length>0 ? false:true} 
                className='cursor-pointer disabled:cursor-not-allowed disabled:opacity-50 '
                onClick={()=>{handleQrCodeText()}}    
            >Generate</button>
        </div>
        <div>
            <QRCode id='qrcode' value={qrCodeText} size={150} bgColor='#3f3f46' fgColor='#ffffff' />
        </div>

    </div>
  )
}

export default QrCodeGenerator