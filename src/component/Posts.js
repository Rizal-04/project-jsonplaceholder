import  {Component} from 'react';
import * as Mui from '@material-ui/core';

class Posts extends Component{
  constructor(props){
   super(props);

  this.state ={
   data: [],
  };
}

 componentDidMount(){
   const apiUrl = 'https://jsonplaceholder.typicode.com/posts';
   fetch(apiUrl)
     .then((response) => response.json())
     .then((data) => this.setState({data: data}));
 }


  render() {
    const {data} = this.state;

    return (
      <div >
 <nav class="nav-extended #212121 grey darken-4">
    <div class="nav-wrapper">
      <a href="#" class="brand-logo">Logo</a>
      <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></a>

    </div>
    <div class="nav-content ">
      <ul class="tabs tabs-transparent">
        <li class="tab"><a href="/">Posts</a></li>
        <li class="tab"><a class="active" href="/comments">Comments</a></li>
        <li class="tab"><a href="/albums">Albums</a></li>
        <li class="tab"><a href="/photos">Photos</a></li>
        <li class="tab"><a href="/todos">Todos</a></li>
        <li class="tab"><a href="/users">Users</a></li>
      </ul>
    </div>
  </nav>
          <Mui.Container fixed>
        <h1 align="center">DATA POSTS </h1>
        <table border="2">
          <tr bgcolor="#00ff80">
            <td >USER ID</td>
            <td>ID</td>
            <td>TITLE</td>
            <td>BODY</td>
          </tr>
          {data.map(todo =>
            <tr key={todo.id}>
              <td>{todo.userId}</td>
              <td>{todo.id}</td>
              <td>{todo.title}</td>
              <td>{todo.body}</td>
            </tr>
            )}
        </table>
        </Mui.Container>
      </div>
    );
  }
}


export default Posts;
