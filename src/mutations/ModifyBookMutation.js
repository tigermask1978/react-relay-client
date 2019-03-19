import { commitMutation } from "react-relay";
import graphql from "babel-plugin-relay/macro";
// import { ConnectionHandler } from "relay-runtime";

const mutation = graphql`
  mutation ModifyBookMutation($input: ModifyBookInput!) {
    modifyBook(input: $input) {
      retNode {
        id
        name
        desc
        pages
      }
    }
  }
`;

function commit(
  environment,
  bookId,
  bookName,
  bookDesc,
  bookPages,
  searchTerm
) {
  const variables = {
    input: {
      id: bookId,
      name: bookName,
      desc: bookDesc,
      pages: bookPages
    }
  };

  return commitMutation(environment, {
    mutation,
    variables,
    onError: err => console.error(err),
    updater: stroe => {
      //默认relay会自动更新修改的字段
      console.log("Book modified.");
    }
  });
}

export default { commit };
