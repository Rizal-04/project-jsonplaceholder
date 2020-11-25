import  {Component} from 'react';
import * as Mui from '@material-ui/core';


class Users extends Component{
  constructor(props){
   super(props);

  this.state ={
   data: [],
  };
}

 componentDidMount(){
   const apiUrl = 'https://jsonplaceholder.typicode.com/users';
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
    <div class="nav-content">
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
  <div class="row">
    <div class="col s12">
      <Mui.Container fixed>
        <h1 align="center">DATA USERS </h1>
        <table border="2">
          <tr  bgcolor="#00ff80">
            <th> ID</th>
            <td>NAME</td>
            <td>USERNAME</td>
            <td>EMAIL</td>
            <td colspan="6" align="center">ADDRESS</td>
            <td>PHONE</td>
            <td>WEBSITE</td>
            <th colspan="3">COMPANY</th>
            </tr>
          {data.map(todo =>
            <tr key={todo.id}>
              <td>{todo.id}</td>
              <td>{todo.name}</td>
              <td>{todo.username}</td>
              <td>{todo.email}</td>
              <td>{todo.address.street}</td>
              <td>{todo.address.suite}</td>
              <td>{todo.address.city}</td>
              <td>{todo.address.zipcode}</td>
              <td>{todo.address.geo.lat}</td>
              <td>{todo.address.geo.lng}</td>
              <td>{todo.phone}</td>
              <td>{todo.website}</td>
              <td>{todo.company.name}</td>
              <td>{todo.company.catchPhrase}</td>
              <td>{todo.company.bs}</td>
            </tr>
            )}
        </table>
        </Mui.Container>
        </div>
  </div>
      </div>
    );
  }
}


export default Users;
