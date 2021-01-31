import { ApolloCache } from "@apollo/client";
import { FetchResult } from "@apollo/client/link/core";
import { Box, Button, Paper, TextField, Theme } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import AddCircle from '@material-ui/icons/AddCircle';
import Close from '@material-ui/icons/Close';
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { ICreateTaskMutation, NewTaskTypeNameFragmentDoc, useCreateTaskMutation } from "../../generated/graphql";
import { useGlobalState } from '../../state';

type TFormData = {
	name: string
}

const useStyles = makeStyles((theme: Theme) => ({
	root: {
		marginBottom: theme.spacing(2),
	},
	form: {
		position: 'relative',
	},
	box: {
		position: 'absolute',
		top: `${2 + theme.spacing(1)}px`,
		right: `${2 + theme.spacing(1)}px`,
	},
	button: {
		fontWeight: 'bold',
		marginLeft: `${2 + theme.spacing(1)}px`,
	}
}));

/**
 * New Task Component
 * @returns {JSX.Element}
 * @constructor
 */
const NewTask: React.FC = (): JSX.Element => {
	const [, setNewTask] = useGlobalState('openNewTask');
	const { control, handleSubmit, reset } = useForm<TFormData>();
	const styles = useStyles();
	const history = useHistory();

	/**
	 * New task mutation
	 */
	const [createTaskMutation, { error }] = useCreateTaskMutation({
		update: (cache: ApolloCache<ICreateTaskMutation>, { data }: FetchResult<ICreateTaskMutation>) => {
			cache.modify({
				fields: {
					tasks(existingTodosRefs: any[] = [], { readField }) {
						const newTaskRef = cache.writeFragment({
							data: data?.createTask,
							fragment: NewTaskTypeNameFragmentDoc
						});

						if (existingTodosRefs.some((ref: any) => data?.createTask.id === readField('id', ref))) {
							return existingTodosRefs
						}

						return [newTaskRef, ...existingTodosRefs];
					}
				}
			});
		},
		refetchQueries: ['tasks']
	});

	/**
	 * OnSubmit form
	 * @param {TFormData} data
	 */
	const onSubmit = (data: TFormData) => {
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

			// Close create new task component
			setNewTask(false)
		});
	}

	return (
		<Paper className={styles.root}>
			<form onSubmit={handleSubmit(onSubmit)} autoComplete={`off`} className={styles.form}>
				<Controller
					name={`name`}
					control={control}
					defaultValue={``}
					render={({ onChange, value }) =>
						<TextField
							value={value}
							onChange={onChange}
							placeholder={`Add new task`}
							variant={'outlined'}
							fullWidth
						/>
					}
				/>
				<Box className={styles.box}>
					<Button
						variant={'contained'}
						color={'secondary'}
						className={styles.button}
						type={'submit'}
						startIcon={<AddCircle/>}
					>
						Add Task
					</Button>
					<Button
						variant={'contained'}
						color={'primary'}
						className={styles.button}
						startIcon={<Close/>}
						onClick={() => setNewTask(false)}
					>
						Close
					</Button>
				</Box>
			</form>
		</Paper>
	)
}

export default NewTask