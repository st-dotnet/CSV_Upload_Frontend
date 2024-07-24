// src/app/store/user.reducer.ts
import { createReducer, on } from '@ngrx/store';
import { initialUserState } from './user.state';
import {
  uploadFile,
  uploadFileFailure,
  uploadFileSuccess,
} from './file-upload.actions';

export const userReducer = createReducer(
  initialUserState,
  on(uploadFile, (state) => ({
    ...state,
    uploadSuccess: false,
    uploadFailure: false,
  })),
  on(uploadFileSuccess, (state) => ({ ...state, uploadSuccess: true })),
  on(uploadFileFailure, (state) => ({ ...state, uploadFailure: true }))
);
