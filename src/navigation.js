import { createAppContainer, createSwitchNavigator } from "react-navigation";
import End from "./container/End";
import Game from "./container/Game";
import Landing from "./container/Landing";

const MainNavigator = createSwitchNavigator({
  Landing: { screen: Landing, mode: "modal" },
  Game: { screen: Game, mode: "modal" },
  End: { screen: End, mode: "modal" }
});

const Nav = createAppContainer(MainNavigator);

export default Nav;
