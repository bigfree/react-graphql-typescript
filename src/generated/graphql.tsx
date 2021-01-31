import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The javascript `Date` as string. Type represents date and time as the ISO Date string. */
  DateTime: any;
};

export type IQuery = {
  __typename?: 'Query';
  label?: Maybe<ILabel>;
  findFirstLabel?: Maybe<ILabel>;
  labels: Array<ILabel>;
  aggregateLabel: IAggregateLabel;
  project?: Maybe<IProject>;
  findFirstProject?: Maybe<IProject>;
  projects: Array<IProject>;
  aggregateProject: IAggregateProject;
  task?: Maybe<ITask>;
  findFirstTask?: Maybe<ITask>;
  tasks: Array<ITask>;
  aggregateTask: IAggregateTask;
  user?: Maybe<IUser>;
  findFirstUser?: Maybe<IUser>;
  users: Array<IUser>;
  aggregateUser: IAggregateUser;
  workspace?: Maybe<IWorkspace>;
  findFirstWorkspace?: Maybe<IWorkspace>;
  workspaces: Array<IWorkspace>;
  aggregateWorkspace: IAggregateWorkspace;
};


export type IQueryLabelArgs = {
  where: ILabelWhereUniqueInput;
};


export type IQueryFindFirstLabelArgs = {
  where?: Maybe<ILabelWhereInput>;
  orderBy?: Maybe<Array<ILabelOrderByInput>>;
  cursor?: Maybe<ILabelWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  distinct?: Maybe<Array<ILabelScalarFieldEnum>>;
};


export type IQueryLabelsArgs = {
  where?: Maybe<ILabelWhereInput>;
  orderBy?: Maybe<Array<ILabelOrderByInput>>;
  cursor?: Maybe<ILabelWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  distinct?: Maybe<Array<ILabelScalarFieldEnum>>;
};


export type IQueryAggregateLabelArgs = {
  where?: Maybe<ILabelWhereInput>;
  orderBy?: Maybe<Array<ILabelOrderByInput>>;
  cursor?: Maybe<ILabelWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type IQueryProjectArgs = {
  where: IProjectWhereUniqueInput;
};


export type IQueryFindFirstProjectArgs = {
  where?: Maybe<IProjectWhereInput>;
  orderBy?: Maybe<Array<IProjectOrderByInput>>;
  cursor?: Maybe<IProjectWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  distinct?: Maybe<Array<IProjectScalarFieldEnum>>;
};


export type IQueryProjectsArgs = {
  where?: Maybe<IProjectWhereInput>;
  orderBy?: Maybe<Array<IProjectOrderByInput>>;
  cursor?: Maybe<IProjectWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  distinct?: Maybe<Array<IProjectScalarFieldEnum>>;
};


export type IQueryAggregateProjectArgs = {
  where?: Maybe<IProjectWhereInput>;
  orderBy?: Maybe<Array<IProjectOrderByInput>>;
  cursor?: Maybe<IProjectWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type IQueryTaskArgs = {
  where: ITaskWhereUniqueInput;
};


export type IQueryFindFirstTaskArgs = {
  where?: Maybe<ITaskWhereInput>;
  orderBy?: Maybe<Array<ITaskOrderByInput>>;
  cursor?: Maybe<ITaskWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  distinct?: Maybe<Array<ITaskScalarFieldEnum>>;
};


export type IQueryTasksArgs = {
  where?: Maybe<ITaskWhereInput>;
  orderBy?: Maybe<Array<ITaskOrderByInput>>;
  cursor?: Maybe<ITaskWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  distinct?: Maybe<Array<ITaskScalarFieldEnum>>;
};


export type IQueryAggregateTaskArgs = {
  where?: Maybe<ITaskWhereInput>;
  orderBy?: Maybe<Array<ITaskOrderByInput>>;
  cursor?: Maybe<ITaskWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type IQueryUserArgs = {
  where: IUserWhereUniqueInput;
};


export type IQueryFindFirstUserArgs = {
  where?: Maybe<IUserWhereInput>;
  orderBy?: Maybe<Array<IUserOrderByInput>>;
  cursor?: Maybe<IUserWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  distinct?: Maybe<Array<IUserScalarFieldEnum>>;
};


export type IQueryUsersArgs = {
  where?: Maybe<IUserWhereInput>;
  orderBy?: Maybe<Array<IUserOrderByInput>>;
  cursor?: Maybe<IUserWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  distinct?: Maybe<Array<IUserScalarFieldEnum>>;
};


export type IQueryAggregateUserArgs = {
  where?: Maybe<IUserWhereInput>;
  orderBy?: Maybe<Array<IUserOrderByInput>>;
  cursor?: Maybe<IUserWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type IQueryWorkspaceArgs = {
  where: IWorkspaceWhereUniqueInput;
};


export type IQueryFindFirstWorkspaceArgs = {
  where?: Maybe<IWorkspaceWhereInput>;
  orderBy?: Maybe<Array<IWorkspaceOrderByInput>>;
  cursor?: Maybe<IWorkspaceWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  distinct?: Maybe<Array<IWorkspaceScalarFieldEnum>>;
};


export type IQueryWorkspacesArgs = {
  where?: Maybe<IWorkspaceWhereInput>;
  orderBy?: Maybe<Array<IWorkspaceOrderByInput>>;
  cursor?: Maybe<IWorkspaceWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  distinct?: Maybe<Array<IWorkspaceScalarFieldEnum>>;
};


export type IQueryAggregateWorkspaceArgs = {
  where?: Maybe<IWorkspaceWhereInput>;
  orderBy?: Maybe<Array<IWorkspaceOrderByInput>>;
  cursor?: Maybe<IWorkspaceWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};

export type ILabel = {
  __typename?: 'Label';
  id: Scalars['String'];
  name: Scalars['String'];
  createdAt: Scalars['DateTime'];
  tasks?: Maybe<Array<ITask>>;
};


export type ILabelTasksArgs = {
  where?: Maybe<ITaskWhereInput>;
  orderBy?: Maybe<Array<ITaskOrderByInput>>;
  cursor?: Maybe<ITaskWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  distinct?: Maybe<Array<ITaskScalarFieldEnum>>;
};


export type ITask = {
  __typename?: 'Task';
  id: Scalars['String'];
  name: Scalars['String'];
  content?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  archiveAt?: Maybe<Scalars['DateTime']>;
  userId: Scalars['String'];
  user: IUser;
  labels?: Maybe<Array<ILabel>>;
};


export type ITaskLabelsArgs = {
  where?: Maybe<ILabelWhereInput>;
  orderBy?: Maybe<Array<ILabelOrderByInput>>;
  cursor?: Maybe<ILabelWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  distinct?: Maybe<Array<ILabelScalarFieldEnum>>;
};

export type IUser = {
  __typename?: 'User';
  id: Scalars['String'];
  email: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  password: Scalars['String'];
  createdAt: Scalars['DateTime'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  role: IRole;
  tasks?: Maybe<Array<ITask>>;
  workspaces?: Maybe<Array<IWorkspace>>;
  projects?: Maybe<Array<IProject>>;
  projectOwns?: Maybe<Array<IProject>>;
};


export type IUserTasksArgs = {
  where?: Maybe<ITaskWhereInput>;
  orderBy?: Maybe<Array<ITaskOrderByInput>>;
  cursor?: Maybe<ITaskWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  distinct?: Maybe<Array<ITaskScalarFieldEnum>>;
};


export type IUserWorkspacesArgs = {
  where?: Maybe<IWorkspaceWhereInput>;
  orderBy?: Maybe<Array<IWorkspaceOrderByInput>>;
  cursor?: Maybe<IWorkspaceWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  distinct?: Maybe<Array<IWorkspaceScalarFieldEnum>>;
};


export type IUserProjectsArgs = {
  where?: Maybe<IProjectWhereInput>;
  orderBy?: Maybe<Array<IProjectOrderByInput>>;
  cursor?: Maybe<IProjectWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  distinct?: Maybe<Array<IProjectScalarFieldEnum>>;
};


export type IUserProjectOwnsArgs = {
  where?: Maybe<IProjectWhereInput>;
  orderBy?: Maybe<Array<IProjectOrderByInput>>;
  cursor?: Maybe<IProjectWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  distinct?: Maybe<Array<IProjectScalarFieldEnum>>;
};

export enum IRole {
  User = 'USER',
  Projectowner = 'PROJECTOWNER',
  Workspaceadmin = 'WORKSPACEADMIN',
  Workspaceowner = 'WORKSPACEOWNER'
}

export type ITaskWhereInput = {
  AND?: Maybe<Array<ITaskWhereInput>>;
  OR?: Maybe<Array<ITaskWhereInput>>;
  NOT?: Maybe<Array<ITaskWhereInput>>;
  id?: Maybe<IStringFilter>;
  name?: Maybe<IStringFilter>;
  content?: Maybe<IStringNullableFilter>;
  createdAt?: Maybe<IDateTimeFilter>;
  updatedAt?: Maybe<IDateTimeNullableFilter>;
  deletedAt?: Maybe<IDateTimeNullableFilter>;
  archiveAt?: Maybe<IDateTimeNullableFilter>;
  user?: Maybe<IUserRelationFilter>;
  userId?: Maybe<IStringFilter>;
  labels?: Maybe<ILabelListRelationFilter>;
};

export type IStringFilter = {
  equals?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  notIn?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  contains?: Maybe<Scalars['String']>;
  startsWith?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  mode?: Maybe<IQueryMode>;
  not?: Maybe<INestedStringFilter>;
};

export enum IQueryMode {
  Default = 'default',
  Insensitive = 'insensitive'
}

export type INestedStringFilter = {
  equals?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  notIn?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  contains?: Maybe<Scalars['String']>;
  startsWith?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  not?: Maybe<INestedStringFilter>;
};

export type IStringNullableFilter = {
  equals?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  notIn?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  contains?: Maybe<Scalars['String']>;
  startsWith?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  mode?: Maybe<IQueryMode>;
  not?: Maybe<INestedStringNullableFilter>;
};

export type INestedStringNullableFilter = {
  equals?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  notIn?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  contains?: Maybe<Scalars['String']>;
  startsWith?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  not?: Maybe<INestedStringNullableFilter>;
};

export type IDateTimeFilter = {
  equals?: Maybe<Scalars['DateTime']>;
  in?: Maybe<Array<Scalars['DateTime']>>;
  notIn?: Maybe<Array<Scalars['DateTime']>>;
  lt?: Maybe<Scalars['DateTime']>;
  lte?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  gte?: Maybe<Scalars['DateTime']>;
  not?: Maybe<INestedDateTimeFilter>;
};

export type INestedDateTimeFilter = {
  equals?: Maybe<Scalars['DateTime']>;
  in?: Maybe<Array<Scalars['DateTime']>>;
  notIn?: Maybe<Array<Scalars['DateTime']>>;
  lt?: Maybe<Scalars['DateTime']>;
  lte?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  gte?: Maybe<Scalars['DateTime']>;
  not?: Maybe<INestedDateTimeFilter>;
};

export type IDateTimeNullableFilter = {
  equals?: Maybe<Scalars['DateTime']>;
  in?: Maybe<Array<Scalars['DateTime']>>;
  notIn?: Maybe<Array<Scalars['DateTime']>>;
  lt?: Maybe<Scalars['DateTime']>;
  lte?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  gte?: Maybe<Scalars['DateTime']>;
  not?: Maybe<INestedDateTimeNullableFilter>;
};

export type INestedDateTimeNullableFilter = {
  equals?: Maybe<Scalars['DateTime']>;
  in?: Maybe<Array<Scalars['DateTime']>>;
  notIn?: Maybe<Array<Scalars['DateTime']>>;
  lt?: Maybe<Scalars['DateTime']>;
  lte?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  gte?: Maybe<Scalars['DateTime']>;
  not?: Maybe<INestedDateTimeNullableFilter>;
};

export type IUserRelationFilter = {
  is?: Maybe<IUserWhereInput>;
  isNot?: Maybe<IUserWhereInput>;
};

export type IUserWhereInput = {
  AND?: Maybe<Array<IUserWhereInput>>;
  OR?: Maybe<Array<IUserWhereInput>>;
  NOT?: Maybe<Array<IUserWhereInput>>;
  id?: Maybe<IStringFilter>;
  email?: Maybe<IStringFilter>;
  name?: Maybe<IStringNullableFilter>;
  password?: Maybe<IStringFilter>;
  createdAt?: Maybe<IDateTimeFilter>;
  updatedAt?: Maybe<IDateTimeNullableFilter>;
  deletedAt?: Maybe<IDateTimeNullableFilter>;
  role?: Maybe<IEnumRoleFilter>;
  tasks?: Maybe<ITaskListRelationFilter>;
  workspaces?: Maybe<IWorkspaceListRelationFilter>;
  projects?: Maybe<IProjectListRelationFilter>;
  projectOwns?: Maybe<IProjectListRelationFilter>;
};

export type IEnumRoleFilter = {
  equals?: Maybe<IRole>;
  in?: Maybe<Array<IRole>>;
  notIn?: Maybe<Array<IRole>>;
  not?: Maybe<INestedEnumRoleFilter>;
};

export type INestedEnumRoleFilter = {
  equals?: Maybe<IRole>;
  in?: Maybe<Array<IRole>>;
  notIn?: Maybe<Array<IRole>>;
  not?: Maybe<INestedEnumRoleFilter>;
};

export type ITaskListRelationFilter = {
  every?: Maybe<ITaskWhereInput>;
  some?: Maybe<ITaskWhereInput>;
  none?: Maybe<ITaskWhereInput>;
};

export type IWorkspaceListRelationFilter = {
  every?: Maybe<IWorkspaceWhereInput>;
  some?: Maybe<IWorkspaceWhereInput>;
  none?: Maybe<IWorkspaceWhereInput>;
};

export type IWorkspaceWhereInput = {
  AND?: Maybe<Array<IWorkspaceWhereInput>>;
  OR?: Maybe<Array<IWorkspaceWhereInput>>;
  NOT?: Maybe<Array<IWorkspaceWhereInput>>;
  id?: Maybe<IStringFilter>;
  name?: Maybe<IStringFilter>;
  slug?: Maybe<IStringFilter>;
  description?: Maybe<IStringNullableFilter>;
  image?: Maybe<IStringNullableFilter>;
  createdAt?: Maybe<IDateTimeFilter>;
  updatedAt?: Maybe<IDateTimeNullableFilter>;
  deletedAt?: Maybe<IDateTimeNullableFilter>;
  user?: Maybe<IUserRelationFilter>;
  userId?: Maybe<IStringFilter>;
};

export type IProjectListRelationFilter = {
  every?: Maybe<IProjectWhereInput>;
  some?: Maybe<IProjectWhereInput>;
  none?: Maybe<IProjectWhereInput>;
};

export type IProjectWhereInput = {
  AND?: Maybe<Array<IProjectWhereInput>>;
  OR?: Maybe<Array<IProjectWhereInput>>;
  NOT?: Maybe<Array<IProjectWhereInput>>;
  id?: Maybe<IStringFilter>;
  name?: Maybe<IStringFilter>;
  createdAt?: Maybe<IDateTimeFilter>;
  updatedAt?: Maybe<IDateTimeNullableFilter>;
  deletedAt?: Maybe<IDateTimeNullableFilter>;
  projectOwner?: Maybe<IUserRelationFilter>;
  userId?: Maybe<IStringFilter>;
  assignUsers?: Maybe<IUserListRelationFilter>;
};

export type IUserListRelationFilter = {
  every?: Maybe<IUserWhereInput>;
  some?: Maybe<IUserWhereInput>;
  none?: Maybe<IUserWhereInput>;
};

export type ILabelListRelationFilter = {
  every?: Maybe<ILabelWhereInput>;
  some?: Maybe<ILabelWhereInput>;
  none?: Maybe<ILabelWhereInput>;
};

export type ILabelWhereInput = {
  AND?: Maybe<Array<ILabelWhereInput>>;
  OR?: Maybe<Array<ILabelWhereInput>>;
  NOT?: Maybe<Array<ILabelWhereInput>>;
  id?: Maybe<IStringFilter>;
  name?: Maybe<IStringFilter>;
  createdAt?: Maybe<IDateTimeFilter>;
  tasks?: Maybe<ITaskListRelationFilter>;
};

export type ITaskOrderByInput = {
  id?: Maybe<ISortOrder>;
  name?: Maybe<ISortOrder>;
  content?: Maybe<ISortOrder>;
  createdAt?: Maybe<ISortOrder>;
  updatedAt?: Maybe<ISortOrder>;
  deletedAt?: Maybe<ISortOrder>;
  archiveAt?: Maybe<ISortOrder>;
  userId?: Maybe<ISortOrder>;
};

export enum ISortOrder {
  Asc = 'asc',
  Desc = 'desc'
}

export type ITaskWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
};

export enum ITaskScalarFieldEnum {
  Id = 'id',
  Name = 'name',
  Content = 'content',
  CreatedAt = 'createdAt',
  UpdatedAt = 'updatedAt',
  DeletedAt = 'deletedAt',
  ArchiveAt = 'archiveAt',
  UserId = 'userId'
}

export type IWorkspace = {
  __typename?: 'Workspace';
  id: Scalars['String'];
  name: Scalars['String'];
  slug: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  userId: Scalars['String'];
  user: IUser;
};

export type IWorkspaceOrderByInput = {
  id?: Maybe<ISortOrder>;
  name?: Maybe<ISortOrder>;
  slug?: Maybe<ISortOrder>;
  description?: Maybe<ISortOrder>;
  image?: Maybe<ISortOrder>;
  createdAt?: Maybe<ISortOrder>;
  updatedAt?: Maybe<ISortOrder>;
  deletedAt?: Maybe<ISortOrder>;
  userId?: Maybe<ISortOrder>;
};

export type IWorkspaceWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
};

export enum IWorkspaceScalarFieldEnum {
  Id = 'id',
  Name = 'name',
  Slug = 'slug',
  Description = 'description',
  Image = 'image',
  CreatedAt = 'createdAt',
  UpdatedAt = 'updatedAt',
  DeletedAt = 'deletedAt',
  UserId = 'userId'
}

export type IProject = {
  __typename?: 'Project';
  id: Scalars['String'];
  name: Scalars['String'];
  createdAt: Scalars['DateTime'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  userId: Scalars['String'];
  projectOwner: IUser;
  assignUsers?: Maybe<Array<IUser>>;
};


export type IProjectAssignUsersArgs = {
  where?: Maybe<IUserWhereInput>;
  orderBy?: Maybe<Array<IUserOrderByInput>>;
  cursor?: Maybe<IUserWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  distinct?: Maybe<Array<IUserScalarFieldEnum>>;
};

export type IUserOrderByInput = {
  id?: Maybe<ISortOrder>;
  email?: Maybe<ISortOrder>;
  name?: Maybe<ISortOrder>;
  password?: Maybe<ISortOrder>;
  createdAt?: Maybe<ISortOrder>;
  updatedAt?: Maybe<ISortOrder>;
  deletedAt?: Maybe<ISortOrder>;
  role?: Maybe<ISortOrder>;
};

export type IUserWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
};

export enum IUserScalarFieldEnum {
  Id = 'id',
  Email = 'email',
  Name = 'name',
  Password = 'password',
  CreatedAt = 'createdAt',
  UpdatedAt = 'updatedAt',
  DeletedAt = 'deletedAt',
  Role = 'role'
}

export type IProjectOrderByInput = {
  id?: Maybe<ISortOrder>;
  name?: Maybe<ISortOrder>;
  createdAt?: Maybe<ISortOrder>;
  updatedAt?: Maybe<ISortOrder>;
  deletedAt?: Maybe<ISortOrder>;
  userId?: Maybe<ISortOrder>;
};

export type IProjectWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
};

export enum IProjectScalarFieldEnum {
  Id = 'id',
  Name = 'name',
  CreatedAt = 'createdAt',
  UpdatedAt = 'updatedAt',
  DeletedAt = 'deletedAt',
  UserId = 'userId'
}

export type ILabelOrderByInput = {
  id?: Maybe<ISortOrder>;
  name?: Maybe<ISortOrder>;
  createdAt?: Maybe<ISortOrder>;
};

export type ILabelWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export enum ILabelScalarFieldEnum {
  Id = 'id',
  Name = 'name',
  CreatedAt = 'createdAt'
}

export type IAggregateLabel = {
  __typename?: 'AggregateLabel';
  count?: Maybe<Scalars['Int']>;
  min?: Maybe<ILabelMinAggregate>;
  max?: Maybe<ILabelMaxAggregate>;
};

export type ILabelMinAggregate = {
  __typename?: 'LabelMinAggregate';
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
};

export type ILabelMaxAggregate = {
  __typename?: 'LabelMaxAggregate';
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
};

export type IAggregateProject = {
  __typename?: 'AggregateProject';
  count?: Maybe<Scalars['Int']>;
  min?: Maybe<IProjectMinAggregate>;
  max?: Maybe<IProjectMaxAggregate>;
};

export type IProjectMinAggregate = {
  __typename?: 'ProjectMinAggregate';
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  userId?: Maybe<Scalars['String']>;
};

export type IProjectMaxAggregate = {
  __typename?: 'ProjectMaxAggregate';
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  userId?: Maybe<Scalars['String']>;
};

export type IAggregateTask = {
  __typename?: 'AggregateTask';
  count?: Maybe<Scalars['Int']>;
  min?: Maybe<ITaskMinAggregate>;
  max?: Maybe<ITaskMaxAggregate>;
};

export type ITaskMinAggregate = {
  __typename?: 'TaskMinAggregate';
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  archiveAt?: Maybe<Scalars['DateTime']>;
  userId?: Maybe<Scalars['String']>;
};

export type ITaskMaxAggregate = {
  __typename?: 'TaskMaxAggregate';
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  archiveAt?: Maybe<Scalars['DateTime']>;
  userId?: Maybe<Scalars['String']>;
};

export type IAggregateUser = {
  __typename?: 'AggregateUser';
  count?: Maybe<Scalars['Int']>;
  min?: Maybe<IUserMinAggregate>;
  max?: Maybe<IUserMaxAggregate>;
};

export type IUserMinAggregate = {
  __typename?: 'UserMinAggregate';
  id?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  role?: Maybe<IRole>;
};

export type IUserMaxAggregate = {
  __typename?: 'UserMaxAggregate';
  id?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  role?: Maybe<IRole>;
};

export type IAggregateWorkspace = {
  __typename?: 'AggregateWorkspace';
  count?: Maybe<Scalars['Int']>;
  min?: Maybe<IWorkspaceMinAggregate>;
  max?: Maybe<IWorkspaceMaxAggregate>;
};

export type IWorkspaceMinAggregate = {
  __typename?: 'WorkspaceMinAggregate';
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  userId?: Maybe<Scalars['String']>;
};

export type IWorkspaceMaxAggregate = {
  __typename?: 'WorkspaceMaxAggregate';
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  userId?: Maybe<Scalars['String']>;
};

export type IMutation = {
  __typename?: 'Mutation';
  createLabel: ILabel;
  deleteLabel?: Maybe<ILabel>;
  updateLabel?: Maybe<ILabel>;
  deleteManyLabel: IBatchPayload;
  updateManyLabel: IBatchPayload;
  upsertLabel: ILabel;
  createProject: IProject;
  deleteProject?: Maybe<IProject>;
  updateProject?: Maybe<IProject>;
  deleteManyProject: IBatchPayload;
  updateManyProject: IBatchPayload;
  upsertProject: IProject;
  createTask: ITask;
  deleteTask?: Maybe<ITask>;
  updateTask?: Maybe<ITask>;
  deleteManyTask: IBatchPayload;
  updateManyTask: IBatchPayload;
  upsertTask: ITask;
  createUser: IUser;
  deleteUser?: Maybe<IUser>;
  updateUser?: Maybe<IUser>;
  deleteManyUser: IBatchPayload;
  updateManyUser: IBatchPayload;
  upsertUser: IUser;
  createWorkspace: IWorkspace;
  deleteWorkspace?: Maybe<IWorkspace>;
  updateWorkspace?: Maybe<IWorkspace>;
  deleteManyWorkspace: IBatchPayload;
  updateManyWorkspace: IBatchPayload;
  upsertWorkspace: IWorkspace;
  signup: IAuth;
  login: IAuth;
};


export type IMutationCreateLabelArgs = {
  data: ILabelCreateInput;
};


export type IMutationDeleteLabelArgs = {
  where: ILabelWhereUniqueInput;
};


export type IMutationUpdateLabelArgs = {
  data: ILabelUpdateInput;
  where: ILabelWhereUniqueInput;
};


export type IMutationDeleteManyLabelArgs = {
  where?: Maybe<ILabelWhereInput>;
};


export type IMutationUpdateManyLabelArgs = {
  data: ILabelUpdateManyMutationInput;
  where?: Maybe<ILabelWhereInput>;
};


export type IMutationUpsertLabelArgs = {
  where: ILabelWhereUniqueInput;
  create: ILabelCreateInput;
  update: ILabelUpdateInput;
};


export type IMutationCreateProjectArgs = {
  data: IProjectCreateInput;
};


export type IMutationDeleteProjectArgs = {
  where: IProjectWhereUniqueInput;
};


export type IMutationUpdateProjectArgs = {
  data: IProjectUpdateInput;
  where: IProjectWhereUniqueInput;
};


export type IMutationDeleteManyProjectArgs = {
  where?: Maybe<IProjectWhereInput>;
};


export type IMutationUpdateManyProjectArgs = {
  data: IProjectUpdateManyMutationInput;
  where?: Maybe<IProjectWhereInput>;
};


export type IMutationUpsertProjectArgs = {
  where: IProjectWhereUniqueInput;
  create: IProjectCreateInput;
  update: IProjectUpdateInput;
};


export type IMutationCreateTaskArgs = {
  data: ITaskCreateInput;
};


export type IMutationDeleteTaskArgs = {
  where: ITaskWhereUniqueInput;
};


export type IMutationUpdateTaskArgs = {
  data: ITaskUpdateInput;
  where: ITaskWhereUniqueInput;
};


export type IMutationDeleteManyTaskArgs = {
  where?: Maybe<ITaskWhereInput>;
};


export type IMutationUpdateManyTaskArgs = {
  data: ITaskUpdateManyMutationInput;
  where?: Maybe<ITaskWhereInput>;
};


export type IMutationUpsertTaskArgs = {
  where: ITaskWhereUniqueInput;
  create: ITaskCreateInput;
  update: ITaskUpdateInput;
};


export type IMutationCreateUserArgs = {
  data: IUserCreateInput;
};


export type IMutationDeleteUserArgs = {
  where: IUserWhereUniqueInput;
};


export type IMutationUpdateUserArgs = {
  data: IUserUpdateInput;
  where: IUserWhereUniqueInput;
};


export type IMutationDeleteManyUserArgs = {
  where?: Maybe<IUserWhereInput>;
};


export type IMutationUpdateManyUserArgs = {
  data: IUserUpdateManyMutationInput;
  where?: Maybe<IUserWhereInput>;
};


export type IMutationUpsertUserArgs = {
  where: IUserWhereUniqueInput;
  create: IUserCreateInput;
  update: IUserUpdateInput;
};


export type IMutationCreateWorkspaceArgs = {
  data: IWorkspaceCreateInput;
};


export type IMutationDeleteWorkspaceArgs = {
  where: IWorkspaceWhereUniqueInput;
};


export type IMutationUpdateWorkspaceArgs = {
  data: IWorkspaceUpdateInput;
  where: IWorkspaceWhereUniqueInput;
};


export type IMutationDeleteManyWorkspaceArgs = {
  where?: Maybe<IWorkspaceWhereInput>;
};


export type IMutationUpdateManyWorkspaceArgs = {
  data: IWorkspaceUpdateManyMutationInput;
  where?: Maybe<IWorkspaceWhereInput>;
};


export type IMutationUpsertWorkspaceArgs = {
  where: IWorkspaceWhereUniqueInput;
  create: IWorkspaceCreateInput;
  update: IWorkspaceUpdateInput;
};


export type IMutationSignupArgs = {
  data: IAuthInput;
};


export type IMutationLoginArgs = {
  data: IAuthInput;
};

export type ILabelCreateInput = {
  id?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  tasks?: Maybe<ITaskCreateManyWithoutLabelsInput>;
};

export type ITaskCreateManyWithoutLabelsInput = {
  create?: Maybe<Array<ITaskCreateWithoutLabelsInput>>;
  connect?: Maybe<Array<ITaskWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<ITaskCreateOrConnectWithoutlabelsInput>>;
};

export type ITaskCreateWithoutLabelsInput = {
  id?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  content?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  archiveAt?: Maybe<Scalars['DateTime']>;
  user: IUserCreateOneWithoutTasksInput;
};

export type IUserCreateOneWithoutTasksInput = {
  create?: Maybe<IUserCreateWithoutTasksInput>;
  connect?: Maybe<IUserWhereUniqueInput>;
  connectOrCreate?: Maybe<IUserCreateOrConnectWithouttasksInput>;
};

export type IUserCreateWithoutTasksInput = {
  id?: Maybe<Scalars['String']>;
  email: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  password: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  role?: Maybe<IRole>;
  workspaces?: Maybe<IWorkspaceCreateManyWithoutUserInput>;
  projects?: Maybe<IProjectCreateManyWithoutAssignUsersInput>;
  projectOwns?: Maybe<IProjectCreateManyWithoutProjectOwnerInput>;
};

export type IWorkspaceCreateManyWithoutUserInput = {
  create?: Maybe<Array<IWorkspaceCreateWithoutUserInput>>;
  connect?: Maybe<Array<IWorkspaceWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<IWorkspaceCreateOrConnectWithoutuserInput>>;
};

export type IWorkspaceCreateWithoutUserInput = {
  id?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  slug: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
};

export type IWorkspaceCreateOrConnectWithoutuserInput = {
  where: IWorkspaceWhereUniqueInput;
  create: IWorkspaceCreateWithoutUserInput;
};

export type IProjectCreateManyWithoutAssignUsersInput = {
  create?: Maybe<Array<IProjectCreateWithoutAssignUsersInput>>;
  connect?: Maybe<Array<IProjectWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<IProjectCreateOrConnectWithoutassignUsersInput>>;
};

export type IProjectCreateWithoutAssignUsersInput = {
  id?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  projectOwner: IUserCreateOneWithoutProjectOwnsInput;
};

export type IUserCreateOneWithoutProjectOwnsInput = {
  create?: Maybe<IUserCreateWithoutProjectOwnsInput>;
  connect?: Maybe<IUserWhereUniqueInput>;
  connectOrCreate?: Maybe<IUserCreateOrConnectWithoutprojectOwnsInput>;
};

export type IUserCreateWithoutProjectOwnsInput = {
  id?: Maybe<Scalars['String']>;
  email: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  password: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  role?: Maybe<IRole>;
  tasks?: Maybe<ITaskCreateManyWithoutUserInput>;
  workspaces?: Maybe<IWorkspaceCreateManyWithoutUserInput>;
  projects?: Maybe<IProjectCreateManyWithoutAssignUsersInput>;
};

export type ITaskCreateManyWithoutUserInput = {
  create?: Maybe<Array<ITaskCreateWithoutUserInput>>;
  connect?: Maybe<Array<ITaskWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<ITaskCreateOrConnectWithoutuserInput>>;
};

export type ITaskCreateWithoutUserInput = {
  id?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  content?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  archiveAt?: Maybe<Scalars['DateTime']>;
  labels?: Maybe<ILabelCreateManyWithoutTasksInput>;
};

export type ILabelCreateManyWithoutTasksInput = {
  create?: Maybe<Array<ILabelCreateWithoutTasksInput>>;
  connect?: Maybe<Array<ILabelWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<ILabelCreateOrConnectWithouttasksInput>>;
};

export type ILabelCreateWithoutTasksInput = {
  id?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
};

export type ILabelCreateOrConnectWithouttasksInput = {
  where: ILabelWhereUniqueInput;
  create: ILabelCreateWithoutTasksInput;
};

export type ITaskCreateOrConnectWithoutuserInput = {
  where: ITaskWhereUniqueInput;
  create: ITaskCreateWithoutUserInput;
};

export type IUserCreateOrConnectWithoutprojectOwnsInput = {
  where: IUserWhereUniqueInput;
  create: IUserCreateWithoutProjectOwnsInput;
};

export type IProjectCreateOrConnectWithoutassignUsersInput = {
  where: IProjectWhereUniqueInput;
  create: IProjectCreateWithoutAssignUsersInput;
};

export type IProjectCreateManyWithoutProjectOwnerInput = {
  create?: Maybe<Array<IProjectCreateWithoutProjectOwnerInput>>;
  connect?: Maybe<Array<IProjectWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<IProjectCreateOrConnectWithoutprojectOwnerInput>>;
};

export type IProjectCreateWithoutProjectOwnerInput = {
  id?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  assignUsers?: Maybe<IUserCreateManyWithoutProjectsInput>;
};

export type IUserCreateManyWithoutProjectsInput = {
  create?: Maybe<Array<IUserCreateWithoutProjectsInput>>;
  connect?: Maybe<Array<IUserWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<IUserCreateOrConnectWithoutprojectsInput>>;
};

export type IUserCreateWithoutProjectsInput = {
  id?: Maybe<Scalars['String']>;
  email: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  password: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  role?: Maybe<IRole>;
  tasks?: Maybe<ITaskCreateManyWithoutUserInput>;
  workspaces?: Maybe<IWorkspaceCreateManyWithoutUserInput>;
  projectOwns?: Maybe<IProjectCreateManyWithoutProjectOwnerInput>;
};

export type IUserCreateOrConnectWithoutprojectsInput = {
  where: IUserWhereUniqueInput;
  create: IUserCreateWithoutProjectsInput;
};

export type IProjectCreateOrConnectWithoutprojectOwnerInput = {
  where: IProjectWhereUniqueInput;
  create: IProjectCreateWithoutProjectOwnerInput;
};

export type IUserCreateOrConnectWithouttasksInput = {
  where: IUserWhereUniqueInput;
  create: IUserCreateWithoutTasksInput;
};

export type ITaskCreateOrConnectWithoutlabelsInput = {
  where: ITaskWhereUniqueInput;
  create: ITaskCreateWithoutLabelsInput;
};

export type ILabelUpdateInput = {
  id?: Maybe<IStringFieldUpdateOperationsInput>;
  name?: Maybe<IStringFieldUpdateOperationsInput>;
  createdAt?: Maybe<IDateTimeFieldUpdateOperationsInput>;
  tasks?: Maybe<ITaskUpdateManyWithoutLabelsInput>;
};

export type IStringFieldUpdateOperationsInput = {
  set?: Maybe<Scalars['String']>;
};

export type IDateTimeFieldUpdateOperationsInput = {
  set?: Maybe<Scalars['DateTime']>;
};

export type ITaskUpdateManyWithoutLabelsInput = {
  create?: Maybe<Array<ITaskCreateWithoutLabelsInput>>;
  connect?: Maybe<Array<ITaskWhereUniqueInput>>;
  set?: Maybe<Array<ITaskWhereUniqueInput>>;
  disconnect?: Maybe<Array<ITaskWhereUniqueInput>>;
  delete?: Maybe<Array<ITaskWhereUniqueInput>>;
  update?: Maybe<Array<ITaskUpdateWithWhereUniqueWithoutLabelsInput>>;
  updateMany?: Maybe<Array<ITaskUpdateManyWithWhereWithoutLabelsInput>>;
  deleteMany?: Maybe<Array<ITaskScalarWhereInput>>;
  upsert?: Maybe<Array<ITaskUpsertWithWhereUniqueWithoutLabelsInput>>;
  connectOrCreate?: Maybe<Array<ITaskCreateOrConnectWithoutlabelsInput>>;
};

export type ITaskUpdateWithWhereUniqueWithoutLabelsInput = {
  where: ITaskWhereUniqueInput;
  data: ITaskUpdateWithoutLabelsInput;
};

export type ITaskUpdateWithoutLabelsInput = {
  id?: Maybe<IStringFieldUpdateOperationsInput>;
  name?: Maybe<IStringFieldUpdateOperationsInput>;
  content?: Maybe<INullableStringFieldUpdateOperationsInput>;
  createdAt?: Maybe<IDateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<INullableDateTimeFieldUpdateOperationsInput>;
  deletedAt?: Maybe<INullableDateTimeFieldUpdateOperationsInput>;
  archiveAt?: Maybe<INullableDateTimeFieldUpdateOperationsInput>;
  user?: Maybe<IUserUpdateOneRequiredWithoutTasksInput>;
};

export type INullableStringFieldUpdateOperationsInput = {
  set?: Maybe<Scalars['String']>;
};

export type INullableDateTimeFieldUpdateOperationsInput = {
  set?: Maybe<Scalars['DateTime']>;
};

export type IUserUpdateOneRequiredWithoutTasksInput = {
  create?: Maybe<IUserCreateWithoutTasksInput>;
  connect?: Maybe<IUserWhereUniqueInput>;
  update?: Maybe<IUserUpdateWithoutTasksInput>;
  upsert?: Maybe<IUserUpsertWithoutTasksInput>;
  connectOrCreate?: Maybe<IUserCreateOrConnectWithouttasksInput>;
};

export type IUserUpdateWithoutTasksInput = {
  id?: Maybe<IStringFieldUpdateOperationsInput>;
  email?: Maybe<IStringFieldUpdateOperationsInput>;
  name?: Maybe<INullableStringFieldUpdateOperationsInput>;
  password?: Maybe<IStringFieldUpdateOperationsInput>;
  createdAt?: Maybe<IDateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<INullableDateTimeFieldUpdateOperationsInput>;
  deletedAt?: Maybe<INullableDateTimeFieldUpdateOperationsInput>;
  role?: Maybe<IEnumRoleFieldUpdateOperationsInput>;
  workspaces?: Maybe<IWorkspaceUpdateManyWithoutUserInput>;
  projects?: Maybe<IProjectUpdateManyWithoutAssignUsersInput>;
  projectOwns?: Maybe<IProjectUpdateManyWithoutProjectOwnerInput>;
};

export type IEnumRoleFieldUpdateOperationsInput = {
  set?: Maybe<IRole>;
};

export type IWorkspaceUpdateManyWithoutUserInput = {
  create?: Maybe<Array<IWorkspaceCreateWithoutUserInput>>;
  connect?: Maybe<Array<IWorkspaceWhereUniqueInput>>;
  set?: Maybe<Array<IWorkspaceWhereUniqueInput>>;
  disconnect?: Maybe<Array<IWorkspaceWhereUniqueInput>>;
  delete?: Maybe<Array<IWorkspaceWhereUniqueInput>>;
  update?: Maybe<Array<IWorkspaceUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: Maybe<Array<IWorkspaceUpdateManyWithWhereWithoutUserInput>>;
  deleteMany?: Maybe<Array<IWorkspaceScalarWhereInput>>;
  upsert?: Maybe<Array<IWorkspaceUpsertWithWhereUniqueWithoutUserInput>>;
  connectOrCreate?: Maybe<Array<IWorkspaceCreateOrConnectWithoutuserInput>>;
};

export type IWorkspaceUpdateWithWhereUniqueWithoutUserInput = {
  where: IWorkspaceWhereUniqueInput;
  data: IWorkspaceUpdateWithoutUserInput;
};

export type IWorkspaceUpdateWithoutUserInput = {
  id?: Maybe<IStringFieldUpdateOperationsInput>;
  name?: Maybe<IStringFieldUpdateOperationsInput>;
  slug?: Maybe<IStringFieldUpdateOperationsInput>;
  description?: Maybe<INullableStringFieldUpdateOperationsInput>;
  image?: Maybe<INullableStringFieldUpdateOperationsInput>;
  createdAt?: Maybe<IDateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<INullableDateTimeFieldUpdateOperationsInput>;
  deletedAt?: Maybe<INullableDateTimeFieldUpdateOperationsInput>;
};

export type IWorkspaceUpdateManyWithWhereWithoutUserInput = {
  where: IWorkspaceScalarWhereInput;
  data: IWorkspaceUpdateManyMutationInput;
};

export type IWorkspaceScalarWhereInput = {
  AND?: Maybe<Array<IWorkspaceScalarWhereInput>>;
  OR?: Maybe<Array<IWorkspaceScalarWhereInput>>;
  NOT?: Maybe<Array<IWorkspaceScalarWhereInput>>;
  id?: Maybe<IStringFilter>;
  name?: Maybe<IStringFilter>;
  slug?: Maybe<IStringFilter>;
  description?: Maybe<IStringNullableFilter>;
  image?: Maybe<IStringNullableFilter>;
  createdAt?: Maybe<IDateTimeFilter>;
  updatedAt?: Maybe<IDateTimeNullableFilter>;
  deletedAt?: Maybe<IDateTimeNullableFilter>;
  userId?: Maybe<IStringFilter>;
};

export type IWorkspaceUpdateManyMutationInput = {
  id?: Maybe<IStringFieldUpdateOperationsInput>;
  name?: Maybe<IStringFieldUpdateOperationsInput>;
  slug?: Maybe<IStringFieldUpdateOperationsInput>;
  description?: Maybe<INullableStringFieldUpdateOperationsInput>;
  image?: Maybe<INullableStringFieldUpdateOperationsInput>;
  createdAt?: Maybe<IDateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<INullableDateTimeFieldUpdateOperationsInput>;
  deletedAt?: Maybe<INullableDateTimeFieldUpdateOperationsInput>;
};

export type IWorkspaceUpsertWithWhereUniqueWithoutUserInput = {
  where: IWorkspaceWhereUniqueInput;
  update: IWorkspaceUpdateWithoutUserInput;
  create: IWorkspaceCreateWithoutUserInput;
};

export type IProjectUpdateManyWithoutAssignUsersInput = {
  create?: Maybe<Array<IProjectCreateWithoutAssignUsersInput>>;
  connect?: Maybe<Array<IProjectWhereUniqueInput>>;
  set?: Maybe<Array<IProjectWhereUniqueInput>>;
  disconnect?: Maybe<Array<IProjectWhereUniqueInput>>;
  delete?: Maybe<Array<IProjectWhereUniqueInput>>;
  update?: Maybe<Array<IProjectUpdateWithWhereUniqueWithoutAssignUsersInput>>;
  updateMany?: Maybe<Array<IProjectUpdateManyWithWhereWithoutAssignUsersInput>>;
  deleteMany?: Maybe<Array<IProjectScalarWhereInput>>;
  upsert?: Maybe<Array<IProjectUpsertWithWhereUniqueWithoutAssignUsersInput>>;
  connectOrCreate?: Maybe<Array<IProjectCreateOrConnectWithoutassignUsersInput>>;
};

export type IProjectUpdateWithWhereUniqueWithoutAssignUsersInput = {
  where: IProjectWhereUniqueInput;
  data: IProjectUpdateWithoutAssignUsersInput;
};

export type IProjectUpdateWithoutAssignUsersInput = {
  id?: Maybe<IStringFieldUpdateOperationsInput>;
  name?: Maybe<IStringFieldUpdateOperationsInput>;
  createdAt?: Maybe<IDateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<INullableDateTimeFieldUpdateOperationsInput>;
  deletedAt?: Maybe<INullableDateTimeFieldUpdateOperationsInput>;
  projectOwner?: Maybe<IUserUpdateOneRequiredWithoutProjectOwnsInput>;
};

export type IUserUpdateOneRequiredWithoutProjectOwnsInput = {
  create?: Maybe<IUserCreateWithoutProjectOwnsInput>;
  connect?: Maybe<IUserWhereUniqueInput>;
  update?: Maybe<IUserUpdateWithoutProjectOwnsInput>;
  upsert?: Maybe<IUserUpsertWithoutProjectOwnsInput>;
  connectOrCreate?: Maybe<IUserCreateOrConnectWithoutprojectOwnsInput>;
};

export type IUserUpdateWithoutProjectOwnsInput = {
  id?: Maybe<IStringFieldUpdateOperationsInput>;
  email?: Maybe<IStringFieldUpdateOperationsInput>;
  name?: Maybe<INullableStringFieldUpdateOperationsInput>;
  password?: Maybe<IStringFieldUpdateOperationsInput>;
  createdAt?: Maybe<IDateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<INullableDateTimeFieldUpdateOperationsInput>;
  deletedAt?: Maybe<INullableDateTimeFieldUpdateOperationsInput>;
  role?: Maybe<IEnumRoleFieldUpdateOperationsInput>;
  tasks?: Maybe<ITaskUpdateManyWithoutUserInput>;
  workspaces?: Maybe<IWorkspaceUpdateManyWithoutUserInput>;
  projects?: Maybe<IProjectUpdateManyWithoutAssignUsersInput>;
};

export type ITaskUpdateManyWithoutUserInput = {
  create?: Maybe<Array<ITaskCreateWithoutUserInput>>;
  connect?: Maybe<Array<ITaskWhereUniqueInput>>;
  set?: Maybe<Array<ITaskWhereUniqueInput>>;
  disconnect?: Maybe<Array<ITaskWhereUniqueInput>>;
  delete?: Maybe<Array<ITaskWhereUniqueInput>>;
  update?: Maybe<Array<ITaskUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: Maybe<Array<ITaskUpdateManyWithWhereWithoutUserInput>>;
  deleteMany?: Maybe<Array<ITaskScalarWhereInput>>;
  upsert?: Maybe<Array<ITaskUpsertWithWhereUniqueWithoutUserInput>>;
  connectOrCreate?: Maybe<Array<ITaskCreateOrConnectWithoutuserInput>>;
};

export type ITaskUpdateWithWhereUniqueWithoutUserInput = {
  where: ITaskWhereUniqueInput;
  data: ITaskUpdateWithoutUserInput;
};

export type ITaskUpdateWithoutUserInput = {
  id?: Maybe<IStringFieldUpdateOperationsInput>;
  name?: Maybe<IStringFieldUpdateOperationsInput>;
  content?: Maybe<INullableStringFieldUpdateOperationsInput>;
  createdAt?: Maybe<IDateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<INullableDateTimeFieldUpdateOperationsInput>;
  deletedAt?: Maybe<INullableDateTimeFieldUpdateOperationsInput>;
  archiveAt?: Maybe<INullableDateTimeFieldUpdateOperationsInput>;
  labels?: Maybe<ILabelUpdateManyWithoutTasksInput>;
};

export type ILabelUpdateManyWithoutTasksInput = {
  create?: Maybe<Array<ILabelCreateWithoutTasksInput>>;
  connect?: Maybe<Array<ILabelWhereUniqueInput>>;
  set?: Maybe<Array<ILabelWhereUniqueInput>>;
  disconnect?: Maybe<Array<ILabelWhereUniqueInput>>;
  delete?: Maybe<Array<ILabelWhereUniqueInput>>;
  update?: Maybe<Array<ILabelUpdateWithWhereUniqueWithoutTasksInput>>;
  updateMany?: Maybe<Array<ILabelUpdateManyWithWhereWithoutTasksInput>>;
  deleteMany?: Maybe<Array<ILabelScalarWhereInput>>;
  upsert?: Maybe<Array<ILabelUpsertWithWhereUniqueWithoutTasksInput>>;
  connectOrCreate?: Maybe<Array<ILabelCreateOrConnectWithouttasksInput>>;
};

export type ILabelUpdateWithWhereUniqueWithoutTasksInput = {
  where: ILabelWhereUniqueInput;
  data: ILabelUpdateWithoutTasksInput;
};

export type ILabelUpdateWithoutTasksInput = {
  id?: Maybe<IStringFieldUpdateOperationsInput>;
  name?: Maybe<IStringFieldUpdateOperationsInput>;
  createdAt?: Maybe<IDateTimeFieldUpdateOperationsInput>;
};

export type ILabelUpdateManyWithWhereWithoutTasksInput = {
  where: ILabelScalarWhereInput;
  data: ILabelUpdateManyMutationInput;
};

export type ILabelScalarWhereInput = {
  AND?: Maybe<Array<ILabelScalarWhereInput>>;
  OR?: Maybe<Array<ILabelScalarWhereInput>>;
  NOT?: Maybe<Array<ILabelScalarWhereInput>>;
  id?: Maybe<IStringFilter>;
  name?: Maybe<IStringFilter>;
  createdAt?: Maybe<IDateTimeFilter>;
};

export type ILabelUpdateManyMutationInput = {
  id?: Maybe<IStringFieldUpdateOperationsInput>;
  name?: Maybe<IStringFieldUpdateOperationsInput>;
  createdAt?: Maybe<IDateTimeFieldUpdateOperationsInput>;
};

export type ILabelUpsertWithWhereUniqueWithoutTasksInput = {
  where: ILabelWhereUniqueInput;
  update: ILabelUpdateWithoutTasksInput;
  create: ILabelCreateWithoutTasksInput;
};

export type ITaskUpdateManyWithWhereWithoutUserInput = {
  where: ITaskScalarWhereInput;
  data: ITaskUpdateManyMutationInput;
};

export type ITaskScalarWhereInput = {
  AND?: Maybe<Array<ITaskScalarWhereInput>>;
  OR?: Maybe<Array<ITaskScalarWhereInput>>;
  NOT?: Maybe<Array<ITaskScalarWhereInput>>;
  id?: Maybe<IStringFilter>;
  name?: Maybe<IStringFilter>;
  content?: Maybe<IStringNullableFilter>;
  createdAt?: Maybe<IDateTimeFilter>;
  updatedAt?: Maybe<IDateTimeNullableFilter>;
  deletedAt?: Maybe<IDateTimeNullableFilter>;
  archiveAt?: Maybe<IDateTimeNullableFilter>;
  userId?: Maybe<IStringFilter>;
};

export type ITaskUpdateManyMutationInput = {
  id?: Maybe<IStringFieldUpdateOperationsInput>;
  name?: Maybe<IStringFieldUpdateOperationsInput>;
  content?: Maybe<INullableStringFieldUpdateOperationsInput>;
  createdAt?: Maybe<IDateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<INullableDateTimeFieldUpdateOperationsInput>;
  deletedAt?: Maybe<INullableDateTimeFieldUpdateOperationsInput>;
  archiveAt?: Maybe<INullableDateTimeFieldUpdateOperationsInput>;
};

export type ITaskUpsertWithWhereUniqueWithoutUserInput = {
  where: ITaskWhereUniqueInput;
  update: ITaskUpdateWithoutUserInput;
  create: ITaskCreateWithoutUserInput;
};

export type IUserUpsertWithoutProjectOwnsInput = {
  update: IUserUpdateWithoutProjectOwnsInput;
  create: IUserCreateWithoutProjectOwnsInput;
};

export type IProjectUpdateManyWithWhereWithoutAssignUsersInput = {
  where: IProjectScalarWhereInput;
  data: IProjectUpdateManyMutationInput;
};

export type IProjectScalarWhereInput = {
  AND?: Maybe<Array<IProjectScalarWhereInput>>;
  OR?: Maybe<Array<IProjectScalarWhereInput>>;
  NOT?: Maybe<Array<IProjectScalarWhereInput>>;
  id?: Maybe<IStringFilter>;
  name?: Maybe<IStringFilter>;
  createdAt?: Maybe<IDateTimeFilter>;
  updatedAt?: Maybe<IDateTimeNullableFilter>;
  deletedAt?: Maybe<IDateTimeNullableFilter>;
  userId?: Maybe<IStringFilter>;
};

export type IProjectUpdateManyMutationInput = {
  id?: Maybe<IStringFieldUpdateOperationsInput>;
  name?: Maybe<IStringFieldUpdateOperationsInput>;
  createdAt?: Maybe<IDateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<INullableDateTimeFieldUpdateOperationsInput>;
  deletedAt?: Maybe<INullableDateTimeFieldUpdateOperationsInput>;
};

export type IProjectUpsertWithWhereUniqueWithoutAssignUsersInput = {
  where: IProjectWhereUniqueInput;
  update: IProjectUpdateWithoutAssignUsersInput;
  create: IProjectCreateWithoutAssignUsersInput;
};

export type IProjectUpdateManyWithoutProjectOwnerInput = {
  create?: Maybe<Array<IProjectCreateWithoutProjectOwnerInput>>;
  connect?: Maybe<Array<IProjectWhereUniqueInput>>;
  set?: Maybe<Array<IProjectWhereUniqueInput>>;
  disconnect?: Maybe<Array<IProjectWhereUniqueInput>>;
  delete?: Maybe<Array<IProjectWhereUniqueInput>>;
  update?: Maybe<Array<IProjectUpdateWithWhereUniqueWithoutProjectOwnerInput>>;
  updateMany?: Maybe<Array<IProjectUpdateManyWithWhereWithoutProjectOwnerInput>>;
  deleteMany?: Maybe<Array<IProjectScalarWhereInput>>;
  upsert?: Maybe<Array<IProjectUpsertWithWhereUniqueWithoutProjectOwnerInput>>;
  connectOrCreate?: Maybe<Array<IProjectCreateOrConnectWithoutprojectOwnerInput>>;
};

export type IProjectUpdateWithWhereUniqueWithoutProjectOwnerInput = {
  where: IProjectWhereUniqueInput;
  data: IProjectUpdateWithoutProjectOwnerInput;
};

export type IProjectUpdateWithoutProjectOwnerInput = {
  id?: Maybe<IStringFieldUpdateOperationsInput>;
  name?: Maybe<IStringFieldUpdateOperationsInput>;
  createdAt?: Maybe<IDateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<INullableDateTimeFieldUpdateOperationsInput>;
  deletedAt?: Maybe<INullableDateTimeFieldUpdateOperationsInput>;
  assignUsers?: Maybe<IUserUpdateManyWithoutProjectsInput>;
};

export type IUserUpdateManyWithoutProjectsInput = {
  create?: Maybe<Array<IUserCreateWithoutProjectsInput>>;
  connect?: Maybe<Array<IUserWhereUniqueInput>>;
  set?: Maybe<Array<IUserWhereUniqueInput>>;
  disconnect?: Maybe<Array<IUserWhereUniqueInput>>;
  delete?: Maybe<Array<IUserWhereUniqueInput>>;
  update?: Maybe<Array<IUserUpdateWithWhereUniqueWithoutProjectsInput>>;
  updateMany?: Maybe<Array<IUserUpdateManyWithWhereWithoutProjectsInput>>;
  deleteMany?: Maybe<Array<IUserScalarWhereInput>>;
  upsert?: Maybe<Array<IUserUpsertWithWhereUniqueWithoutProjectsInput>>;
  connectOrCreate?: Maybe<Array<IUserCreateOrConnectWithoutprojectsInput>>;
};

export type IUserUpdateWithWhereUniqueWithoutProjectsInput = {
  where: IUserWhereUniqueInput;
  data: IUserUpdateWithoutProjectsInput;
};

export type IUserUpdateWithoutProjectsInput = {
  id?: Maybe<IStringFieldUpdateOperationsInput>;
  email?: Maybe<IStringFieldUpdateOperationsInput>;
  name?: Maybe<INullableStringFieldUpdateOperationsInput>;
  password?: Maybe<IStringFieldUpdateOperationsInput>;
  createdAt?: Maybe<IDateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<INullableDateTimeFieldUpdateOperationsInput>;
  deletedAt?: Maybe<INullableDateTimeFieldUpdateOperationsInput>;
  role?: Maybe<IEnumRoleFieldUpdateOperationsInput>;
  tasks?: Maybe<ITaskUpdateManyWithoutUserInput>;
  workspaces?: Maybe<IWorkspaceUpdateManyWithoutUserInput>;
  projectOwns?: Maybe<IProjectUpdateManyWithoutProjectOwnerInput>;
};

export type IUserUpdateManyWithWhereWithoutProjectsInput = {
  where: IUserScalarWhereInput;
  data: IUserUpdateManyMutationInput;
};

export type IUserScalarWhereInput = {
  AND?: Maybe<Array<IUserScalarWhereInput>>;
  OR?: Maybe<Array<IUserScalarWhereInput>>;
  NOT?: Maybe<Array<IUserScalarWhereInput>>;
  id?: Maybe<IStringFilter>;
  email?: Maybe<IStringFilter>;
  name?: Maybe<IStringNullableFilter>;
  password?: Maybe<IStringFilter>;
  createdAt?: Maybe<IDateTimeFilter>;
  updatedAt?: Maybe<IDateTimeNullableFilter>;
  deletedAt?: Maybe<IDateTimeNullableFilter>;
  role?: Maybe<IEnumRoleFilter>;
};

export type IUserUpdateManyMutationInput = {
  id?: Maybe<IStringFieldUpdateOperationsInput>;
  email?: Maybe<IStringFieldUpdateOperationsInput>;
  name?: Maybe<INullableStringFieldUpdateOperationsInput>;
  password?: Maybe<IStringFieldUpdateOperationsInput>;
  createdAt?: Maybe<IDateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<INullableDateTimeFieldUpdateOperationsInput>;
  deletedAt?: Maybe<INullableDateTimeFieldUpdateOperationsInput>;
  role?: Maybe<IEnumRoleFieldUpdateOperationsInput>;
};

export type IUserUpsertWithWhereUniqueWithoutProjectsInput = {
  where: IUserWhereUniqueInput;
  update: IUserUpdateWithoutProjectsInput;
  create: IUserCreateWithoutProjectsInput;
};

export type IProjectUpdateManyWithWhereWithoutProjectOwnerInput = {
  where: IProjectScalarWhereInput;
  data: IProjectUpdateManyMutationInput;
};

export type IProjectUpsertWithWhereUniqueWithoutProjectOwnerInput = {
  where: IProjectWhereUniqueInput;
  update: IProjectUpdateWithoutProjectOwnerInput;
  create: IProjectCreateWithoutProjectOwnerInput;
};

export type IUserUpsertWithoutTasksInput = {
  update: IUserUpdateWithoutTasksInput;
  create: IUserCreateWithoutTasksInput;
};

export type ITaskUpdateManyWithWhereWithoutLabelsInput = {
  where: ITaskScalarWhereInput;
  data: ITaskUpdateManyMutationInput;
};

export type ITaskUpsertWithWhereUniqueWithoutLabelsInput = {
  where: ITaskWhereUniqueInput;
  update: ITaskUpdateWithoutLabelsInput;
  create: ITaskCreateWithoutLabelsInput;
};

export type IBatchPayload = {
  __typename?: 'BatchPayload';
  count: Scalars['Int'];
};

export type IProjectCreateInput = {
  id?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  projectOwner: IUserCreateOneWithoutProjectOwnsInput;
  assignUsers?: Maybe<IUserCreateManyWithoutProjectsInput>;
};

export type IProjectUpdateInput = {
  id?: Maybe<IStringFieldUpdateOperationsInput>;
  name?: Maybe<IStringFieldUpdateOperationsInput>;
  createdAt?: Maybe<IDateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<INullableDateTimeFieldUpdateOperationsInput>;
  deletedAt?: Maybe<INullableDateTimeFieldUpdateOperationsInput>;
  projectOwner?: Maybe<IUserUpdateOneRequiredWithoutProjectOwnsInput>;
  assignUsers?: Maybe<IUserUpdateManyWithoutProjectsInput>;
};

export type ITaskCreateInput = {
  id?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  content?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  archiveAt?: Maybe<Scalars['DateTime']>;
  user: IUserCreateOneWithoutTasksInput;
  labels?: Maybe<ILabelCreateManyWithoutTasksInput>;
};

export type ITaskUpdateInput = {
  id?: Maybe<IStringFieldUpdateOperationsInput>;
  name?: Maybe<IStringFieldUpdateOperationsInput>;
  content?: Maybe<INullableStringFieldUpdateOperationsInput>;
  createdAt?: Maybe<IDateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<INullableDateTimeFieldUpdateOperationsInput>;
  deletedAt?: Maybe<INullableDateTimeFieldUpdateOperationsInput>;
  archiveAt?: Maybe<INullableDateTimeFieldUpdateOperationsInput>;
  user?: Maybe<IUserUpdateOneRequiredWithoutTasksInput>;
  labels?: Maybe<ILabelUpdateManyWithoutTasksInput>;
};

export type IUserCreateInput = {
  id?: Maybe<Scalars['String']>;
  email: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  password: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  role?: Maybe<IRole>;
  tasks?: Maybe<ITaskCreateManyWithoutUserInput>;
  workspaces?: Maybe<IWorkspaceCreateManyWithoutUserInput>;
  projects?: Maybe<IProjectCreateManyWithoutAssignUsersInput>;
  projectOwns?: Maybe<IProjectCreateManyWithoutProjectOwnerInput>;
};

export type IUserUpdateInput = {
  id?: Maybe<IStringFieldUpdateOperationsInput>;
  email?: Maybe<IStringFieldUpdateOperationsInput>;
  name?: Maybe<INullableStringFieldUpdateOperationsInput>;
  password?: Maybe<IStringFieldUpdateOperationsInput>;
  createdAt?: Maybe<IDateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<INullableDateTimeFieldUpdateOperationsInput>;
  deletedAt?: Maybe<INullableDateTimeFieldUpdateOperationsInput>;
  role?: Maybe<IEnumRoleFieldUpdateOperationsInput>;
  tasks?: Maybe<ITaskUpdateManyWithoutUserInput>;
  workspaces?: Maybe<IWorkspaceUpdateManyWithoutUserInput>;
  projects?: Maybe<IProjectUpdateManyWithoutAssignUsersInput>;
  projectOwns?: Maybe<IProjectUpdateManyWithoutProjectOwnerInput>;
};

export type IWorkspaceCreateInput = {
  id?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  slug: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  user: IUserCreateOneWithoutWorkspacesInput;
};

export type IUserCreateOneWithoutWorkspacesInput = {
  create?: Maybe<IUserCreateWithoutWorkspacesInput>;
  connect?: Maybe<IUserWhereUniqueInput>;
  connectOrCreate?: Maybe<IUserCreateOrConnectWithoutworkspacesInput>;
};

export type IUserCreateWithoutWorkspacesInput = {
  id?: Maybe<Scalars['String']>;
  email: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  password: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  role?: Maybe<IRole>;
  tasks?: Maybe<ITaskCreateManyWithoutUserInput>;
  projects?: Maybe<IProjectCreateManyWithoutAssignUsersInput>;
  projectOwns?: Maybe<IProjectCreateManyWithoutProjectOwnerInput>;
};

export type IUserCreateOrConnectWithoutworkspacesInput = {
  where: IUserWhereUniqueInput;
  create: IUserCreateWithoutWorkspacesInput;
};

export type IWorkspaceUpdateInput = {
  id?: Maybe<IStringFieldUpdateOperationsInput>;
  name?: Maybe<IStringFieldUpdateOperationsInput>;
  slug?: Maybe<IStringFieldUpdateOperationsInput>;
  description?: Maybe<INullableStringFieldUpdateOperationsInput>;
  image?: Maybe<INullableStringFieldUpdateOperationsInput>;
  createdAt?: Maybe<IDateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<INullableDateTimeFieldUpdateOperationsInput>;
  deletedAt?: Maybe<INullableDateTimeFieldUpdateOperationsInput>;
  user?: Maybe<IUserUpdateOneRequiredWithoutWorkspacesInput>;
};

export type IUserUpdateOneRequiredWithoutWorkspacesInput = {
  create?: Maybe<IUserCreateWithoutWorkspacesInput>;
  connect?: Maybe<IUserWhereUniqueInput>;
  update?: Maybe<IUserUpdateWithoutWorkspacesInput>;
  upsert?: Maybe<IUserUpsertWithoutWorkspacesInput>;
  connectOrCreate?: Maybe<IUserCreateOrConnectWithoutworkspacesInput>;
};

export type IUserUpdateWithoutWorkspacesInput = {
  id?: Maybe<IStringFieldUpdateOperationsInput>;
  email?: Maybe<IStringFieldUpdateOperationsInput>;
  name?: Maybe<INullableStringFieldUpdateOperationsInput>;
  password?: Maybe<IStringFieldUpdateOperationsInput>;
  createdAt?: Maybe<IDateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<INullableDateTimeFieldUpdateOperationsInput>;
  deletedAt?: Maybe<INullableDateTimeFieldUpdateOperationsInput>;
  role?: Maybe<IEnumRoleFieldUpdateOperationsInput>;
  tasks?: Maybe<ITaskUpdateManyWithoutUserInput>;
  projects?: Maybe<IProjectUpdateManyWithoutAssignUsersInput>;
  projectOwns?: Maybe<IProjectUpdateManyWithoutProjectOwnerInput>;
};

export type IUserUpsertWithoutWorkspacesInput = {
  update: IUserUpdateWithoutWorkspacesInput;
  create: IUserCreateWithoutWorkspacesInput;
};

/** Auth payload */
export type IAuth = {
  __typename?: 'Auth';
  token: Scalars['String'];
  user: IUser;
};

/** SignUp input data */
export type IAuthInput = {
  email: Scalars['String'];
  password: Scalars['String'];
  name?: Maybe<Scalars['String']>;
};

export type ICreateTaskMutationVariables = Exact<{
  createTask: ITaskCreateInput;
}>;


export type ICreateTaskMutation = (
  { __typename?: 'Mutation' }
  & { createTask: (
    { __typename?: 'Task' }
    & Pick<ITask, 'id' | 'name' | 'content' | 'createdAt' | 'updatedAt' | 'userId'>
    & { labels?: Maybe<Array<(
      { __typename?: 'Label' }
      & Pick<ILabel, 'id' | 'name' | 'createdAt'>
    )>>, user: (
      { __typename?: 'User' }
      & Pick<IUser, 'id' | 'email' | 'name' | 'password' | 'createdAt' | 'role'>
    ) }
  ) }
);

export type IDeleteTaskMutationVariables = Exact<{
  taskWhereInput: ITaskWhereUniqueInput;
}>;


export type IDeleteTaskMutation = (
  { __typename?: 'Mutation' }
  & { deleteTask?: Maybe<(
    { __typename?: 'Task' }
    & Pick<ITask, 'id'>
  )> }
);

export type INewTaskTypeNameFragment = (
  { __typename?: 'Task' }
  & Pick<ITask, 'id'>
);

export type ILabelFeedQueryVariables = Exact<{ [key: string]: never; }>;


export type ILabelFeedQuery = (
  { __typename?: 'Query' }
  & { labels: Array<(
    { __typename?: 'Label' }
    & Pick<ILabel, 'id' | 'name' | 'createdAt'>
  )> }
);

export type ITaskDetailQueryVariables = Exact<{
  taskWhereInput: ITaskWhereUniqueInput;
}>;


export type ITaskDetailQuery = (
  { __typename?: 'Query' }
  & { task?: Maybe<(
    { __typename?: 'Task' }
    & Pick<ITask, 'id' | 'name' | 'content' | 'userId' | 'createdAt'>
    & { labels?: Maybe<Array<(
      { __typename?: 'Label' }
      & Pick<ILabel, 'id'>
    )>>, user: (
      { __typename?: 'User' }
      & Pick<IUser, 'name'>
    ) }
  )> }
);

export type ITaskFeedQueryVariables = Exact<{
  taskOrderInput?: Maybe<Array<ITaskOrderByInput> | ITaskOrderByInput>;
  taskWhereInput?: Maybe<ITaskWhereInput>;
}>;


export type ITaskFeedQuery = (
  { __typename?: 'Query' }
  & { tasks: Array<(
    { __typename?: 'Task' }
    & Pick<ITask, 'id' | 'name' | 'content' | 'createdAt' | 'updatedAt' | 'userId'>
    & { labels?: Maybe<Array<(
      { __typename?: 'Label' }
      & Pick<ILabel, 'id' | 'name' | 'createdAt'>
    )>>, user: (
      { __typename?: 'User' }
      & Pick<IUser, 'id' | 'email' | 'name' | 'password' | 'createdAt' | 'role'>
    ) }
  )> }
);

export type IUpdateTaskMutationVariables = Exact<{
  updateTask: ITaskUpdateInput;
  taskWhereInput: ITaskWhereUniqueInput;
}>;


export type IUpdateTaskMutation = (
  { __typename?: 'Mutation' }
  & { updateTask?: Maybe<(
    { __typename?: 'Task' }
    & Pick<ITask, 'id' | 'name' | 'content' | 'createdAt'>
  )> }
);

export const NewTaskTypeNameFragmentDoc = gql`
    fragment NewTaskTypeName on Task {
  id
}
    `;
export const CreateTaskDocument = gql`
    mutation CreateTask($createTask: TaskCreateInput!) {
  createTask(data: $createTask) {
    id
    name
    content
    createdAt
    updatedAt
    labels {
      id
      name
      createdAt
    }
    userId
    user {
      id
      email
      name
      password
      createdAt
      role
    }
  }
}
    `;
export type ICreateTaskMutationFn = Apollo.MutationFunction<ICreateTaskMutation, ICreateTaskMutationVariables>;

/**
 * __useCreateTaskMutation__
 *
 * To run a mutation, you first call `useCreateTaskMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateTaskMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createTaskMutation, { data, loading, error }] = useCreateTaskMutation({
 *   variables: {
 *      createTask: // value for 'createTask'
 *   },
 * });
 */
export function useCreateTaskMutation(baseOptions?: Apollo.MutationHookOptions<ICreateTaskMutation, ICreateTaskMutationVariables>) {
        return Apollo.useMutation<ICreateTaskMutation, ICreateTaskMutationVariables>(CreateTaskDocument, baseOptions);
      }
export type CreateTaskMutationHookResult = ReturnType<typeof useCreateTaskMutation>;
export type CreateTaskMutationResult = Apollo.MutationResult<ICreateTaskMutation>;
export type CreateTaskMutationOptions = Apollo.BaseMutationOptions<ICreateTaskMutation, ICreateTaskMutationVariables>;
export const DeleteTaskDocument = gql`
    mutation DeleteTask($taskWhereInput: TaskWhereUniqueInput!) {
  deleteTask(where: $taskWhereInput) {
    id
  }
}
    `;
export type IDeleteTaskMutationFn = Apollo.MutationFunction<IDeleteTaskMutation, IDeleteTaskMutationVariables>;

/**
 * __useDeleteTaskMutation__
 *
 * To run a mutation, you first call `useDeleteTaskMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteTaskMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteTaskMutation, { data, loading, error }] = useDeleteTaskMutation({
 *   variables: {
 *      taskWhereInput: // value for 'taskWhereInput'
 *   },
 * });
 */
export function useDeleteTaskMutation(baseOptions?: Apollo.MutationHookOptions<IDeleteTaskMutation, IDeleteTaskMutationVariables>) {
        return Apollo.useMutation<IDeleteTaskMutation, IDeleteTaskMutationVariables>(DeleteTaskDocument, baseOptions);
      }
export type DeleteTaskMutationHookResult = ReturnType<typeof useDeleteTaskMutation>;
export type DeleteTaskMutationResult = Apollo.MutationResult<IDeleteTaskMutation>;
export type DeleteTaskMutationOptions = Apollo.BaseMutationOptions<IDeleteTaskMutation, IDeleteTaskMutationVariables>;
export const LabelFeedDocument = gql`
    query LabelFeed {
  labels {
    id
    name
    createdAt
  }
}
    `;

/**
 * __useLabelFeedQuery__
 *
 * To run a query within a React component, call `useLabelFeedQuery` and pass it any options that fit your needs.
 * When your component renders, `useLabelFeedQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useLabelFeedQuery({
 *   variables: {
 *   },
 * });
 */
export function useLabelFeedQuery(baseOptions?: Apollo.QueryHookOptions<ILabelFeedQuery, ILabelFeedQueryVariables>) {
        return Apollo.useQuery<ILabelFeedQuery, ILabelFeedQueryVariables>(LabelFeedDocument, baseOptions);
      }
export function useLabelFeedLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ILabelFeedQuery, ILabelFeedQueryVariables>) {
          return Apollo.useLazyQuery<ILabelFeedQuery, ILabelFeedQueryVariables>(LabelFeedDocument, baseOptions);
        }
export type LabelFeedQueryHookResult = ReturnType<typeof useLabelFeedQuery>;
export type LabelFeedLazyQueryHookResult = ReturnType<typeof useLabelFeedLazyQuery>;
export type LabelFeedQueryResult = Apollo.QueryResult<ILabelFeedQuery, ILabelFeedQueryVariables>;
export function refetchLabelFeedQuery(variables?: ILabelFeedQueryVariables) {
      return { query: LabelFeedDocument, variables: variables }
    }
export const TaskDetailDocument = gql`
    query TaskDetail($taskWhereInput: TaskWhereUniqueInput!) {
  task(where: $taskWhereInput) {
    id
    name
    content
    labels {
      id
    }
    userId
    user {
      name
    }
    createdAt
  }
}
    `;

/**
 * __useTaskDetailQuery__
 *
 * To run a query within a React component, call `useTaskDetailQuery` and pass it any options that fit your needs.
 * When your component renders, `useTaskDetailQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTaskDetailQuery({
 *   variables: {
 *      taskWhereInput: // value for 'taskWhereInput'
 *   },
 * });
 */
export function useTaskDetailQuery(baseOptions: Apollo.QueryHookOptions<ITaskDetailQuery, ITaskDetailQueryVariables>) {
        return Apollo.useQuery<ITaskDetailQuery, ITaskDetailQueryVariables>(TaskDetailDocument, baseOptions);
      }
export function useTaskDetailLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ITaskDetailQuery, ITaskDetailQueryVariables>) {
          return Apollo.useLazyQuery<ITaskDetailQuery, ITaskDetailQueryVariables>(TaskDetailDocument, baseOptions);
        }
export type TaskDetailQueryHookResult = ReturnType<typeof useTaskDetailQuery>;
export type TaskDetailLazyQueryHookResult = ReturnType<typeof useTaskDetailLazyQuery>;
export type TaskDetailQueryResult = Apollo.QueryResult<ITaskDetailQuery, ITaskDetailQueryVariables>;
export function refetchTaskDetailQuery(variables?: ITaskDetailQueryVariables) {
      return { query: TaskDetailDocument, variables: variables }
    }
export const TaskFeedDocument = gql`
    query TaskFeed($taskOrderInput: [TaskOrderByInput!], $taskWhereInput: TaskWhereInput) {
  tasks(orderBy: $taskOrderInput, where: $taskWhereInput) {
    id
    name
    content
    createdAt
    updatedAt
    labels {
      id
      name
      createdAt
    }
    userId
    user {
      id
      email
      name
      password
      createdAt
      role
    }
  }
}
    `;

/**
 * __useTaskFeedQuery__
 *
 * To run a query within a React component, call `useTaskFeedQuery` and pass it any options that fit your needs.
 * When your component renders, `useTaskFeedQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTaskFeedQuery({
 *   variables: {
 *      taskOrderInput: // value for 'taskOrderInput'
 *      taskWhereInput: // value for 'taskWhereInput'
 *   },
 * });
 */
export function useTaskFeedQuery(baseOptions?: Apollo.QueryHookOptions<ITaskFeedQuery, ITaskFeedQueryVariables>) {
        return Apollo.useQuery<ITaskFeedQuery, ITaskFeedQueryVariables>(TaskFeedDocument, baseOptions);
      }
export function useTaskFeedLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ITaskFeedQuery, ITaskFeedQueryVariables>) {
          return Apollo.useLazyQuery<ITaskFeedQuery, ITaskFeedQueryVariables>(TaskFeedDocument, baseOptions);
        }
export type TaskFeedQueryHookResult = ReturnType<typeof useTaskFeedQuery>;
export type TaskFeedLazyQueryHookResult = ReturnType<typeof useTaskFeedLazyQuery>;
export type TaskFeedQueryResult = Apollo.QueryResult<ITaskFeedQuery, ITaskFeedQueryVariables>;
export function refetchTaskFeedQuery(variables?: ITaskFeedQueryVariables) {
      return { query: TaskFeedDocument, variables: variables }
    }
export const UpdateTaskDocument = gql`
    mutation UpdateTask($updateTask: TaskUpdateInput!, $taskWhereInput: TaskWhereUniqueInput!) {
  updateTask(data: $updateTask, where: $taskWhereInput) {
    id
    name
    content
    createdAt
  }
}
    `;
export type IUpdateTaskMutationFn = Apollo.MutationFunction<IUpdateTaskMutation, IUpdateTaskMutationVariables>;

/**
 * __useUpdateTaskMutation__
 *
 * To run a mutation, you first call `useUpdateTaskMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateTaskMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateTaskMutation, { data, loading, error }] = useUpdateTaskMutation({
 *   variables: {
 *      updateTask: // value for 'updateTask'
 *      taskWhereInput: // value for 'taskWhereInput'
 *   },
 * });
 */
export function useUpdateTaskMutation(baseOptions?: Apollo.MutationHookOptions<IUpdateTaskMutation, IUpdateTaskMutationVariables>) {
        return Apollo.useMutation<IUpdateTaskMutation, IUpdateTaskMutationVariables>(UpdateTaskDocument, baseOptions);
      }
export type UpdateTaskMutationHookResult = ReturnType<typeof useUpdateTaskMutation>;
export type UpdateTaskMutationResult = Apollo.MutationResult<IUpdateTaskMutation>;
export type UpdateTaskMutationOptions = Apollo.BaseMutationOptions<IUpdateTaskMutation, IUpdateTaskMutationVariables>;