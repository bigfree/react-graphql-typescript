import DateFnsUtils from "@date-io/date-fns";
import { Box, createMuiTheme, CssBaseline, makeStyles, responsiveFontSizes, ThemeProvider } from '@material-ui/core';
import { indigo, pink } from '@material-ui/core/colors';
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import sk from 'date-fns/locale/sk';
import React from 'react';

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
	// const [message, setMessage] = useState<string>('');
	// const { data, loading, error } = useTaskFeedQuery();
	//
	// /**
	//  * @param {React.ChangeEvent<HTMLInputElement>} event
	//  */
	// const handleTextChange = (event: ChangeEvent<HTMLInputElement>): void => {
	// 	setMessage(event.target.value);
	// };
	//
	// if (loading) return <p>Loading..</p>;
	// if (error) return <p>Error..</p>;
	//
	// console.log(data);

	return (
		<MuiPickersUtilsProvider utils={DateFnsUtils} locale={sk}>
			<ThemeProvider theme={themeMui}>
				<Box className={styles.root}>
					<CssBaseline/>
					<Navbar/>
					<SiteContent/>
					{/*<TaskFeed/>*/}
				</Box>
			</ThemeProvider>
		</MuiPickersUtilsProvider>
	);
};

export default App;
