import { useState } from 'react';
import styles from './EmployeeForm.module.css';

export default function EmployeeForm(props) {

    const [employeeInfo, setEmployeeInfo] = useState({});

    const handleSubmitForm = (event) => {
        event.preventDefault();
        // eslint-disable-next-line react/prop-types
        props.addEmployeeData(employeeInfo);
    }

    return (
        <form className={styles.form} onSubmit={handleSubmitForm}>
            <h3>ENTER EMPLOYEE INFO</h3>
            <div className={styles.formControl}>
                <label htmlFor="name">Name</label>
                <input value={employeeInfo.name} onChange={(event) => setEmployeeInfo({ ...employeeInfo, name: event.target.value })} type="text" placeholder='Enter Employee Name' />
            </div>

            <div className={styles.formControl}>
                <label htmlFor="email">Email</label>
                <input value={employeeInfo.email} onChange={(event) => setEmployeeInfo({ ...employeeInfo, email: event.target.value })} type="email" placeholder='Enter Employee Email' />
            </div>

            <div className={styles.formControl}>
                <label htmlFor="date">Date</label>
                <input value={employeeInfo.date} onChange={(event) => setEmployeeInfo({ ...employeeInfo, date: event.target.value })} type="date" placeholder='Enter Joining Date' />
            </div>

            <div className={styles.formControl}>
                <label htmlFor="expereince">Has Experience</label>
                <select value={employeeInfo.isExperienced} onChange={(event) => setEmployeeInfo({ ...employeeInfo, isExperienced: event.target.value })} name="expereince" id="">
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                </select>
            </div>

            <button className={styles.button}>Submit</button>
        </form>
    )
}
