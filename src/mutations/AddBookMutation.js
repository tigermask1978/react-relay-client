import { commitMutation } from "react-relay";
import graphql from "babel-plugin-relay/macro";
import { ConnectionHandler } from "relay-runtime";

//注意这里的命名规则
const mutation = graphql`
  mutation AddBookMutation($input: AddBookInput!) {
    addBook(input: $input) {
      retNode {
        id
        name
        desc
        pages
      }
    }
  }
`;

function commit(environment, bookName, bookDesc, bookPages, searchTerm) {
  const variables = {
    input: {
      name: bookName,
      desc: bookDesc,
      pages: bookPages
    }
  };
  return commitMutation(environment, {
    mutation,
    variables,
    onCompleted: (response, errors) => {
      console.log("Response received from server.");
    },
    onError: err => console.error(err),
    updater: store => {
      //获取服务器返回的数据
      const payload = store.getRootField("addBook");
      const newBook = payload.getLinkedRecord("retNode");

      //获得根元素
      const root = store.get("client:root");
      //因为有查询条件，所以需要拼接查找串
      // const id_str = `allBooks(searchTerm:"` + searchTerm + `")`;
      const id_str = `allBooks(searchTerm:"${searchTerm}")`;
      //获得connection
      const allBooks = root.getLinkedRecord(id_str);
      //获得edges，注意此处是getLinkedRecords
      const edges = allBooks.getLinkedRecords("edges");

      //创建一个新的edge,node数据为返回的数据
      const created_edge = ConnectionHandler.createEdge(
        store,
        allBooks,
        newBook,
        "BookNodeEdge"
      );
      //更新connection的edges
      const newEdges = [...edges, created_edge];
      allBooks.setLinkedRecords(newEdges, "edges");

      console.log("Book added.");
    }
  });
}

export default { commit };
