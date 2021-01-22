import { Checkbox, ListItem, ListItemIcon, makeStyles, Theme, Typography } from "@material-ui/core";
import React from 'react';
import { Link, match } from "react-router-dom";
import { ITask } from "../../generated/graphql";
import {format} from 'date-fns';
import sk from 'date-fns/locale/sk';

type Props = {
	task: ITask;
	match: match
}

const useStyles = makeStyles((theme: Theme) => ({
	heading: {
		fontWeight: theme.typography.fontWeightRegular,
		flex: 1,
	},
	task: {
		borderBottom: `1px solid ${theme.palette.divider}`,
		'&:last-child': {
			borderBottom: 0,
		},
	},
	taskLink: {
		display: 'flex',
		alignItems: 'center',
		flexGrow: 1,
		color: theme.palette.text.primary,
		textDecoration: 'none',
	}
}));

/**
 * Task row
 * @param {ITask} task
 * @param {match<{}>} match
 * @returns {JSX.Element}
 * @constructor
 */
const TaskRow: React.FC<Props> = ({ task, match }: Props): JSX.Element => {
	const styles = useStyles();
	const { id, name, createdAt } = task;

	return (
		<ListItem className={styles.task}>
			<ListItemIcon>
				<Checkbox
					edge="start"
					tabIndex={-1}
					disableRipple
					inputProps={{ 'aria-labelledby': id }}
				/>
			</ListItemIcon>
			<Link className={styles.taskLink} to={`${match.url}/${id}`}>
				<Typography className={styles.heading}>{name}</Typography>
				<Typography>{`Created time: ${format(new Date(createdAt), 'dd.MM.yyyy', { locale: sk })}`}</Typography>
			</Link>
		</ListItem>
	)
}

export default TaskRow;