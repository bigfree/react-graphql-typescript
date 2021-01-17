import { Container, makeStyles, Theme } from "@material-ui/core";
import React, { useState } from 'react';
import { match } from "react-router-dom";
import TaskFeed from "../../components/tasks/TaskFeed";
import TaskFeedFilter from "../../components/tasks/TaskFeedFilter";
import { TDataFilter } from "../../types/Task.types";

type TProps = {
	match: match
}

const useStyles = makeStyles((theme: Theme) => ({
	root: {
		paddingTop: theme.spacing(3),
	},
}));

const TaskRoute: React.FC<TProps> = ({ match }: TProps): JSX.Element => {
	const styles = useStyles();
	const [dataFilter, setDataFilter] = useState<TDataFilter>({
		taskName: '',
		taskCreatedAt: null,
	});

	const handleDataChange = (data: TDataFilter) => {
		console.log(data);
		setDataFilter(data);
	}

	return (
		<Container maxWidth="lg" className={styles.root}>
			<TaskFeedFilter dataFilter={dataFilter} handleDataChange={handleDataChange}/>
			<TaskFeed match={match} dataFilter={dataFilter}/>
		</Container>
	)
}

export default TaskRoute;