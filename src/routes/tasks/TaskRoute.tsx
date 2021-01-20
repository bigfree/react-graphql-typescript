import { Box, makeStyles } from "@material-ui/core";
import { endOfDay, formatISO, parseISO } from "date-fns";
import React, { useState } from 'react';
import { match } from "react-router-dom";
import TaskFeed from "../../components/tasks/TaskFeed";
import TaskFeedFilter from "../../components/tasks/TaskFeedFilter";
import { ISortOrder } from "../../generated/graphql";
import { TDataFilter } from "../../types/Task.types";

type TProps = {
	match: match
}

const useStyles = makeStyles(() => ({
	root: {
		// padding: theme.spacing(3),
		padding: 0,
		display: 'flex',
		flexDirection: 'column',
	},
}));

const TaskRoute: React.FC<TProps> = ({ match }: TProps): JSX.Element => {
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
			<TaskFeed match={match} dataFilter={dataFilter}/>
		</Box>
	)
}

export default TaskRoute;