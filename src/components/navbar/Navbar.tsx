import { AppBar, Avatar, IconButton, makeStyles, Theme, Toolbar, Typography } from "@material-ui/core";
import { deepPurple } from "@material-ui/core/colors";
import React from 'react';

const useStyles = makeStyles((theme: Theme) => ({
	root: {
		zIndex: theme.zIndex.drawer + 1,
	},
	title: {
		flexGrow: 1,
	},
	purple: {
		color: theme.palette.getContrastText(deepPurple[500]),
		fontSize: 16,
	},
}));

const Navbar: React.FC = (): JSX.Element => {
	const styles = useStyles();

	return (
		<AppBar position="fixed" className={styles.root}>
			<Toolbar>
				<Typography variant="h6" className={styles.title} noWrap>
					React TS GraphQL Task List
				</Typography>
				<IconButton
					edge="end"
					aria-label="account of current user"
					aria-haspopup="true"
					color="inherit"
				>
					<Avatar className={styles.purple}>AM</Avatar>
				</IconButton>
			</Toolbar>
		</AppBar>
	)
};

export default Navbar;
