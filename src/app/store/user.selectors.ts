// src/app/store/user.selectors.ts
import { createSelector } from '@ngrx/store';
import { UserState } from './user.state';

export interface AppState {
  user: UserState;
}

export const selectUserState = (state: AppState) => state.user;

export const selectError = createSelector(
  selectUserState,
  (state: UserState) => state.error
);

export const selectResponse = createSelector(
  selectUserState,
  (state: UserState) => state.response
);

export const success = createSelector(
    selectUserState,
    (state: UserState) => state
  );

export const failure = createSelector(
    selectUserState,
    (state: UserState) => state
  );