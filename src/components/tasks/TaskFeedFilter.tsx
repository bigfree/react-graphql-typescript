import { Box, Grid, makeStyles, Paper, TextField, Theme } from "@material-ui/core";
import { KeyboardDatePicker } from "@material-ui/pickers";
import { formatISO, startOfDay } from 'date-fns';
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
	taskCreatedAtEnd: string | null;
}

const useStyles = makeStyles((theme: Theme) => ({
	root: {
		marginBottom: theme.spacing(2),
	},
	paper: {
		padding: theme.spacing(2),
	},
	nameFilter: {
		flex: 1,
		marginRight: theme.spacing(2)
	}
}));

const TaskFeedFilter: React.FC<TProps> = ({ dataFilter, handleDataChange }: TProps): JSX.Element => {
	const { control, handleSubmit, setValue } = useForm<TFormData>();
	const styles = useStyles();

	const onSubmit = (data: TFormData) => handleDataChange(data);

	const onInput = () => handleSubmit(onSubmit)();

	const onDateChange = (date: Date | null) => {
		const startDayDateTime = date ? startOfDay(date) : null;

		setValue("taskCreatedAt", startDayDateTime ? formatISO(startDayDateTime) : null);
		handleSubmit(onSubmit)();
	}

	return (
		<Box className={styles.root}>
			<form onSubmit={handleSubmit(onSubmit)} autoComplete={"off"}>
				<Paper className={styles.paper}>
					<Grid container>
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
									className={styles.nameFilter}
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
					</Grid>
				</Paper>
			</form>
		</Box>
	)
}

export default TaskFeedFilter;