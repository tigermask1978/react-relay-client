import { commitMutation } from "react-relay";
import graphql from "babel-plugin-relay/macro";
// import { ConnectionHandler } from "relay-runtime";

const mutation = graphql`
  mutation RemoveBookMutation($input: RemoveBookInput!) {
    removeBook(input: $input) {
      retNode {
        id
        name
        desc
        pages
      }
    }
  }
`;

function commit(environment, bookId, searchTerm) {
  const variables = {
    input: {
      id: bookId
    }
  };

  return commitMutation(environment, {
    mutation,
    variables,
    onError: err => console.error(err),
    updater: store => {
      //获得已删除的书籍信息
      const payLoad = store.getRootField("removeBook");
      const deletedBook = payLoad.getLinkedRecord("retNode");

      //从根开始找到所有的edges
      const root = store.get("client:root");
      // const id_str = `allBooks(searchTerm:"` + searchTerm + `")`;
      const id_str = `allBooks(searchTerm:"${searchTerm}")`;
      const allBooks = root.getLinkedRecord(id_str);
      const edges = allBooks.getLinkedRecords("edges");

      //从edges中过滤出已删除的书籍
      const new_edges = edges.filter(edge => {
        const node = edge.getLinkedRecord("node");
        return node.getValue("id") !== deletedBook.getValue("id");
      });

      allBooks.setLinkedRecords(new_edges, "edges");

      console.log("book deleted.");
    }
  });
}

export default { commit };
