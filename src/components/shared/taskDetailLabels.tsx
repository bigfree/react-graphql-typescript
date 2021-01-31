import { Box, TextField, Theme } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Autocomplete } from "@material-ui/lab";
import React, { useEffect, useState } from "react";
import { ILabel, ITaskDetailQuery, useLabelFeedQuery } from "../../generated/graphql";

type TProps = {
	taskData?: ITaskDetailQuery | undefined;
}

const useStyles = makeStyles((theme: Theme) => ({
	root: {
		marginBottom: theme.spacing(3),
	}
}));

const TaskDetailLabels: React.FC<TProps> = ({ taskData }: TProps): JSX.Element => {
	const styles = useStyles();
	const { data: labelsData, loading, error } = useLabelFeedQuery();

	const [value] = useState<any[] | undefined>(
		labelsData?.labels.filter((n1: ILabel) => taskData?.task?.labels?.some(n2 => n1.id === n2.id)) ?? []
	);

	// TODO
	useEffect(() => {
		console.log(taskData?.task?.labels)
	}, []);

	if (loading) return <Box><p>Loading..</p></Box>;
	if (error) return <p>Error..</p>;

	// const res = labelsData?.labels.filter((label: ILabel) => taskData?.task?.labels?.some(label2 => label.id === label2.id));
	// setDefaultValue(res ?? []);

	return (
		<Box className={styles.root}>
			<Autocomplete
				multiple
				options={labelsData?.labels ?? []}
				getOptionLabel={option => option.name}
				defaultValue={value}
				renderInput={params => (
					<TextField
						{...params}
						placeholder={'Labels'}
						variant={'outlined'}
						label={'Task labels'}
						fullWidth
					/>
				)}
			/>
		</Box>
	)
}

export default TaskDetailLabels;