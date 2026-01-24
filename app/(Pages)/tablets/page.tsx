import TabletsPage from '@/components/tabletsPage/TabletsPage'
import { ProductsService } from '@/services/api/product';
import React from 'react'


async function page() {
   const data = await ProductsService.getCategoryProduct("Tablets");
   console.log(data)
  return (
    <>
      <TabletsPage  initialProducts={data}/>
    </>
  );
}

export default page