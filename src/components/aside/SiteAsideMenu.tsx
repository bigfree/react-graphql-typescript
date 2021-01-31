import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import HomeIcon from '@material-ui/icons/Home';
import InboxIcon from '@material-ui/icons/Inbox';
import React from 'react'
import { Link, useLocation } from "react-router-dom";

const drawerWidth = 240;

const useStyles = makeStyles(() => ({
	root: {
		width: drawerWidth,
		flexShrink: 0,
	},
	drawerPaper: {
		width: drawerWidth,
	},
	drawerContainer: {
		overflow: 'auto',
	},
	link: {
		color: 'inherit',
		textDecoration: 'none'
	}
}));

const AsideDrawer: React.FC = (): JSX.Element => {
	const css = useStyles();
	const { pathname } = useLocation();

	console.log(pathname.split('/'));

	return (
		<Drawer
			className={css.root}
			variant="permanent"
			classes={{ paper: css.drawerPaper, }}
		>
			<Toolbar/>
			<div className={css.drawerContainer}>
				<List>
					<Link
						to="/"
						className={css.link}
					>
						<ListItem
							button
							key="Home"
							selected={'/' === pathname}
						>
							<ListItemIcon>
								<HomeIcon/>
							</ListItemIcon>
							<ListItemText
								primary="Home"
							/>
						</ListItem>
					</Link>
					<Link
						to="/tasks"
						className={css.link}
					>
						<ListItem
							button
							key="Tasks"
							selected={pathname.split('/').includes('tasks')}
						>
							<ListItemIcon>
								<InboxIcon/>
							</ListItemIcon>
							<ListItemText
								primary="Tasks"
							/>
						</ListItem>
					</Link>
				</List>
			</div>
		</Drawer>
	)
}

export default AsideDrawer;