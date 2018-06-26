import { connect } from 'react-redux';
import Form from '../components/Form';
import { addUser } from '../actions'


const mapDispatchToProps = dispatch => ({
    addUser: user => dispatch(addUser(user))
});

export default connect(
    null,
    mapDispatchToProps
)(Form)
