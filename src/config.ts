import { TwitchChannel, TeamMember } from "./data/types";

interface Config {
  broadcaster: TeamMember;
  channel: string;
  drop: {
    minAccountAge: number;
  };
  emotes: {
    baseUrl: string;
    sizes: string[];
  };
  specialUsers: string[];
  ignoredUsers: string[];
  ignoredCharacters: string[];
  ignoredWords: string[];
  ignoredMessages: string[];
  botResponses: any;
  teamShoutoutEnabled: boolean;
  teamName: string;
  teamMembers: TeamMember[];
  teamWelcomeMessage: (channel: TwitchChannel) => string;
  discord: {
    liveAnnouncementsChannelId: string;
    liveAnnouncementsRoleId: string;
    liveAnnouncementColorOnline: string;
    liveAnnouncementColorOffline: string;
    liveAnnouncementImageSize: string;
  };
}

const config: Config = {
  broadcaster: { name: "ToeFrog", id: "50336378" },
  channel: "#ToeFrog",
  drop: {
    minAccountAge: 7 * 24 * 60 * 60 * 1000,
  },
  emotes: {
    baseUrl: "https://static-cdn.jtvnw.net/emoticons/v1/",
    sizes: ["1.0", "2.0", "3.0"],
  },
  specialUsers: [
    "Whitep4nth3r",
    "baldbeardedbuilder",
    "clarkio",
    "laylacodesit",
  ],
  ignoredUsers: ["nightbot", "pretzelrocks", "ToeFrogBot", "streamelements"],
  ignoredCharacters: ["a̞", "s̾", "ȯ", "a̹", "u͖"],
  ignoredWords: ["bigfollows"],
  ignoredMessages: [
    "Twitch Themer is ready to go. Listening for commands beginning with !theme",
    "Twitch Highlighter in the house!",
  ],
  botResponses: {
    SillyQuestion: (username: string) => {
      return `Hi there ${username}! You can use the following commands in chat to find out more: !project, !today, !who`;
    },
  },
  teamShoutoutEnabled: true,
  teamName: "ToeFrog Friends",
  teamMembers: [
    {
      name: "baldbeardedbuilder",
      id: "279965339",
    },
    {
      name: "Whitep4nth3r",
      id: "469006291",
    },
    {
      name: "laylacodesit",
      id: "260151116",
    },
    {
      name: "Clarkio",
      id: "81844533"
    },
    {
      name: "Dr_DinoMight",
      id: "25347823"
    },
    {
      name: "rawwwrs",
      id: "166942660"
    },
    {
      name: "codingwithluce",
      id: "199566394"
    },
    {
      name: "BrattDamon",
      id: "254737658"
    },
    {
      name: "SociableSteve",
      id: "76884091"
    },
    {
      name: "finitesingularity",
      id: "536397236"
    },
    {
      name: "halfpint_19",
      id: "471062225"
    }
  ],
  teamWelcomeMessage: (channel: TwitchChannel): string => {
    return `${config.teamName} team member detected! 
    Welcome, @${channel.broadcaster_name}! 
    Check out their channel here: https://twitch.tv/${channel.broadcaster_name} 
    | They were last seen streaming ${channel.title} in ${channel.game_name}`;
  },
  discord: {
    liveAnnouncementsChannelId: "696789363069288488",
    liveAnnouncementsRoleId: "641691491873325066",
    liveAnnouncementColorOnline: "#84AE39",
    liveAnnouncementColorOffline: "#AE8439",
    liveAnnouncementImageSize: "1280x720",
  },
};

export { config };
