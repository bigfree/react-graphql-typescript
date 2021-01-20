import { ISortOrder } from "../generated/graphql";

export type TDataFilter = {
	taskName?: string;
	taskCreatedAt: string | null;
	taskCreatedAtEnd: string | null;
	taskOrder: ISortOrder;
}