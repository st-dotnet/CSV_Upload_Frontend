// src/app/store/user.effects.ts
import { inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { uploadFile, uploadFileFailure, uploadFileSuccess } from './file-upload.actions';
import { FileUploadService } from '../file-upload.service';

export const loadActors = createEffect(
    (actions$ = inject(Actions), fileUploadService = inject(FileUploadService)) => {
      return actions$.pipe(
        ofType(uploadFile),
        switchMap((action:any) =>
            fileUploadService.uploadFile(action).pipe(
                map(response => uploadFileSuccess({ response })),
                catchError(error => of(uploadFileFailure({ error })))
          )
      )
    )
    },
    { functional: true }
  );
  
