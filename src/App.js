import "./App.css";
import { Component } from "react";

class App extends Component {
  state = {
    count: 0,
    posts: [
      {
        id: 1,
        title: "O titulo 1",
        body: "O corpo 1",
      },
      {
        id: 2,
        title: "O titulo 2",
        body: "O corpo 2",
      },
      {
        id: 3,
        title: "O titulo 3",
        body: "O corpo 3",
      },
    ],
  };

  timeoutUpdate = null;
  
  componentDidMount() {
    this.handleTimeout();
  }

  componentDidUpdate() {
    //this.handleTimeout();
  }

  componentWillUnmount() {
    clearTimeout(this.timeoutUpdate)
  }
  
  handleTimeout = () => {
    const { posts, count } = this.state;
    posts[0].title = 'O titulo mudou';

    this.timeoutUpdate = setTimeout(()=>{
      this.setState({ posts , count: count + 1});
    },1000)
  }

  render() {
    const { posts, count } = this.state;

    return (
      <div className="App">
        <h1>{count}</h1>
          {posts.map((posts) => (
          <div key={posts.id}>
            <h1 >{posts.title}</h1>
            <p>{posts.body}</p>
          </div>
          ))}
      </div>
    );
  }
}

export default App;

// Aprendizado atraves do diagrama: https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/
