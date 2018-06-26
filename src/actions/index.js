import uuidv1 from 'uuid/v1';

export const addUser = user => ({
    type: 'ADD_USER',
    id: uuidv1(),
    ...user
});

export const deleteUser = id => ({
    type: 'DELETE_USER',
    id
});
