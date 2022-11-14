import React, { useState, useRef, useEffect } from 'react'
import Swal from 'sweetalert2';
import { StyledFormWrapper, StyledForm, StyledInput, StyledFieldset, StyledButton } from './styles/Add.styled';
import { Button } from './styles/Button.styled'


function Add({ employees, setEmployees, setIsAdding }) {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [gender, setGender] = useState('');
    const [salary, setSalary] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('');

    const textInput = useRef(null);

    useEffect(() => {
        textInput.current.focus();
    }, [])

    const handleAdd = e => {
        e.preventDefault();
        if (!firstName || !lastName || !email || !gender || !salary || !dateOfBirth) {
            return Swal.fire({
                icon: 'error',
                title: 'Error!',
                text: 'All fields are required.',
                showConfirmButton: true
            });
        }

        const id = employees.length + 1;
        const newEmployee = {
            id,
            firstName,
            lastName,
            email,
            gender,
            salary,
            dateOfBirth
        }
        employees.push(newEmployee);
        setEmployees(employees);
        setIsAdding(false);

        Swal.fire({
            icon: 'success',
            title: 'Added!',
            text: `${firstName} ${lastName}'s data has been Added.`,
            showConfirmButton: false,
            timer: 1500
        });
    }


    return (
        <StyledFormWrapper>
            <StyledForm onSubmit={handleAdd}>
                <h1>Add Employee</h1>
                <label htmlFor="firstName">First Name</label>
                <StyledInput
                    id="firstName"
                    type="text"
                    ref={textInput}
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
                <label htmlFor="dateOfBirth">Date of Birth</label>
                <StyledInput
                    id="dateOfBirth"
                    type="date"
                    name="dateOfBirth"
                    value={dateOfBirth}
                    onChange={e => setDateOfBirth(e.target.value)}
                />
                <StyledButton style={{ marginTop: '30px' }}>
                    <Button>ADD</Button>
                    <Button onClick={() => setIsAdding(false)}>Cancel</Button>
                </StyledButton>
            </StyledForm>
        </StyledFormWrapper>


    );
}

export default Add