import { useState } from "react"

const Nested = () => {
type CategoryType = {
    id:string;
    name:string;
    subcategories: CategoryType[] 
} 
const categories = [
  {
    id: "1",
    name: "Electronics",
    subcategories: [
      {
        id: "2",
        name: "Laptops",
        subcategories: [
          { id: "3", name: "Gaming Laptops", subcategories: [] },
          { id: "4", name: "Working Laptops", subcategories: [] }
        ]
      },
      {
        id: "5",
        name: "Smartphones",
        subcategories: []
      }
    ]
  },
  {
    id: "6",
    name: "Fashion",
    subcategories: [
      { id: "7", name: "Men", subcategories: [] },
      { id: "8", name: "Women", subcategories: [] }
    ]
  }
]

function CategoryItems({category}:{category:CategoryType}){
    const [open,setOpen]=useState<boolean>(false)
    const hasChildren = category.subcategories && category.subcategories.length>0
    
    return (
        <li ml-4>
            <div className="flex justify-center gap-2 cursor-pointer hover:underline"
                onClick={()=>hasChildren&& setOpen(!open)}
            >
                {hasChildren &&(
                    <span className="text-gray-500">
                        {open? "X" : "->"}
                    </span>
                )}
                <span>{category.name}</span>
            </div>


            {/* SubList */}
            {open && hasChildren &&(
                <ul className="ml-6 ">
                    {category.subcategories.map(subcat=>(
                        <CategoryItems key={subcat.id} category={subcat}/>
                    ))}

                </ul>
            )}
        </li>
    )

}
  return (
    <ul className="list-disc">
        {categories.map(cat=>(
            <CategoryItems key={cat.id} category={cat}/>
        ))}
    </ul>
  )
}

export default Nested