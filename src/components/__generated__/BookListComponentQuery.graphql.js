/**
 * @flow
 * @relayHash 7bbcf539f4899e29dcf0367981594c2d
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type BookItemComponent_node$ref = any;
export type BookListComponentQueryVariables = {|
  searchTerm?: ?string
|};
export type BookListComponentQueryResponse = {|
  +allBooks: ?{|
    +edges: $ReadOnlyArray<?{|
      +node: ?{|
        +$fragmentRefs: BookItemComponent_node$ref
      |}
    |}>
  |}
|};
export type BookListComponentQuery = {|
  variables: BookListComponentQueryVariables,
  response: BookListComponentQueryResponse,
|};
*/


/*
query BookListComponentQuery(
  $searchTerm: String
) {
  allBooks(searchTerm: $searchTerm) {
    edges {
      node {
        ...BookItemComponent_node
        id
      }
    }
  }
}

fragment BookItemComponent_node on BookNode {
  id
  name
  desc
  pages
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "searchTerm",
    "type": "String",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "searchTerm",
    "variableName": "searchTerm",
    "type": "String"
  }
];
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "BookListComponentQuery",
  "id": null,
  "text": "query BookListComponentQuery(\n  $searchTerm: String\n) {\n  allBooks(searchTerm: $searchTerm) {\n    edges {\n      node {\n        ...BookItemComponent_node\n        id\n      }\n    }\n  }\n}\n\nfragment BookItemComponent_node on BookNode {\n  id\n  name\n  desc\n  pages\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "BookListComponentQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "allBooks",
        "storageKey": null,
        "args": v1,
        "concreteType": "BookNodeConnection",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "edges",
            "storageKey": null,
            "args": null,
            "concreteType": "BookNodeEdge",
            "plural": true,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "node",
                "storageKey": null,
                "args": null,
                "concreteType": "BookNode",
                "plural": false,
                "selections": [
                  {
                    "kind": "FragmentSpread",
                    "name": "BookItemComponent_node",
                    "args": null
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "BookListComponentQuery",
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "allBooks",
        "storageKey": null,
        "args": v1,
        "concreteType": "BookNodeConnection",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "edges",
            "storageKey": null,
            "args": null,
            "concreteType": "BookNodeEdge",
            "plural": true,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "node",
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
        ]
      }
    ]
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '37ddcd7d192f4098f2f5eb9424c0c2cd';
module.exports = node;
