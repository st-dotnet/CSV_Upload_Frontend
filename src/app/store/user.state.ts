// src/app/store/user.state.ts
export interface UserState {
  loading: boolean;
  uploadSuccess: boolean;
  uploadFailure: boolean;
  error: string | null;
  response: any | null;
}

export const initialUserState: UserState = {
  loading: false,
  error: null,
  response: null,
  uploadSuccess: false,
  uploadFailure: false,
};

export interface AppState {
  user: UserState;
}
