/**
 * @flow
 * @relayHash cd607916b1b07d321bc753b48d01114d
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type AddBookInput = {
  name: string,
  desc?: ?string,
  pages?: ?number,
  clientMutationId?: ?string,
};
export type AddBookMutationVariables = {|
  input: AddBookInput
|};
export type AddBookMutationResponse = {|
  +addBook: ?{|
    +retNode: ?{|
      +id: string,
      +name: string,
      +desc: ?string,
      +pages: ?number,
    |}
  |}
|};
export type AddBookMutation = {|
  variables: AddBookMutationVariables,
  response: AddBookMutationResponse,
|};
*/


/*
mutation AddBookMutation(
  $input: AddBookInput!
) {
  addBook(input: $input) {
    retNode {
      id
      name
      desc
      pages
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "AddBookInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "addBook",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input",
        "type": "AddBookInput!"
      }
    ],
    "concreteType": "AddBookPayload",
    "plural": false,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "retNode",
        "storageKey": null,
        "args": null,
        "concreteType": "BookNode",
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "id",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "name",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "desc",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "pages",
            "args": null,
            "storageKey": null
          }
        ]
      }
    ]
  }
];
return {
  "kind": "Request",
  "operationKind": "mutation",
  "name": "AddBookMutation",
  "id": null,
  "text": "mutation AddBookMutation(\n  $input: AddBookInput!\n) {\n  addBook(input: $input) {\n    retNode {\n      id\n      name\n      desc\n      pages\n    }\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "AddBookMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": v1
  },
  "operation": {
    "kind": "Operation",
    "name": "AddBookMutation",
    "argumentDefinitions": v0,
    "selections": v1
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'cd9055339d95b0471d61cae2b978dfea';
module.exports = node;
