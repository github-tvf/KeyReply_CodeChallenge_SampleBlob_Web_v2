import { connect } from 'react-redux';
import HomeView from './components/HomeView';
import {
  getAllBlogs
} from './modules/actions'
const mapDispatchToProps = {
  getAllBlogs
 }

const mapStateToProps = (state) => ({
  currentUser: state.currentUser,
  home: state.home,
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeView);
