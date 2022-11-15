import { Button } from './styles/Button.styled';
import React, { useState } from 'react'
import Swal from 'sweetalert2';
import { StyledButton, StyledForm, StyledFormWrapper, StyledInput, StyledFieldset } from './styles/Add.styled';

function Edit({ employees, selectedEmployee, setEmployees, setIsEditing }) {

    const id = selectedEmployee.id;

    const [firstName, setFirstName] = useState(selectedEmployee.firstName);
    const [lastName, setLastName] = useState(selectedEmployee.lastName);
    const [email, setEmail] = useState(selectedEmployee.email);
    const [gender, setGender] = useState(selectedEmployee.gender);
    const [salary, setSalary] = useState(selectedEmployee.salary);
    const [date, setDate] = useState(selectedEmployee.date);

    const handleUpdate = e => {
        e.preventDefault();

        if (!firstName || !lastName || !email || !gender || !salary || !date) {
            return Swal.fire({
                icon: 'error',
                title: 'Error!',
                text: 'All fields are required.',
                showConfirmButton: true
            });
        }

        const employee = {
            id,
            firstName,
            lastName,
            email,
            gender,
            salary,
            date
        };

        for (let i = 0; i < employees.length; i++) {
            if (employees[i].id === id) {
                employees.splice(i, 1, employee);
                break;
            }
        }

        setEmployees(employees);
        setIsEditing(false);

        Swal.fire({
            icon: 'success',
            title: 'Updated!',
            text: `${employee.firstName} ${employee.lastName}'s data has been updated.`,
            showConfirmButton: false,
            timer: 1500
        });
    };

    return (
        <StyledFormWrapper>
            <StyledForm onSubmit={handleUpdate}>
                <h1>Edit Employee</h1>
                <label htmlFor="firstName">First Name</label>
                <StyledInput
                    id="firstName"
                    type="text"
                    name="firstName"
                    value={firstName}
                    onChange={e => setFirstName(e.target.value)}
                />
                <label htmlFor="lastName">Last Name</label>
                <StyledInput
                    id="lastName"
                    type="text"
                    name="lastName"
                    value={lastName}
                    onChange={e => setLastName(e.target.value)}
                />
                <label htmlFor="email">Email</label>
                <StyledInput
                    id="email"
                    type="email"
                    name="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
                <label htmlFor="gender">Gender</label>
                <StyledFieldset>
                    <legend>Gender</legend>
                    <label>
                        <input type='radio' value='female' name='gender'
                            onChange={e => setGender(e.target.value)} />
                        Female
                    </label>
                    <label>
                        <input type='radio' value='male' name='gender'
                            onChange={e => setGender(e.target.value)} />
                        Male
                    </label>
                </StyledFieldset>
                <label htmlFor="salary">Salary ($)</label>
                <StyledInput
                    id="salary"
                    type="number"
                    name="salary"
                    value={salary}
                    onChange={e => setSalary(e.target.value)}
                />
                <label htmlFor="date">Date</label>
                <StyledInput
                    id="date"
                    type="date"
                    name="date"
                    value={date}
                    onChange={e => setDate(e.target.value)}
                />
                <StyledButton>
                    <Button type="submit" value="Update">Update</Button>
                    <Button
                        type="button"
                        value="Cancel"
                        onClick={() => setIsEditing(false)}>Cancel</Button>
                </StyledButton>
            </StyledForm>
        </StyledFormWrapper>
    );
}

export default Edit