import { Input } from "@/components/ui/input";
import Searchicon from "./Searchicon";
import { IoCloseOutline } from "react-icons/io5";
import { Button } from "../ui/button";
import { Propsclose } from "@/types/navbar";
import { Search } from "lucide-react";
export default function Searchbar({ onClose }: Propsclose) {
  return (
    <>
      <div className="max-w-xl mx-auto px-8 flex flex-row-reverse">
        <Input
          type="search"
          placeholder="Enter your search keyword"
          className="min-w-lg"
        />
        <Button variant={"ghost"}>
          <Search className="hover:cursor-pointer border-0  size-5" />
        </Button>
        <div className="absolute">
          <Button variant={"ghost"} onClick={onClose}>
            <IoCloseOutline className="size-6 " />
          </Button>
        </div>
      </div>
    </>
  );
}
