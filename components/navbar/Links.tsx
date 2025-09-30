"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";

export default function Links() {
  const brands = ["Phones", "Tablets", "Wearables", "Audio", "Accessories"];
  return (
    <>
      <div className="flex gap-8 max-sm:hidden">
        {brands.map((brand) => (
          <Link key={brand} href={"/"}>
            <h2>{brand}</h2>
          </Link>
        ))}
      </div>
    </>
  );

  //   const [activeMenu, setActiveMenu] = useState<string | null>(null);

  //   const mainNavItems = [
  //     {
  //       label: "Phones",
  //       href: "#",
  //       hasDropdown: true,
  //     },
  //   ];

  //   const products = [
  //     {
  //       name: "HONOR Magic V5",
  //       image: "https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg",
  //     },
  //     {
  //       name: "HONOR X9d",
  //       image: "https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg",
  //     },
  //     {
  //       name: "HONOR 400 Smart 5G",
  //       image: "/honor-400-smart-5g-phone-beige.jpg",
  //     },
  //     {
  //       name: "HONOR X7d",
  //       image: "https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg",
  //     },
  //     {
  //       name: "HONOR X5c",
  //       image: "https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg",
  //     },
  //   ];

  //   return (
  //     <nav className="bg-white border-b border-gray-200">
  //       {/* Main Navigation Bar */}
  //       <div className="max-w-[1400px] mx-auto px-6">
  //         <div className="flex items-center justify-between">
  //           <div className="hidden lg:flex items-center gap-8">
  //             {mainNavItems.map((item) => (
  //               <div
  //                 key={item.label}
  //                 className="relative"
  //                 onMouseEnter={() =>
  //                   item.hasDropdown && setActiveMenu(item.label)
  //                 }
  //                 onMouseLeave={() => setActiveMenu(null)}
  //               >
  //                 <a
  //                   href={item.href}
  //                   className={`text-sm text-gray-700 hover:text-black transition-colors pb-5 border-b-2 ${
  //                     activeMenu === item.label
  //                       ? "border-black"
  //                       : "border-transparent"
  //                   }`}
  //                 >
  //                   {item.label}
  //                 </a>
  //               </div>
  //             ))}
  //           </div>

  //           {/* Right Icons */}
  //           <div className="flex items-center gap-4">
  //             <button className="p-2 hover:bg-gray-100 rounded-full transition-colors"></button>
  //             <button className="p-2 hover:bg-gray-100 rounded-full transition-colors"></button>
  //           </div>
  //         </div>
  //       </div>

  //       {/* Mega Menu Dropdown */}
  //       {activeMenu === "Phones" && (
  //         <div
  //           className="absolute left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-50"
  //           onMouseEnter={() => setActiveMenu("Phones")}
  //           onMouseLeave={() => setActiveMenu(null)}
  //         >
  //           <div className="max-w-[1400px] mx-auto px-6 py-8">
  //             {/* Tabs */}

  //             {/* Product Grid */}
  //             <div className="grid grid-cols-5 gap-6 mb-8">
  //               {products.map((product) => (
  //                 <div key={product.name} className="group cursor-pointer">
  //                   <div className="bg-gray-50 rounded-lg p-6 mb-3 group-hover:bg-gray-100 transition-colors">
  //                     <div className="relative">
  //                       <img
  //                         src={product.image || "/placeholder.svg"}
  //                         alt={product.name}
  //                         className="w-full h-48 object-contain"
  //                       />

  //                     </div>
  //                   </div>
  //                   <h3 className="text-center text-sm text-gray-900 font-medium">
  //                     {product.name}
  //                   </h3>
  //                 </div>
  //               ))}
  //             </div>
  //           </div>
  //         </div>
  //       )}
  //     </nav>
  //   );
}
