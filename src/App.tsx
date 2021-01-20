import DateFnsUtils from "@date-io/date-fns";
import { Box, createMuiTheme, CssBaseline, makeStyles, responsiveFontSizes, ThemeProvider } from '@material-ui/core';
import { indigo, pink } from '@material-ui/core/colors';
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import sk from 'date-fns/locale/sk';
import React from 'react';
import AsideDrawer from "./components/aside/SiteAsideMenu";

import SiteContent from "./components/content/SiteContent";
import Navbar from "./components/navbar/Navbar";

let themeMui = createMuiTheme({
	palette: {
		type: "dark",
		primary: {
			main: indigo["500"],
		},
		secondary: {
			main: pink["A100"],
		},
	},
});
themeMui = responsiveFontSizes(themeMui);

const useStyles = makeStyles(() => ({
	root: {
		display: 'flex',
		flexDirection: 'row',
	},
}));

const App: React.FC = (): JSX.Element => {
	const styles = useStyles();

	return (
		<MuiPickersUtilsProvider utils={DateFnsUtils} locale={sk}>
			<ThemeProvider theme={themeMui}>
				<Box className={styles.root}>
					<CssBaseline/>
					<Navbar/>
					<AsideDrawer/>
					<SiteContent/>
				</Box>
			</ThemeProvider>
		</MuiPickersUtilsProvider>
	);
};

export default App;
