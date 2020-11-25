import './App.css';
import {BrowserRouter, Switch, Link} from 'react-router-dom';
import Posts from './component/Posts';
import Albums from './component/Albums';
import Comments from './component/Comments';
import Photos from './component/Photos';
import Todos from './component/Todos';
import Users from './component/Users';


function App() {
  return (
     <BrowserRouter>
          <Switch>
              <Link path="/" exact component={Posts} />
              <Link path="/albums" exact component={Albums} />
              <Link path="/comments" exact component={Comments} />
              <Link path="/photos" exact component={Photos} />
              <Link path="/todos" exact component={Todos} />
              <Link path="/users" exact component={Users} />
          </Switch>
     </BrowserRouter>
  );
}

export default App;
