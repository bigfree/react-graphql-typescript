import { makeStyles, Toolbar } from "@material-ui/core";
import React from 'react';
import { Route, Switch } from "react-router-dom";

import HomeRoute from "../../routes/home/HomeRoute";
import TaskRoute from "../../routes/tasks/TaskRoute";

const useStyles = makeStyles(() => ({
	root: {
		display: 'flex',
		flexGrow: 1,
		flexWrap: 'nowrap',
		flexDirection: 'column',
		height: '100vh'
	},
}));

const SiteContent: React.FC = (): JSX.Element => {
	const styles = useStyles();

	return (
		<main className={styles.root}>
			<Toolbar/>
			<Switch>
				<Route exact={true} path="/" component={HomeRoute}/>
				<Route path="/tasks" component={TaskRoute}/>
			</Switch>
		</main>
	)
}

export default SiteContent;