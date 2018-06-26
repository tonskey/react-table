import React from 'react';

const TableRow = ({user, deleteUser}) => (
    <tr>
        <td>
            {user.firstName}
        </td>
        <td>
            {user.lastName}
        </td>
        <td>
            {user.phone}
        </td>
        <td>
            {user.gender}
        </td>
        <td>
            {user.age}
        </td>
        <td>
            <a
                onClick={ () => deleteUser(user.id)}
                className="button is-danger is-outlined"
            >
                Delete
            </a>
        </td>
    </tr>
);

export default TableRow;
