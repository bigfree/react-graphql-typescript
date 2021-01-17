import { List, makeStyles, Paper } from "@material-ui/core";
import React from 'react';
import { match } from "react-router-dom";
import { ISortOrder, ITask, useTaskFeedQuery } from "../../generated/graphql";
import { TDataFilter } from "../../types/Task.types";
import TaskRow from "./TaskRow";

type TProps = {
	match: match;
	dataFilter: TDataFilter;
}

const useStyles = makeStyles(() => ({
	paper: {
		width: '100%',
	},
	list: {
		width: '100%',
		padding: '0',
	}
}));

const TaskFeed: React.FC<TProps> = ({ match, dataFilter }: TProps): JSX.Element => {
	const where = dataFilter ? {
		name: dataFilter.taskName ? { contains: dataFilter.taskName } : {},
		createdAt: dataFilter.taskCreatedAt ? { gte: dataFilter.taskCreatedAt } : {},
	} : {};

	const { data, loading, error } = useTaskFeedQuery({
		variables: {
			taskWhereInput: where,
			taskOrderInput: {
				createdAt: ISortOrder.Desc,
			}
		}
	});
	const styles = useStyles();

	if (loading) return <p>Loading..</p>;
	if (error) return <p>Error..</p>;

	console.log(error);

	return (
		<Paper className={styles.paper}>
			<List className={styles.list}>
				{data?.tasks.map((task: ITask) => (
					<TaskRow key={task.id} task={task} match={match}/>
				))}
			</List>
		</Paper>
	)
};

export default TaskFeed;