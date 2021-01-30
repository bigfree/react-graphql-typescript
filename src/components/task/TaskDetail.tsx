import { Avatar, Box, Card, CardContent, CardHeader, IconButton, TextField, Theme } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import CloseIcon from "@material-ui/icons/Close";
import { format, parseISO } from 'date-fns';
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { RouteComponentProps } from "react-router-dom";
import { ITaskWhereUniqueInput, useTaskDetailQuery, useUpdateTaskMutation } from "../../generated/graphql";

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
	const { control, handleSubmit, errors } = useForm<TFormData>();
	const styles = useStyles();

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
		}
	});

	const [updateTaskMutation] = useUpdateTaskMutation();

	/**
	 * Close task
	 */
	const handleClickTask = () => {
		routeProps.history.push(`/tasks`);
	}

	const onSubmit = (data: TFormData) => {
		console.log(errors);
		updateTaskMutation({
			variables: {
				taskWhereInput,
				updateTask: {
					name: {
						set: data.name
					}
				}
			}
		}).then(r => console.log(r));
	}

	const onBlur = () => handleSubmit(onSubmit)();

	if (loading) return <p>Loading..</p>;
	if (error) return <p>Error..</p>;

	console.log(data);

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
						<IconButton aria-label="close" onClick={handleClickTask}>
							<CloseIcon/>
						</IconButton>
					}
					subheader={format(parseISO(data?.task?.createdAt), `dd.MM.yyyy HH:mm`)}
				/>
				<CardContent>
					<form onSubmit={handleSubmit(onSubmit)} autoComplete={`off`}>
						<Controller
							name={`name`}
							control={control}
							defaultValue={data?.task?.name}
							rules={{
								required: true,
								minLength: 1,
							}}
							render={({ onChange, value }) =>
								<TextField
									error={errors.name?.type === "required"}
									variant={`outlined`}
									value={value}
									onChange={onChange}
									onBlur={onBlur}
									label={errors.name ? `Field is required` :`Task name`}
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