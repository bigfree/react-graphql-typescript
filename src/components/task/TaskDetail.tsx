import { Avatar, Box, Card, CardContent, CardHeader, IconButton, TextField, Theme } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import CloseIcon from "@material-ui/icons/Close";
import { format, parseISO } from 'date-fns';
import React from "react";
import { Controller, ControllerRenderProps, useForm } from "react-hook-form";
import { RouteComponentProps } from "react-router-dom";
import {
	ITaskDetailQuery,
	ITaskWhereUniqueInput,
	useTaskDetailQuery,
	useUpdateTaskMutation
} from "../../generated/graphql";
import DeleteTaskHeaderMenu from "../shared/deleteTaskHeaderMenu";
import TaskDetailLabels from "../shared/taskDetailLabels";

type TRouteParams = {
	id: string
}

type TProps = {
	routeProps: RouteComponentProps<TRouteParams>
}

type TFormData = {
	name: string;
}

const useStyles = makeStyles((theme: Theme) => ({
	root: {
		flexGrow: 0,
		flexBasis: `450px`,
		width: `450px`,
		minWidth: `1px`,
		borderLeft: `1px solid ${theme.palette.divider}`,
		display: 'flex',
		alignItems: 'stretch'
	},
	card: {
		flexGrow: 1,
		borderRadius: 0,
		background: 'none',
		boxShadow: 'none',
	},
	cardHeader: {
		borderBottom: `1px solid ${theme.palette.divider}`
	},
	formControl: {
		width: `100%`,
	}
}));

const TaskDetail: React.FC<TProps> = ({ routeProps }: TProps): JSX.Element => {
	const styles = useStyles();

	/**
	 * React form hooks init
	 */
	const { control, handleSubmit, errors, reset } = useForm<TFormData>({
		mode: "onBlur",
	});

	/**
	 * Task detail where input
	 * @type {{id: string}}
	 */
	const taskWhereInput: ITaskWhereUniqueInput = {
		id: routeProps.match.params.id
	}

	/**
	 * Load task detail
	 */
	const { data, loading, error } = useTaskDetailQuery({
		variables: {
			taskWhereInput
		},
		onCompleted: (data: ITaskDetailQuery) => {
			reset({
				name: data.task?.name
			})
		}
	});

	/**
	 * Update task mutation
	 */
	const [updateTaskMutation] = useUpdateTaskMutation();

	/**
	 * Close task event
	 */
	const handleClickTask = () => {
		routeProps.history.push(`/tasks`);
	}

	/**
	 * Submit form event
	 * @param {TFormData} data
	 */
	const onSubmit = (data: TFormData) => {
		updateTaskMutation({
			variables: {
				taskWhereInput,
				updateTask: {
					name: {
						set: data.name
					}
				}
			}
		}).then(res => {
			console.log(res);
		});
	}

	/**
	 * OnBlur event
	 * @returns {Promise<void>}
	 */
	const onBlur = () => handleSubmit(onSubmit)();

	if (loading) return <Box className={styles.root}><p>Loading..</p></Box>;
	if (error) return <p>Error..</p>;

	return (
		<Box className={styles.root}>
			<Card className={styles.card}>
				<CardHeader
					className={styles.cardHeader}
					avatar={
						<Avatar aria-label="user avatar">
							AM
						</Avatar>
					}
					title={data?.task?.name}
					action={
						<Box>
							<DeleteTaskHeaderMenu taskData={data} routeProps={routeProps}/>
							<IconButton aria-label="close" onClick={handleClickTask}>
								<CloseIcon/>
							</IconButton>
						</Box>
					}
					subheader={format(parseISO(data?.task?.createdAt), `dd.MM.yyyy HH:mm`)}
				/>
				<CardContent>
					<TaskDetailLabels taskData={data}/>
					<form onSubmit={handleSubmit(onSubmit)} autoComplete={`off`}>
						<Controller
							name={`name`}
							control={control}
							defaultValue={''}
							rules={{
								required: true,
								minLength: 1,
							}}
							render={({ onChange, value, name, ref }: ControllerRenderProps) =>
								<TextField
									name={name}
									ref={ref}
									error={errors.name?.type === "required"}
									variant={`outlined`}
									value={value}
									onChange={onChange}
									onBlur={onBlur}
									label={errors.name ? `Field is required` : `Task name`}
									className={styles.formControl}
								/>
							}
						/>
					</form>
					<Box>
						{JSON.stringify(data?.task)}
					</Box>
				</CardContent>
			</Card>
		</Box>
	);
}

export default TaskDetail;