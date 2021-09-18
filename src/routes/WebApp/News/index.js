import { connect } from 'react-redux';
import NewsView from './components/NewsView';
import { } from 'authentication/actions';

const mapDispatchToProps = { }

const mapStateToProps = (state) => ({
  currentUser: state.currentUser,
});

export default connect(mapStateToProps, mapDispatchToProps)(NewsView);
