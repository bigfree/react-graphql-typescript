import { Box, Fab, List, makeStyles, Paper, Theme } from "@material-ui/core";
import AddIcon from '@material-ui/icons/Add';
import React from 'react';
import { match } from "react-router-dom";
import { IQueryMode, ITask, ITaskOrderByInput, ITaskWhereInput, useTaskFeedQuery } from "../../generated/graphql";
import { TDataFilter } from "../../types/Task.types";
import NewTask from "./TaskNew";
import TaskRow from "./TaskRow";

type TProps = {
	match: match;
	dataFilter: TDataFilter;
}

const useStyles = makeStyles((theme: Theme) => ({
	root: {
		position: 'relative',
		flexGrow: 1,
		padding: theme.spacing(2, 2, 2, 2),
		overflow: 'auto',
	},
	paper: {
		width: '100%',
	},
	paperLoading: {
		width: '100%',
	},
	list: {
		width: '100%',
		padding: '0',
	},
	skeleton: {
		height: 59
	},
	fab: {
		position: 'absolute',
		bottom: theme.spacing(2),
		right: theme.spacing(2),
	}
}));

/**
 * JSX Element Task Feed
 * @param {match<{}>} match
 * @param {TDataFilter} dataFilter
 * @returns {JSX.Element}
 * @constructor
 */
const TaskFeed: React.FC<TProps> = ({ match, dataFilter }: TProps): JSX.Element => {
	const styles = useStyles();

	/**
	 * Filter Tasks
	 * @type {{AND: {createdAt: {gte: string | undefined, lte: string | undefined}}[], name: {mode: IQueryMode, contains: string} | undefined} | {}}
	 */
	const taskWhereInput: ITaskWhereInput = dataFilter ? {
		AND: [
			{
				createdAt: {
					gte: dataFilter.taskCreatedAt ?? undefined,
					lte: dataFilter.taskCreatedAtEnd ?? undefined,
				}
			},
		],
		name: {
			mode: IQueryMode.Insensitive,
			contains: dataFilter.taskName ?? undefined
		},
	} : {};

	/**
	 * Order task
	 * @type {{createdAt: ISortOrder}}
	 */
	const taskOrderInput: ITaskOrderByInput = {
		createdAt: dataFilter.taskOrder
	}

	/**
	 * Load task
	 */
	const { data, loading, error } = useTaskFeedQuery({
		variables: {
			taskWhereInput,
			taskOrderInput,
		},
		fetchPolicy: "cache-and-network",
		nextFetchPolicy: "cache-first",
	});

	if (loading) return <p>Loading..</p>;

	if (error) return <p>Error..</p>;

	return (
		<Box className={styles.root}>
			<NewTask/>
			<Paper className={styles.paper}>
				<List className={styles.list}>
					{data?.tasks.map((task: ITask) => (
						<TaskRow key={task.id} task={task} match={match}/>
					))}
				</List>
			</Paper>
			<Fab
				color={`primary`}
				aria-label={`Add task`}
				className={styles.fab}
			>
				<AddIcon/>
			</Fab>
		</Box>
	)
};

export default TaskFeed;