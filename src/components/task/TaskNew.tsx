import { ApolloCache } from "@apollo/client";
import { FetchResult } from "@apollo/client/link/core";
import { Paper, TextField, Theme } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { ICreateTaskMutation, NewTaskTypeNameFragmentDoc, useCreateTaskMutation } from "../../generated/graphql";

type TFormData = {
	name: string
}

const useStyles = makeStyles((theme: Theme) => ({
	root: {
		marginBottom: theme.spacing(2),
	}
}));

const NewTask: React.FC = (): JSX.Element => {
	const { control, handleSubmit, reset } = useForm<TFormData>();
	const styles = useStyles();
	const history = useHistory();

	const [createTaskMutation, { error }] = useCreateTaskMutation({
		update: (cache: ApolloCache<ICreateTaskMutation>, { data }: FetchResult<ICreateTaskMutation>) => {
			cache.modify({
				fields: {
					tasks(existingTodosRefs: any[] = [], { readField }) {
						const newTaskRef = cache.writeFragment({
							data: data?.createTask,
							fragment: NewTaskTypeNameFragmentDoc
						});

						if (existingTodosRefs.some((ref: any) => readField('id', ref) === data?.createTask.id)) {
							return existingTodosRefs
						}

						return [newTaskRef, ...existingTodosRefs];
					}
				}
			});
		},
		refetchQueries: ['tasks']
	});

	const onSubmit = (data: TFormData) => {
		console.log(data);
		createTaskMutation({
			variables: {
				createTask: {
					name: data.name,
					user: {
						connect: {
							id: 'ckbuz1d7c0000nkv6z8b9vpav'
						}
					}
				}
			}
		}).then(res => {
			if (!res || error) {
				return false;
			}

			// Redirect to new task
			history.push(`/tasks/${res.data?.createTask.id}`);

			// Reset form fields
			reset();
			console.log(res);
		});
	}

	return (
		<Paper className={styles.root}>
			<form onSubmit={handleSubmit(onSubmit)} autoComplete={`off`}>
				<Controller
					name={`name`}
					control={control}
					defaultValue={``}
					render={({ onChange, value }) =>
						<TextField
							value={value}
							onChange={onChange}
							placeholder={`Add new task`}
							variant='outlined'
							fullWidth
						/>
					}
				/>
			</form>
		</Paper>
	)
}

export default NewTask