import { createMuiTheme } from "@material-ui/core/styles";
import blueGrey from "@material-ui/core/colors/blueGrey";

const theme = createMuiTheme({
  typography: {
    fontFamily: ["Fira Code"].join(",")
  },
  status: {
    scroll: blueGrey[50],
    play: "#089c8c",
    pause: "#f77452"
  },
  overrides: {
    MuiCssBaseline: {
      "@global": {
        "*": {
          "scrollbar-width": "thin"
        },
        "*::-webkit-scrollbar": {
          width: 4,
          height: 4,
          backgroundColor: "transparent"
        },
        "*::-webkit-scrollbar-thumb": {
          borderRadius: 4,
          backgroundColor: blueGrey[100]
        },
        "*::-webkit-scrollbar-thumb:hover": {
          backgroundColor: blueGrey[200]
        }
      }
    }
  }
});

export default theme;
