import { Environment, Network, RecordSource, Store } from "relay-runtime";

const API_ENDPOINT = "http://localhost:8000/graphql/";

function fetchQuery(operation, variables) {
  return fetch(API_ENDPOINT, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization:
        "JWT eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VybmFtZSI6InRpZ2VybWFzayIsImV4cCI6MTU1MzE1Mzk0NSwib3JpZ0lhdCI6MTU1MzE1MzY0NX0.3TFX6LYhpxgbeXN8O_N1X0qVprBf0Foc3thLgdyZxpc"
    },
    body: JSON.stringify({
      query: operation.text,
      variables
    })
  }).then(response => {
    return response.json();
  });
}

const environment = new Environment({
  network: Network.create(fetchQuery),
  store: new Store(new RecordSource())
});

export default environment;
