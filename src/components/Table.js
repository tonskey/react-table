import React from 'react';
import TableRow from './TableRow';

const Table = ({users, deleteUser}) => (
    users.length > 0
        ?<div className="table">
            <h2 className="subtitle">Users</h2>
            <table className="table is-striped is-hoverable is-fullwidth">
                <thead>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Phone Name</th>
                    <th>Gender</th>
                    <th>Age</th>
                    <th>Controls</th>
                </tr>
                </thead>
                <tbody>
                {users.map(user =>
                    <TableRow
                        key={user.id}
                        user={user}
                        deleteUser={deleteUser}
                    />
                )}
                </tbody>
            </table>
        </div>
        : <h3 className="subtitle">Nothing to show :(</h3>
);

export default Table;
