import React from "react";
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
      editPostId: null,
      editTitle: "",
      showModal: false,
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((posts) => {
        this.setState({ posts });
      })
      .catch((error) => {
        alert("Error fetching posts");
      });
  }

  deletePost = (postId) => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (response.ok) {
          const posts = this.state.posts.filter((p) => p.id !== postId);
          this.setState({ posts });
          alert("Operation completed successfully");
        }
      });
  };

  openEditModal = (postId) => {
    const post = this.state.posts.find((p) => p.id === postId);
    this.setState({
      editPostId: postId,
      editTitle: post.title,
      showModal: true,
    });
  };

  closeEditModal = () => {
    this.setState({
      editPostId: null,
      editTitle: "",
      showModal: false,
    });
  };

  handleTitleChange = (event) => {
    this.setState({ editTitle: event.target.value });
  };

  updatePostTitle = () => {
    const { editPostId, editTitle } = this.state;

    fetch(`https://jsonplaceholder.typicode.com/posts/${editPostId}`, {
      method: "PUT",
      body: JSON.stringify({
        title: editTitle,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((updatedPost) => {
        const updatedPosts = this.state.posts.map((post) => {
            if (post.id === editPostId) {
              return { ...post, title: updatedPost.title };
            } else {
              return post;
            }
          });
          
        this.setState({
          posts: updatedPosts,
          editPostId: null,
          editTitle: "",
          showModal: false,
        });
        alert("Post title updated successfully");
      });
  };

  render() {
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {this.state.posts.map((post) => (
              <tr key={post.id}>
                <td>{post.id}</td>
                <td>{post.title}</td>
                <td>
                  <button onClick={() => this.openEditModal(post.id)}>
                    Edit
                  </button>
                  <button className="delete" onClick={() => this.deletePost(post.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {this.state.showModal && (
          <div className="modal">
            <div className="modal-content">
              <span className="close" onClick={this.closeEditModal}>
                Close
              </span>
              <input type="text" value={this.state.editTitle} onChange={this.handleTitleChange}/>
              <button onClick={this.updatePostTitle}>Save</button>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default App;