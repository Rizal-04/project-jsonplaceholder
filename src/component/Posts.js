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
                  <main align="center">
                  <Mui.ButtonGroup  align="center" size="large" color="primary" aria-label="large outlined primary button group">
                        <Mui.Button href="/posts" >Posts</Mui.Button>
                        <Mui.Button href="/comments">Comments</Mui.Button>
                        <Mui.Button href="/albums">Albums</Mui.Button>
                        <Mui.Button href="/photos">Photos</Mui.Button>
                        <Mui.Button href="/todos">Todos</Mui.Button>
                        <Mui.Button href="/users">Users</Mui.Button>
                  </Mui.ButtonGroup>
                  </main>
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
