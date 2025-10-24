import { useEffect, useState } from "react"

type User = {
  firstName: string;
}

function App() {
  const [data, setData] = useState<User[]>([])
  const [inputValue, setInputValue] = useState("")
  const [filteredData, setFilteredData] = useState<User[]>([])

  const fetchData = async () => {
    try {
      const response = await fetch("https://dummyjson.com/users")
      const jsonData = await response.json()
      const users = jsonData.users.map((user: any) => ({ firstName: user.firstName }))
      setData(users)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setInputValue(value)
     if (value.trim() === ""||value.length===0) {
      setFilteredData([]);
    } else {
      setFilteredData(
        data.filter((user) =>
          user.firstName.toLowerCase().includes(value.toLowerCase())
        )
      );
    }

  }

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div className="relative w-[300px] mb-2">
        <input
          type="text"
          value={inputValue}
          onChange={handleChange}
          className="w-full relative outline-none border-2 border-blue-400 focus:border-blue-600 focus:shadow-xl px-4 py-2 rounded-sm"
        />
        {filteredData.length > 0 && (
          <ul className="absolute z-10 w-[300px] bg-gray-200 text-left max-h-[200px] overflow-auto rounded-b-xl">
            {filteredData.map((item, index) => (
              <li key={index} onClick={()=>setInputValue(item.firstName)} className="border-b border-b-gray-400 opacity-75 p-2">
                {item.firstName}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}

export default App
