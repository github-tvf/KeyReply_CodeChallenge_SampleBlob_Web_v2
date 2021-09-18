import { connect } from 'react-redux';
import NewsDetailView from './components/NewsDetailView';
import { } from 'authentication/actions';

const mapDispatchToProps = { }

const mapStateToProps = (state) => ({
  currentUser: state.currentUser,
});

export default connect(mapStateToProps, mapDispatchToProps)(NewsDetailView);
