import Chart from "@/src/components/dashboard/overview/Chart";
import RevenueCard from "@/src/components/dashboard/overview/RevenueCard";
import StatsCards from "@/src/components/dashboard/overview/StatsCards";
import UserChart from "@/src/components/dashboard/overview/UserChart";
import VisitorSources from "@/src/components/dashboard/overview/Visitorsources";

const Dashboard = () => {
    return (
        <div className="p-14">
            <StatsCards/>
           {/* <div className="grid grid-cols-5 gap-10 my-8">
                <div className="col-span-3">
                     <Chart/>
                </div>
                <div className="col-span-2">
                     <UserChart/>
                </div>
           </div> */}
           <div className="grid grid-cols-5 gap-8 my-8">
                
                <div className="col-span-3">
                    <RevenueCard/>
                </div>
                <div className="col-span-2">
                     <VisitorSources/>
                </div>
           </div>
        </div>
    );
};

export default Dashboard;