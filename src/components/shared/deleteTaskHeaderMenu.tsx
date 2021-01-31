import { ApolloCache } from "@apollo/client";
import { FetchResult } from "@apollo/client/link/core";
import { IconButton, ListItemIcon, Menu, MenuItem, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ArchiveIcon from "@material-ui/icons/Archive";
import DeleteIcon from "@material-ui/icons/Delete";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import React from "react";
import { RouteComponentProps } from "react-router-dom";
import { IDeleteTaskMutation, ITaskDetailQuery, useDeleteTaskMutation } from "../../generated/graphql";

type TRouteParams = {
	id: string
}

type TProps = {
	routeProps: RouteComponentProps<TRouteParams>;
	taskData: ITaskDetailQuery | undefined;
}

const useStyles = makeStyles(() => ({
	icon: {
		minWidth: '36px'
	}
}));

const DeleteTaskHeaderMenu: React.FC<TProps> = ({ taskData, routeProps }: TProps): JSX.Element => {
	const styles = useStyles();
	const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

	const [deleteTaskMutation] = useDeleteTaskMutation({
		update: (cache: ApolloCache<IDeleteTaskMutation>, { data }: FetchResult<IDeleteTaskMutation>) => {

			const normalizedId = cache.identify({
				__ref: `Task:${data?.deleteTask?.id}`,
				__typename: 'Task'
			});

			if (!normalizedId) {
				return undefined;
			}

			cache.modify({
				fields: {
					tasks(existingTodosRefs: any[] = [], { readField }) {
						return existingTodosRefs.filter(
							taskRef => data?.deleteTask?.id !== readField('id', taskRef)
						);
					}
				}
			});
			cache.evict({ id: normalizedId });
			cache.gc();
		},
		refetchQueries: ['tasks']
	});

	const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	const handleDeleteTask = () => {
		deleteTaskMutation({
			variables: {
				taskWhereInput: {
					id: taskData?.task?.id
				}
			}
		}).then((_res: FetchResult<IDeleteTaskMutation>) => {
			routeProps.history.push('/tasks');
		});
	}

	return (
		<>
			<IconButton aria-label="close" onClick={handleClick}>
				<MoreVertIcon/>
			</IconButton>
			<Menu
				id="simple-menu"
				anchorEl={anchorEl}
				keepMounted
				open={Boolean(anchorEl)}
				onClose={handleClose}
			>
				<MenuItem onClick={handleClose}>
					<ListItemIcon className={styles.icon}>
						<ArchiveIcon fontSize="small"/>
					</ListItemIcon>
					<Typography variant="inherit">Archive</Typography>
				</MenuItem>
				<MenuItem onClick={handleDeleteTask}>
					<ListItemIcon className={styles.icon}>
						<DeleteIcon fontSize="small"/>
					</ListItemIcon>
					<Typography variant="inherit">Delete</Typography>
				</MenuItem>
			</Menu>
		</>
	)
}

export default DeleteTaskHeaderMenu;