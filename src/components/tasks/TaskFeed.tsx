import { Box, List, makeStyles, Paper, Theme } from "@material-ui/core";
import React from 'react';
import { match } from "react-router-dom";
import { IQueryMode, ITask, ITaskOrderByInput, ITaskWhereInput, useTaskFeedQuery } from "../../generated/graphql";
import { TDataFilter } from "../../types/Task.types";
import TaskRow from "./TaskRow";

type TProps = {
	match: match;
	dataFilter: TDataFilter;
}

const useStyles = makeStyles((theme: Theme) => ({
	root: {
		flexGrow: 1,
		padding: theme.spacing(0, 2, 2, 2),
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
	 * Order tasks
	 * @type {{createdAt: ISortOrder}}
	 */
	const taskOrderInput: ITaskOrderByInput = {
		createdAt: dataFilter.taskOrder
	}

	/**
	 * Load tasks
	 */
	const { data, loading, error } = useTaskFeedQuery({
		variables: {
			taskWhereInput,
			taskOrderInput,
		}
	});

	if (loading) return <p>Loading..</p>;

	if (error) return <p>Error..</p>;

	return (
		<Box className={styles.root}>
			<Paper className={styles.paper}>
				<List className={styles.list}>
					{data?.tasks.map((task: ITask) => (
						<TaskRow key={task.id} task={task} match={match}/>
					))}
				</List>
			</Paper>
		</Box>
	)
};

export default TaskFeed;