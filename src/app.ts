import "./env";

import Database from "./data/database";

import { webServer } from "./webserver";
import WebSocketServer from "./WebSocketServer";
import { tmi } from "./tmi";
import { discord } from "./discord";
import { testConfig } from "./../testConfig";

import "./webhooks";

import "./events/subscriptions";
import "./events/messages";
import "./events/raids";
import "./events/cheers";
import "./events/joins";
import "./events/follows";

Database.connect();

async function run() {
  try {
    webServer.listen(process.env.PORT || 8999, () => {
      console.log(
        `p4nth3rb0t mainframe started on port ${
          (webServer.address() as any).port
        } :)`,
      );
    });

    await tmi.connect();
    await discord.login(process.env.DISCORD_TOKEN);

    // read and register all available sound commands
    soundCommand.init();

    WebSocketServer.create();

    if (testConfig.connectToFdgt) {
      setTimeout(() => {
        tmi.say(testConfig.channel, testConfig.command);
      }, 5000);
    }
  } catch (error) {
    console.log(error);
  }
}

run();