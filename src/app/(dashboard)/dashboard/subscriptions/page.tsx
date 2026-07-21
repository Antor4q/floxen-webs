import StatsCards from "@/src/components/dashboard/overview/StatsCards";
import SubscriptionTable from "@/src/components/dashboard/subscriptions/SubscriptionTable";


const SubscriptionsPage = () => {
    return (
       <div className="p-14">
                   <StatsCards/>
                   <div className="mt-7">
                      <SubscriptionTable/>
                   </div>
               </div>
    );
};

export default SubscriptionsPage;