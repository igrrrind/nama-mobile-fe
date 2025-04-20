import { UserTable } from "@/components/admin/tables/UserTable";
import { users } from "@/constants/adminData";

export default function UsersPage() {
  // In a real app, this would be an API call or database query
  const data = users;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Quản lý người dùng</h1>
      <UserTable data={data} />
    </div>
  );
} 