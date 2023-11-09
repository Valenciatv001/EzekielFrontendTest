'use client'

import React, { useState, useEffect } from 'react';
import UserTableRow from './UserTableRow';
import fetchUsers from '../api/users';

import styles from '../page.module.css';

const UsersTable = () => {
  const [users, setUsers] = useState([]);
  const [pageSize, setPageSize] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);

  const fetchUsersData = async () => {
    const response = await fetchUsers(pageSize, currentPage);
    setUsers(response);
  };

  useEffect(() => {
    fetchUsersData();
  }, [pageSize, currentPage]);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
    fetchUsersData();
  };

  const handlePageSizeChange = (newPageSize) => {
    setPageSize(newPageSize);
    setCurrentPage(1);
    fetchUsersData();
  };

  const renderPagination = () => {
    const totalPages = Math.ceil(50 / pageSize);
    const pages = [];

    for (let i = 1; i <= totalPages; i++) {
      const activeClass = i === currentPage ? styles.active : '';
      pages.push(
        <button
          key={i}
          className={activeClass}
          onClick={() => handlePageChange(i)}
        >
          {i}
        </button>
      );
    }

    return (
      <div className="pagination">
        <button
          className={styles.button}
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        {pages}
        <button
          className={styles.button}
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    );
  };

  return (
    <div className={styles.usersTableContainer}>
      <select
        value={pageSize}
        onChange={(event) => handlePageSizeChange(event.target.value)}
        className={styles.pageSizeSelector}
      >
        <option value="5">5 users per page</option>
        <option value="10">10 users per page</option>
      </select>
      <table className={styles.userTable}>
        <thead>
          <tr className={styles.tableHeader}>
            <th className={styles.tableHeaderCell}>Full Name</th>
            <th className={styles.tableHeaderCell}>Country</th>
            <th className={styles.tableHeaderCell}>Email Address</th>
            <th className={styles.tableHeaderCell}>Phone Number</th>
          </tr>
        </thead>
        <tbody className={styles.tbody}>
          {users.map((user) => (
            <UserTableRow key={user.id} user={user} />
          ))}
        </tbody>
      </table>
      {renderPagination()}
    </div>
  );
};

export default UsersTable;
