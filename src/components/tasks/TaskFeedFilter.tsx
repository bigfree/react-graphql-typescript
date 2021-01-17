import { Box, makeStyles, Paper, TextField, Theme } from "@material-ui/core";
import { KeyboardDatePicker } from "@material-ui/pickers";
import React from 'react';
import { Controller, useForm } from "react-hook-form";
import { TDataFilter } from "../../types/Task.types";

type TProps = {
	dataFilter: TDataFilter
	handleDataChange: (data: TDataFilter) => void;
}

type TFormData = {
	taskName: string;
	taskCreatedAt: string | null;
}

const useStyles = makeStyles((theme: Theme) => ({
	root: {
		marginBottom: theme.spacing(2),
	},
	paper: {
		padding: theme.spacing(2),
	}
}));

const TaskFeedFilter: React.FC<TProps> = ({ dataFilter, handleDataChange }: TProps): JSX.Element => {
	const { control, handleSubmit, setValue } = useForm<TFormData>();
	const styles = useStyles();

	const onSubmit = (data: TFormData) => handleDataChange(data);
	const onInput = () => handleSubmit(onSubmit)();
	const onDateChange = (date: Date | null) => {
		console.log(date);
		setValue("taskCreatedAt", date ? new Date(date).toISOString() : null);
		handleSubmit(onSubmit)();
	}

	return (
		<Box className={styles.root}>
			<Paper className={styles.paper}>
				<form onSubmit={handleSubmit(onSubmit)} autoComplete={"off"}>
					<Controller
						name={`taskName`}
						control={control}
						defaultValue={dataFilter.taskName}
						render={({ onChange, value }) =>
							<TextField
								variant={`outlined`}
								value={value}
								onChange={onChange}
								onKeyUp={onInput}
								label={`Task name`}
							/>
						}
					/>
					<Controller
						name={`taskCreatedAt`}
						control={control}
						defaultValue={dataFilter.taskCreatedAt}
						rules={{
							required: false,
						}}
						render={({ value }) =>
							<KeyboardDatePicker
								disableToolbar
								variant={`inline`}
								inputVariant={`outlined`}
								format={`dd.MM.yyyy`}
								value={value ?? null}
								onChange={onDateChange}
								label={`Created At`}
							/>
						}
					/>
				</form>
			</Paper>
		</Box>
	)
}

export default TaskFeedFilter;