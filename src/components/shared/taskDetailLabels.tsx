import { Box, TextField, Theme } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Autocomplete } from "@material-ui/lab";
import React, { ChangeEvent, useEffect, useState } from "react";
import {
	ILabel,
	ITaskDetailQuery,
	ITaskWhereUniqueInput,
	useLabelFeedQuery,
	useUpdateTaskLabelMutation
} from "../../generated/graphql";

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
	const [value, setValue] = useState<ILabel[]>([]);

	const [updateTaskLabelMutation] = useUpdateTaskLabelMutation();

	// Call if change taskData
	useEffect(() => {
		// Merge all labels with task labels
		setValue(labelsData?.labels.filter((n1: ILabel) => taskData?.task?.labels?.some(n2 => n1.id === n2.id)) ?? []);
	}, [labelsData, taskData]);

	/**
	 * Task detail where input
	 * @type {{id: string}}
	 */
	const taskWhereInput: ITaskWhereUniqueInput = {
		id: taskData?.task?.id
	}

	/**
	 * Update task labes
	 * @param {React.ChangeEvent<any>} _event
	 * @param {ILabel[]} labels
	 */
	const handleOnChangeAutocomplete = (_event: ChangeEvent<any>, labels: ILabel[]) => {
		setValue(labels);
		const labelsIds = labels.map(({ id }: ILabel) => {
			return {
				id
			}
		});

		// TODO: Cache data may be lost when replacing the labels field of a Task object.
		updateTaskLabelMutation({
			variables: {
				taskWhereInput,
				updateTask: {
					labels: {
						set: labelsIds
					}
				}
			}
		}).then();
	}

	if (loading) return <Box><p>Loading..</p></Box>;
	if (error) return <p>Error..</p>;

	return (
		<Box className={styles.root}>
			<Autocomplete
				multiple
				options={labelsData?.labels ?? []}
				getOptionLabel={option => option.name}
				value={value}
				onChange={handleOnChangeAutocomplete}
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