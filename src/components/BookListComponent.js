import React from "react";
import { withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";

import BookItemComponent from "./BookItemComponent";

import { QueryRenderer } from "react-relay";
import environment from "../Environment";
import graphql from "babel-plugin-relay/macro";

// const BookListQuery = graphql`
//   query BookListComponentQuery {
//     allBooks {
//       edges {
//         node {
//           ...BookItemComponent_node
//         }
//       }
//     }
//   }
// `;

const BookListQuery = graphql`
  query BookListComponentQuery($searchTerm: String) {
    allBooks(searchTerm: $searchTerm) {
      edges {
        node {
          ...BookItemComponent_node
        }
      }
    }
  }
`;

const styles = theme => ({
  root: {
    width: "100%"

    // maxWidth: 360,
    // backgroundColor: theme.palette.background.paper
  }
});

class BookListComponent extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <QueryRenderer
        environment={environment}
        query={BookListQuery}
        variables={{ searchTerm: this.props.searchTerm }}
        render={({ error, props }) => {
          if (error) {
            return <div>Error!</div>;
          }
          if (!props) {
            return <div>Lodading...</div>;
          }

          const all_books = props.allBooks.edges.map((edge, index) => {
            return (
              <BookItemComponent
                key={index}
                node={edge.node}
                handleDeleteBook={this.props.handleDeleteBook}
                handleModifyBook={this.props.handleModifyBook}
              />
            );
          });

          return <List className={classes.root}>{all_books}</List>;
        }}
      />
    );
  }
}

export default withStyles(styles)(BookListComponent);
