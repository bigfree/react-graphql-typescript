import { Box, TextField, Theme } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Autocomplete } from "@material-ui/lab";
import React, { ChangeEvent, useEffect, useState } from "react";
import {
	ITaskDetailQuery,
	ITaskWhereUniqueInput,
	IUser,
	useUpdateTaskAssignUserMutation,
	useUserFeedQuery
} from "../../generated/graphql";

type TProps = {
	taskData?: ITaskDetailQuery | undefined;
}

const useStyles = makeStyles((theme: Theme) => ({
	root: {
		marginBottom: theme.spacing(3),
	}
}));

const TaskDetailAssignUser: React.FC<TProps> = ({ taskData }: TProps): JSX.Element => {
	const styles = useStyles();
	const { data: usersData, loading, error } = useUserFeedQuery();
	const [value, setValue] = useState<IUser | null>(null);

	const [updateTaskAssignUserMutation] = useUpdateTaskAssignUserMutation();

	// Call if change taskData
	useEffect(() => {
		setValue(taskData?.task?.assignUser ?? null);
	}, [usersData, taskData]);

	/**
	 * Task detail where input
	 * @type {{id: string}}
	 */
	const taskWhereInput: ITaskWhereUniqueInput = {
		id: taskData?.task?.id
	}

	/**
	 * Update task labels
	 * @param {React.ChangeEvent<any>} _event
	 * @param user
	 */
	const handleOnChangeAutocomplete = (_event: ChangeEvent<any>, user: IUser | null) => {
		setValue(user);

		let assignUser;

		if (null === user) {
			assignUser = {
				disconnect: false
			}
		} else {
			assignUser = {
				connect: {
					id: user.id
				}
			}
		}

		updateTaskAssignUserMutation({
			variables: {
				taskWhereInput,
				updateTask: {
					assignUser
				}
			},
			refetchQueries: ['task']
		}).then();
	}

	if (loading) return <Box><p>Loading..</p></Box>;
	if (error) return <p>Error..</p>;

	return (
		<Box className={styles.root}>
			<Autocomplete
				options={usersData?.users ?? []}
				getOptionLabel={option => option.name}
				getOptionSelected={(option: IUser, value: IUser) => option.id === value.id}
				value={value}
				onChange={handleOnChangeAutocomplete}
				renderInput={params => (
					<TextField
						{...params}
						placeholder={'Users'}
						variant={'outlined'}
						label={'Assign user'}
						fullWidth
					/>
				)}
			/>
		</Box>
	)
}

export default TaskDetailAssignUser;