import { connect } from 'react-redux';
import Table from '../components/Table';
import { deleteUser } from '../actions'

const mapStateToProps = ({users}) => ({
    users
});

const mapDispatchToProps = dispatch => ({
    deleteUser: id => dispatch(deleteUser(id))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Table)
