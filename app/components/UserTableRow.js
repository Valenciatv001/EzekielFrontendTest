import React from 'react';
import styles from '../page.module.css'

const UserTableRow = ({ user }) => {
  return (
    <tr className={styles.tableheader}>
      <td className={styles.td}>{user.name.first} {user.name.last}</td>
      <td className={styles.td}>{user.location.country}</td>
      <td className={styles.td}>{user.email}</td>
      <td className={styles.td}>{user.phone}</td>
    </tr>
  );
};

export default UserTableRow;
