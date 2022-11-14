import React from 'react'
import PropTypes from 'prop-types';

const employeesData = [{
    id: 1,
    firstName: 'Susan',
    lastName: 'Jordon',
    email: 'susan@example.com',
    gender: '',
    salary: '95000',
    date: '2019-04-11'
}]

const List = () => {
    return (

        <div>
            <ul>
                {employeesData.map((data) =>
                    <li key={data.id}>{data.firstName}</li>)}
            </ul>
        </div>
    )
}


export default List