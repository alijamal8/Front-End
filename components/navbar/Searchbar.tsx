import { Input } from "@/components/ui/input";
import Searchicon from "./Searchicon";
import { IoCloseOutline } from "react-icons/io5";
import { Button } from "../ui/button";
import { Propsclose } from "@/types/navbar";
import { Search } from "lucide-react";
export default function Searchbar({ onClose }: Propsclose) {
  return (
    <>
      <div className="max-w-xl mx-auto px-8 flex flex-row-reverse max-sm:max-w-sm max-sm:flex max-sm:justify-center">
        <Input
          type="search"
          placeholder="Enter your search keyword"
          className="min-w-lg max-sm:min-w-xs"
        />
        <Button variant={"ghost"}>
          <Search className="hover:cursor-pointer border-0 size-5" />
        </Button>
        <div className="absolute right-140 mr-6 max-sm:right-0">
          <Button variant={"ghost"} onClick={onClose}>
            <IoCloseOutline className="size-6 " />
          </Button>
        </div>
      </div>
    </>
  );
}
