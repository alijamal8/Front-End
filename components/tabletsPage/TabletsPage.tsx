"use client"
import React, { useEffect } from 'react'
import FilterSide from './FilterSide'
import SideProducts from '../global/SideProducts'
import { usePhonesFilters } from '@/stores/usePhoneFilterStore';
import { Product } from '@/types/homePage';
import Content from '../global/Content';
import { Separator } from '../ui/separator';
import { useTranslations } from 'next-intl';
 



function TabletsPage({ initialProducts }: { initialProducts: Product[] }) {
  const setProducts = usePhonesFilters((state) => state.setProducts);
  useEffect(() => {
    setProducts(initialProducts);
  }, [initialProducts, setProducts]);
  const filtered = usePhonesFilters((state) => state.filtered);
  const t = useTranslations("category");
     
  return (
    <>
    <div className="px-10 grid grid-cols-[22%_78%] mt-10 space-x-10 max-sm:grid-cols-1 max-sm:px-0 max-sm:mt-0">
      <div id="left">
        <FilterSide
        
        />
      </div>
      <div id="right">
          <div className="mt-11 p-6 bg-[#f8f9fa] dark:bg-black max-sm:mt-0">
            <div className="mb-4">
              <Content title="tablets" description="tablets" />

              <p className="mb-4 font-bold">
                ({filtered.length}) {t("products")}
              </p>
            </div>
            <Separator className="mb-8" />

            <SideProducts filtered={filtered} />
          </div>
        </div>
    </div>
    </>
  )
}

export default TabletsPage