import 'bootstrap/dist/css/bootstrap.min.css';
import BlogContainer from './components/BlogContainer'
import {Route, Switch, BrowserRouter as Router} from 'react-router-dom'
import BlogDetail from './components/BlogDetail';
import Footer from './components/Footer';
import Header from './components/Header';


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Header />
          <BlogContainer />
        </Route>

        <Route exact path='/:id' component={BlogDetail} />

      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
