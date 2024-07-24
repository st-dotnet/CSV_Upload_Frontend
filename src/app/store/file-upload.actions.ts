// src/app/store/user.actions.ts
import { createAction, props } from '@ngrx/store';

export const uploadFile = createAction(
  '[User] Upload File',
  props<{ file: File }>()
);
export const uploadFileSuccess = createAction(
  '[User] Upload File Success',
  props<{ response: any }>()
);
export const uploadFileFailure = createAction(
  '[User] Upload File Failure',
  props<{ error: any }>()
);
