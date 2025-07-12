import { useEffect, useState } from 'react';
import API from '../api';
import { useAuth } from '../context/AuthContext';

const Dashboard = () => {
  const { user, logout } = useAuth();
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const fetchUsers = async () => {
      const res = await API.get(`/users?search=${search}&filter=${filter}`);
      setUsers(res.data);
    };
    fetchUsers();
  }, [search, filter]);

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">User Dashboard</h2>
        <div className="flex items-center space-x-4">
          {user && (
            <div className="text-right">
              <div className="font-semibold text-gray-700">{user.name}</div>
              <div className="text-gray-500 text-sm">{user.email}</div>
            </div>
          )}
          <button
            onClick={logout}
            className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded"
          >
            Logout
          </button>
        </div>
      </div>
      <div className="flex space-x-4 mb-6">
        <input
          type="text"
          placeholder="Search by name"
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="text"
          placeholder="Filter by address"
          onChange={(e) => setFilter(e.target.value)}
          className="flex-1 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <ul className="space-y-3">
        {users.map(u => (
          <li
            key={u._id}
            className="border border-gray-200 rounded p-4 shadow-sm hover:shadow-md transition-shadow"
          >
            <p className="font-semibold text-lg text-gray-900">{u.name}</p>
            <p className="text-gray-600">{u.email}</p>
            <p className="text-gray-600">{u.phone}</p>
            <p className="text-gray-600">{u.address}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
