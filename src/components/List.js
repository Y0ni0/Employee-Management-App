
import { Button } from './styles/Button.styled';

import { STable, STHead, STHeadTR, STH, STD, STBody, STBodyTR, StyledTableWrapper } from './styles/STable.styled';

const List = ({ employees, handleEdit, handleDelete }) => {
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: null
    });

    return (

        <StyledTableWrapper>
            <STable>
                <STHead>
                    <STHeadTR>
                        <STH>No.</STH>
                        <STH>First Name</STH>
                        <STH>Last Name</STH>
                        <STH>Email</STH>
                        <STH>Gender</STH>
                        <STH>Salary</STH>
                        <STH>Date</STH>
                        <STH colSpan={2}>
                            Actions
                        </STH>
                    </STHeadTR>
                </STHead>
                <STBody>
                    {employees.length > 0 ? (
                        employees.map((employees, i) => (
                            <STBodyTR key={employees.id}>
                                <STD>{i + 1}</STD>
                                <STD>{employees.firstName}</STD>
                                <STD>{employees.lastName}</STD>
                                <STD>{employees.email}</STD>
                                <STD>{employees.gender}</STD>
                                <STD>{formatter.format(employees.salary)}</STD>
                                <STD>{employees.date} </STD>
                                <STD>
                                    <Button
                                        onClick={() => handleEdit(employees.id)}
                                    >
                                        Edit
                                    </Button>
                                </STD>
                                <STD>
                                    <Button
                                        onClick={() => handleDelete(employees.id)}
                                    >
                                        Delete
                                    </Button>
                                </STD>
                            </STBodyTR>
                        ))
                    ) : (
                        <STBodyTR>
                            <STD colSpan={7}>No Employees</STD>
                        </STBodyTR>
                    )}
                </STBody>
            </STable>
        </StyledTableWrapper>
    )
}


export default List