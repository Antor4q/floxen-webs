

import CategoriesTable from "@/src/components/dashboard/categories/CategoriesTable";
import StatsCards from "@/src/components/dashboard/overview/StatsCards";


const CategoriesPage = () => {
    return (
       <div className="p-14">
                   <StatsCards/>
                   {/* table */}
                   <div>
                    <CategoriesTable/>
                   </div>
               </div>
    );
};

export default CategoriesPage;