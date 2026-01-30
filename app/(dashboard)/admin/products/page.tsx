import AdminNav from "@/components/admin/AdminNav";
import { Separator } from "@/components/ui/separator";

function ProductsPage() {
  return (
    <>
      <div className="min-w-[84vw] m-auto">
        <AdminNav from="Products" />
        <Separator className="mb-4 " />
      </div>  
    </>
  );
}

export default ProductsPage;
