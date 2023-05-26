import React from 'react';
import styles from "./EmployeeTable.module.css";


export default function EmployeeTable(props) {
  return (
    <table className={styles.table}>
        <tr>
            <th>
                Name
            </th>
            <th>
                Email
            </th>
            <th>
                Date Joined
            </th>
            <th>
                Is Experienced
            </th>
        </tr>
        {
            // eslint-disable-next-line react/prop-types
            props.employeeList.map((employee, index) => {
                return (
                    <tr key={index}>
                        <td>{employee.name}</td>
                        <td>{employee.email}</td>
                        <td>{employee.date}</td>
                        <td>{employee.isExperienced}</td>
                    </tr>
                )
            })
        }
    </table>
  )
}
