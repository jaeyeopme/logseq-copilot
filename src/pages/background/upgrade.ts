import { getLogseqCopliotConfig, saveLogseqCopliotConfig } from "@/config";
import Browser from "webextension-polyfill";

export const changeOptionsHostToHostNameAndPort = async() => {
  const { logseqHost } = await getLogseqCopliotConfig();
  if (logseqHost) {
    const url = new URL(logseqHost);
    await saveLogseqCopliotConfig({
      logseqHostName: url.hostname,
      logseqPort: parseInt(url.port),
    });
    Browser.storage.local.remove('logseqHost');
  }
}

