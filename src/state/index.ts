import { createGlobalState } from 'react-hooks-global-state';

type TGlobalState = {
	openNewTask: boolean;
}

export const { useGlobalState } = createGlobalState<TGlobalState>({
	openNewTask: false
});