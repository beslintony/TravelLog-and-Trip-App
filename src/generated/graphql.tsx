import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
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
};

export type CreateTravelLogInput = {
  description: Scalars['String'];
  lat: Scalars['Float'];
  lon: Scalars['Float'];
  rating: Scalars['Float'];
  title: Scalars['String'];
};

export type CreateUserInput = {
  email: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  password: Scalars['String'];
  username: Scalars['String'];
};

export type LoginInput = {
  email?: InputMaybe<Scalars['String']>;
  password: Scalars['String'];
  username?: InputMaybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createTravelLog: TravelLog;
  createUser: User;
  login: Scalars['String'];
};


export type MutationCreateTravelLogArgs = {
  input: CreateTravelLogInput;
};


export type MutationCreateUserArgs = {
  input: CreateUserInput;
};


export type MutationLoginArgs = {
  input: LoginInput;
};

export type Query = {
  __typename?: 'Query';
  getTravelLogs: Array<TravelLog>;
  me?: Maybe<User>;
};

export type TravelLog = {
  __typename?: 'TravelLog';
  _id: Scalars['String'];
  description: Scalars['String'];
  lat: Scalars['Float'];
  lon: Scalars['Float'];
  rating: Scalars['Float'];
  title: Scalars['String'];
  username: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  _id: Scalars['String'];
  email: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  username: Scalars['String'];
};
