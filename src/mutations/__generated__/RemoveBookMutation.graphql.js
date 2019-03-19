/**
 * @flow
 * @relayHash ec6f57da652d41f1dc970a21d1d0f9e3
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type RemoveBookInput = {
  id: string,
  clientMutationId?: ?string,
};
export type RemoveBookMutationVariables = {|
  input: RemoveBookInput
|};
export type RemoveBookMutationResponse = {|
  +removeBook: ?{|
    +retNode: ?{|
      +id: string,
      +name: string,
      +desc: ?string,
      +pages: ?number,
    |}
  |}
|};
export type RemoveBookMutation = {|
  variables: RemoveBookMutationVariables,
  response: RemoveBookMutationResponse,
|};
*/


/*
mutation RemoveBookMutation(
  $input: RemoveBookInput!
) {
  removeBook(input: $input) {
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
    "type": "RemoveBookInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "removeBook",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input",
        "type": "RemoveBookInput!"
      }
    ],
    "concreteType": "RemoveBookPayload",
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
  "name": "RemoveBookMutation",
  "id": null,
  "text": "mutation RemoveBookMutation(\n  $input: RemoveBookInput!\n) {\n  removeBook(input: $input) {\n    retNode {\n      id\n      name\n      desc\n      pages\n    }\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "RemoveBookMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": v1
  },
  "operation": {
    "kind": "Operation",
    "name": "RemoveBookMutation",
    "argumentDefinitions": v0,
    "selections": v1
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '938fedd9d22912654a112d4497d0d920';
module.exports = node;
