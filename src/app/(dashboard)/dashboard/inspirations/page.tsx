import InspirationsTable from "@/src/components/dashboard/inspirations/InspirationsTable";
import StatsCards from "@/src/components/dashboard/overview/StatsCards";

const InspirationsPage = () => {
    return (
       <div className="p-14">
                   <StatsCards/>
                   <div className="mt-8">

                   <InspirationsTable/>
                   </div>
               </div>
    );
};

export default InspirationsPage;