import { Box, makeStyles } from "@material-ui/core";
import { endOfDay, formatISO, parseISO } from "date-fns";
import React, { useState } from 'react';
import { Route, RouteComponentProps } from "react-router-dom";
import TaskDetail from "../../components/task/TaskDetail";
import TaskFeed from "../../components/task/TaskFeed";
import TaskFeedFilter from "../../components/task/TaskFeedFilter";
import { ISortOrder } from "../../generated/graphql";
import { TDataFilter } from "../../types/Task.types";

const useStyles = makeStyles(() => ({
	root: {
		// padding: theme.spacing(3),
		padding: 0,
		display: 'flex',
		flexGrow: 1,
		flexDirection: 'column',
		height: 'calc(100vh - 64px)',
	},
	taskContainer: {
		display: 'flex',
		flexGrow: 1,
		alignItems: 'stretch',
		minHeight: '1px'
	}
}));

const TaskRoute: React.FC<RouteComponentProps> = ({ match }: RouteComponentProps): JSX.Element => {
	const styles = useStyles();
	const [dataFilter, setDataFilter] = useState<TDataFilter>({
		taskName: '',
		taskCreatedAt: null,
		taskCreatedAtEnd: null,
		taskOrder: ISortOrder.Desc,
	});

	const handleDataChange = (data: TDataFilter) => {
		data.taskCreatedAtEnd = data.taskCreatedAt ? formatISO(endOfDay(parseISO(data.taskCreatedAt))) : null;
		setDataFilter(data);

		console.log(data);
	}

	return (
		<Box className={styles.root}>
			<TaskFeedFilter dataFilter={dataFilter} handleDataChange={handleDataChange}/>
			<Box className={styles.taskContainer}>
				<TaskFeed match={match} dataFilter={dataFilter}/>
				<Route
					path={`${match.path}/:id`}
					render={(routeProps) => <TaskDetail routeProps={routeProps}/>}
				/>
			</Box>
		</Box>
	)
}

export default TaskRoute;