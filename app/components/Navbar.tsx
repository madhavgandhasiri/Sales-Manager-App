import { FaShoppingBag } from "react-icons/fa";
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

function Navbar() {
  return (
    <div className="flex border-1 p-4 w-full rounded-sm shadow-md justify-between items-center">
      <header className="flex gap-2 items-center">
        <div className="bg-primary p-2 rounded-sm text-primary-foreground">
          <FaShoppingBag />
        </div>
        <h1 className="font-bold text-xl">
          Sales <span className="text-primary">Manager</span>
        </h1>
      </header>
      <div className="flex gap-1 items-center">
        <Input placeholder="search..."/>
        <Button className="bg-primary">+</Button>
      </div>
    </div>
  );
}

export default Navbar;
