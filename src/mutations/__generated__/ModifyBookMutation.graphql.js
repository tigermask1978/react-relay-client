/**
 * @flow
 * @relayHash 02668d99dc4968aa9823b85e666685ea
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type ModifyBookInput = {
  id: string,
  name: string,
  desc?: ?string,
  pages?: ?number,
  clientMutationId?: ?string,
};
export type ModifyBookMutationVariables = {|
  input: ModifyBookInput
|};
export type ModifyBookMutationResponse = {|
  +modifyBook: ?{|
    +retNode: ?{|
      +id: string,
      +name: string,
      +desc: ?string,
      +pages: ?number,
    |}
  |}
|};
export type ModifyBookMutation = {|
  variables: ModifyBookMutationVariables,
  response: ModifyBookMutationResponse,
|};
*/


/*
mutation ModifyBookMutation(
  $input: ModifyBookInput!
) {
  modifyBook(input: $input) {
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
    "type": "ModifyBookInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "modifyBook",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input",
        "type": "ModifyBookInput!"
      }
    ],
    "concreteType": "ModifyBookPayload",
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
  "name": "ModifyBookMutation",
  "id": null,
  "text": "mutation ModifyBookMutation(\n  $input: ModifyBookInput!\n) {\n  modifyBook(input: $input) {\n    retNode {\n      id\n      name\n      desc\n      pages\n    }\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "ModifyBookMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": v1
  },
  "operation": {
    "kind": "Operation",
    "name": "ModifyBookMutation",
    "argumentDefinitions": v0,
    "selections": v1
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '46ca3998022dd3e3a194d6cb95483f1b';
module.exports = node;
