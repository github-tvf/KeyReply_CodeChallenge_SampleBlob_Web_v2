import { connect } from 'react-redux';
import PostView from './components/PostView';
import { } from 'authentication/actions';

const mapDispatchToProps = { }

const mapStateToProps = (state) => ({
  currentUser: state.currentUser,
});

export default connect(mapStateToProps, mapDispatchToProps)(PostView);
