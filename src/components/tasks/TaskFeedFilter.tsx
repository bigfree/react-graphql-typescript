import {
	Box,
	FormControl,
	Grid,
	InputLabel,
	makeStyles,
	MenuItem,
	Paper,
	Select,
	TextField,
	Theme
} from "@material-ui/core";
import { KeyboardDatePicker } from "@material-ui/pickers";
import { formatISO, startOfDay } from 'date-fns';
import React, { ChangeEvent } from 'react';
import { Controller, useForm } from "react-hook-form";
import { ISortOrder } from "../../generated/graphql";
import { TDataFilter } from "../../types/Task.types";

type TProps = {
	dataFilter: TDataFilter
	handleDataChange: (data: TDataFilter) => void;
}

type TFormData = {
	taskName: string;
	taskCreatedAt: string | null;
	taskCreatedAtEnd: string | null;
	taskOrder: ISortOrder;
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
		marginRight: theme.spacing(2),
	},
	createdAtElement: {
		marginRight: theme.spacing(2),
	},
	orderElement: {
		flex: '0 0 100px',
	},
}));

const TaskFeedFilter: React.FC<TProps> = ({ dataFilter, handleDataChange }: TProps): JSX.Element => {
	const { control, handleSubmit, setValue } = useForm<TFormData>();
	const styles = useStyles();

	/**
	 * OnSubmit form
	 * @param {TFormData} data
	 */
	const onSubmit = (data: TFormData) => handleDataChange(data);

	/**
	 * OnInput for task name search
	 * @returns {Promise<void>}
	 */
	const onInput = () => handleSubmit(onSubmit)();

	/**
	 * OnChange date picker
	 * @param {Date | null} date
	 */
	const onDateChange = (date: Date | null) => {
		const startDayDateTime = date ? startOfDay(date) : null;

		setValue("taskCreatedAt", startDayDateTime ? formatISO(startDayDateTime) : null);
		handleSubmit(onSubmit)();
	}

	/**
	 * OnChange select order
	 * @param {React.ChangeEvent<{name?: string | undefined, value: string}>} event
	 */
	const onOrderChange = (event: ChangeEvent<{ name?: string | undefined; value: string | unknown; }>) => {
		setValue("taskOrder", event.target.value);
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
									className={styles.createdAtElement}
								/>
							}
						/>
						<Controller
							name={`taskOrder`}
							control={control}
							defaultValue={dataFilter.taskOrder}
							render={({ value }) =>
								<FormControl variant={`outlined`} className={styles.orderElement}>
									<InputLabel id={`order-select-label`} defaultValue={value}>Order</InputLabel>
									<Select
										labelId={`order-select-label`}
										label={`Order`}
										id={`order-select`}
										value={value}
										onChange={onOrderChange}
									>
										<MenuItem value={ISortOrder.Desc}>Latest</MenuItem>
										<MenuItem value={ISortOrder.Asc}>Oldest</MenuItem>
									</Select>
								</FormControl>
							}
						/>
					</Grid>
				</Paper>
			</form>
		</Box>
	)
}

export default TaskFeedFilter;