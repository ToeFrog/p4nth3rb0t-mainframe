import { tmi } from "../tmi";
import WebSocketServer from "../WebSocketServer";
import { ChatUserstate } from "tmi.js";
import UserManager from "../users/UserManager";
import { CheerPacket, MainframeEvent } from "p4nth3rb0t-types";

const sendCheerEvent = async (
  bitCount: string,
  messageId: string,
  username: string,
) => {
  const user = await UserManager.getUserByLogin(username);

  try {
    const cheerEvent: CheerPacket = {
      event:  MainframeEvent.cheer,
      id: messageId,
      data: {
        bitCount: bitCount,
        cheererName: username,
        logoUrl: user.users[0].logo,
      },
    };

    WebSocketServer.sendData(cheerEvent);
  } catch (error) {
    console.log(error);
  }
};

tmi.on(
  "cheer",
  (channel: string, userstate: ChatUserstate, message: string) => {
    sendCheerEvent(
      userstate["bits"] as string,
      userstate["id"] as string,
      userstate["username"] as string,
    );
  },
);
