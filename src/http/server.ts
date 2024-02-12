import fastify from "fastify";
import cookie from "@fastify/cookie";
import websocket from "@fastify/websocket";

import { createPoll } from "../routes/create-poll";
import { getPoll } from "../routes/get-poll";
import { voteOnPoll } from "../routes/vote-on-poll";
import { pollResult } from "./ws/poll-result";

const app = fastify();

app.register(cookie, {
  secret: "aou]fguAFSqwgnmsldmgfow",
  hook: "onRequest",
});
app.register(websocket);

app.register(createPoll);
app.register(getPoll);
app.register(voteOnPoll);
app.register(pollResult);

app.listen({ port: 3333 }).then(() => {
  console.log("HTPP Server running!");
});
