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
    "whitep4nth3r",
    "baldbeardedbuilder",
    "clarkio",
    "dr_dinoMight",
    "rawwwrs",
    "lucecarter",
    "brattdamon",
    "sociablesteve",
    "finitesingularity",
    "halfpint_19",
    "cldubya",
    "metalandcoffee_",
    "maryjostaebler",
    "ukmadlz",
    "Imolalola",
    "heccbrent"
  ],
  ignoredUsers: ["nightbot", "pretzelrocks", "toefrogbot", "streamelements"],
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
  teamName: "The Pond",
  teamMembers: [
    {
      name: "baldbeardedbuilder",
      id: "279965339",
    },
    {
      name: "whitep4nth3r",
      id: "469006291",
    },
    {
      name: "brattdamon",
      id: "254737658",
    },
    {
      name: "lucecarter",
      id: "199566394",
    },
    {
      name: "dr_dinomight",
      id: "25347823",
    },
    {
      name: "laylacodesit",
      id: "260151116",
    },
    {
      name: "clarkio",
      id: "81844533"
    },
    {
      name: "rawwwrs",
      id: "166942660",
    },
    {
      name: "sociablesteve",
      id: "76884091",
    },
    {
      name: "finitesingularity",
      id: "536397236"
    },
    {
      name: "halfpint_19",
      id: "471062225"
    }, {
      name: "ukmadlz",
      id: "109561494"
    }, {
      name: "Imolalola",
      id: "198070643"
    }, {
      name: "metalandcoffee_",
      id: "163734028"
    }, {
      name: "cldubya",
      id: "231390113"
    }, {
      name: "heccbrent",
      id: "50912385"
    }
  ],
  teamWelcomeMessage: (channel: TwitchChannel): string => {
    return `Welcome, @${channel.broadcaster_name} back to ${config.teamName}! 
    Check out their channel here: https://twitch.tv/${channel.broadcaster_name} 
    | They were last seen streaming ${channel.title} in ${channel.game_name}`;
  },
  discord: {
    liveAnnouncementsChannelId: "696789363069288488",
    liveAnnouncementsRoleId: "808741580873531393",
    liveAnnouncementColorOnline: "#84AE39",
    liveAnnouncementColorOffline: "#AE8439",
    liveAnnouncementImageSize: "1280x720",
  },
};

export { config };