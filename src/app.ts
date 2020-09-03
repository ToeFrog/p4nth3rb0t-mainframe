import "./env";

import { webServer } from "./webserver";
import { tmi } from "./tmi";
import "./events/subscriptions";
import "./events/messages";

async function run() {
  try {
    webServer.listen(process.env.PORT || 8999, () => {
      console.log(
        `p4nth3rb0t mainframe started on port ${
          (webServer.address() as any).port
        } :)`
      );
    });
    await tmi.connect();
  } catch (error) {
    console.log(error);
  }
}

run();
