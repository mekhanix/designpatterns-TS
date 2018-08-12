import { WebPageV1, WebPageV2, DarkTheme, LightTheme } from './Bridge';

const darkTheme = new DarkTheme();
const lightTheme = new LightTheme();
const webPage = new WebPageV1(darkTheme);
const webPageV2 = new WebPageV2(darkTheme);

webPage.showIndex();
webPage.showDetail();
webPage.setTheme(lightTheme);
webPage.showIndex();
webPage.showDetail();

webPageV2.showAbout();
webPageV2.setTheme(lightTheme);
webPageV2.showIndex();