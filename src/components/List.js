import PropTypes from 'prop-types';
import { Button } from './styles/Button.styled';

import { STable, STHead, STHeadTR, STH, STD, STBody, STBodyTR, StyledTableWrapper } from './styles/STable.styled';

const List = ({ employeesData, handleEdit, handleDelete }) => {
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
                    {employeesData.length > 0 ? (
                        employeesData.map((employeesData, i) => (
                            <STBodyTR key={employeesData.id}>
                                <STD>{i + 1}</STD>
                                <STD>{employeesData.firstName}</STD>
                                <STD>{employeesData.lastName}</STD>
                                <STD>{employeesData.email}</STD>
                                <STD>{employeesData.gender}</STD>
                                <STD>{formatter.format(employeesData.salary)}</STD>
                                <STD>{employeesData.date} </STD>
                                <STD>
                                    <Button
                                        onClick={() => handleEdit(employeesData.id)}
                                    >
                                        Edit
                                    </Button>
                                </STD>
                                <STD>
                                    <Button
                                        onClick={() => handleDelete(employeesData.id)}
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