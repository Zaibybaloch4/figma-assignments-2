export default function Navbar(){
    return(
    
        <div className="w-full h-20 flex justify-between mt-3 ml-40 px-40 items-center">
            <div className="font-montserrat w-700 size-24px text-2xl text-white">BrandName</div>
              <ul className="flex flex-row space-x-3 text-white top-12 mr-40">
                <li>Home</li>
                <li>Product</li>
                <li>Pricing</li>
                <li>Contact</li>
              </ul>
              <div className="text-1xl text-white flex gap-4   mr-40 font-bold">  Login
       
      <button className="bg-blue-400  p-2 hover:bg-slate-500 text-white text-1xl font-bold"> JOIN US</button>
      </div>
        </div>
    )
}