import React from 'react'
import Tabs from './Tabs'



const CustomTabs = () => {
    const tabs=[
        {
            id:1,
            label:"Tab1",
            message:"This is the tab 1",
            count:0
        },
        {
            id:2,
            label:"Tab2",
            message:"This is the tab 2",
            count:0
        },
        {
            id:3,
            label:"Tab3",
            message:"This is the tab 3",
            count:0
        },
        {
            id:4,
            label:"Tab4",
            message:"This is the tab 4",
            count:0     
        },
    ]
  return (
    <Tabs tabs={tabs}/>
  )
}

export default CustomTabs