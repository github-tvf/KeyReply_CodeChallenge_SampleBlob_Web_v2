import React, { useEffect, Suspense } from 'react';
import { Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import PropTypes from 'prop-types';
import { Switch } from 'react-router';
import { createBrowserHistory as createHistory } from 'history';
import { updateLocation } from 'store/location';
import MainLayout from 'layouts/PageLayout/PageLayout'
import Spinner from '../components/Spinner'

const history = createHistory();
const Home = React.lazy(() => import('routes/WebApp/Home'))
const News = React.lazy(() => import('routes/WebApp/News'))
const NewsDetail = React.lazy(() => import('routes/WebApp/NewsDetail'))
const AdminHome = React.lazy(() => import('routes/Admin/Home'))
const PostView = React.lazy(() => import('routes/Admin/Post'))

const App = ({store}) => {
  useEffect(() => {
    history.listen(updateLocation(store));
  }, []);

  return (
    <Provider store={store}>
      <Router
        history={history}
        onUpdate={() => {
          window.scrollTo(0, 0)
        }}>
        <Suspense fallback={<Spinner />}>
          <MainLayout>
            <Switch>
              <Route exact path="/" component={Home} />
            </Switch>
            <Switch>
              <Route exact path="/news" component={News} />
            </Switch>
            <Switch>
              <Route exact path="/news/detail" component={NewsDetail} />
            </Switch>
            <Switch>
              <Route exact path="/admin" component={AdminHome} />
            </Switch>
            <Switch>
              <Route exact path="/admin/post" component={PostView} />
            </Switch>
          </MainLayout>
        </Suspense>
      </Router>
    </Provider>
  );
};

export default App;
