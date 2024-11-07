export default function (
  methods: String,
  enviroments: String,
  config: Object,
  serverEvent
) {
  if (enviroments == "development") {
    return {
      method: methods,
      headers: {
        Authorization: `Basic ${btoa(
          config.server.localApiKey + ":" + config.server.localApiSecret
        )}`,
      },
    };
  } else if (enviroments == "production") {
    return {
      method: methods,
      headers: {
        ["Cookie"]: `sid=${atob(parseCookies(serverEvent).token)}`,
      },
    };
  }
}
