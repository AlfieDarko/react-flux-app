import React from 'react';
import AuthorApi from '../../api/authorApi.js'

class Authors extends React.Component{

state = ({ authors: [] })

componentWillMount = function(){
  this.setState((prevState, props) => ({ authors: AuthorApi.getAllAuthors() }));
}

  render(){
      console.log(this.state);

       const createAuthorRow = (authors) => {
                return (
                  <tr key={authors.id}>
                    <td><a href={"/#authors/" + authors.id}>{authors.id} </a></td>
                    <td>{authors.firstName} {authors.lastName}</td>
                  </tr>
                )
          }

    return(
      <div>
        <h1>Authors</h1>

        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
          </tr>
          </thead>
          <tbody>
            {console.log(this.state)}
            {this.state.authors.map(createAuthorRow)}
          </tbody>
        </table>
      </div>
    );
  }
};

export default Authors
