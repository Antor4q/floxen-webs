import StatsCards from "@/src/components/dashboard/overview/StatsCards";
import UsersTable from "@/src/components/dashboard/users/UsersTable";

const Users = () => {
    return (
        <div className="p-14">
                    <StatsCards/>
                    <div className="mt-8">
                         <UsersTable/>
                    </div>
                </div>
    );
};

export default Users;