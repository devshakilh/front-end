import axios from 'axios';
import React from 'react';
import { useState, useEffect } from 'react';
import DashBoard from '../Shared/DashBoard';
import Pagination from './Pagination'




const Users = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [usersPerPage, setUsersPerPage] = useState(2);

    useEffect(() => {
        const fetchUsers = async () => {
            setLoading(true);
            const res = await axios.get('https://reqres.in/api/users?page=2');
            setUsers(res.data.data);
            setLoading(false);
        }
        fetchUsers();

    }, []);
    console.log(users);
    const indexOfLastUser = currentPage * usersPerPage;
    const indexOfFirstUser = indexOfLastUser - usersPerPage;
    const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

    const paginate = pageNumber => setCurrentPage(pageNumber);
    return (
        <div>
            <DashBoard users={currentUsers} loading={loading} />
            <Pagination
                UsersPerPage={usersPerPage}
                totalUsers={users.length}
                paginate={paginate}
            />
        </div>
    );
};

export default Users;