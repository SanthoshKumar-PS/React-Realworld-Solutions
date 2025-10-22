import React, { useEffect, useState } from 'react'

type GitHubUser = {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
  name: string | null;
  company: string | null;
  blog: string;
  location: string | null;
  email: string | null;
  hireable: boolean | null;
  bio: string | null;
  twitter_username: string | null;
  public_repos: number;
  public_gists: number;
  followers: number;
  following: number;
  created_at: string;
  updated_at: string;
};


const GithubFinder = () => {
    const [userName,setUserName]=useState<string>("SanthoshKumarPS")
    const url=`https://api.github.com/users/${userName}`
    const [userData,setUserData]=useState<GitHubUser>()
    const [isLoading,setIsLoading]=useState<boolean>(false)

    async function handleOnclick(){
        setIsLoading(true)
        const response=await fetch(url)
        const jsonData=await response.json()
        setUserData(jsonData)
        console.log(jsonData)
        setIsLoading(false)
        setUserName('')

    }

    useEffect(()=>{
        handleOnclick()
    },[])




  return (
    <div className='min-h-screen flex flex-col space-y-10 justify-center items-center bg-gradient-to-r from-blue-300 to-purple-200 text-white'>
        <div>
            <input type="text" 
            value={userName}
            onChange={(e)=>{
                e.preventDefault()
                setUserName(e.target.value)
            }}
            name="searchbar" placeholder='Search Acounts...' 
            className='mr-4 text-gray-700 p-2 bg-white rounded-md outline-none focus:border-1 focus:border-blue-700 focus:shadow-xl' 
            />
            
            <button onClick={()=>{handleOnclick()}} className='bg-blue-400 py-2 px-4 rounded-xl cursor-pointer hover:bg-blue-500 hover:scale-103'>Search</button>
        </div>

        {isLoading && (
            <div>Loading... Please wait</div>
        )}
        
        {!isLoading && userData &&(
            <div>
                <div className='text-center text-blue-600 font-medium text-xl'>{userData.name}</div>
                <img src={userData.avatar_url} alt="Image" className='w-64 h-64' />
            </div>
        )}
    </div>
  )
}

export default GithubFinder