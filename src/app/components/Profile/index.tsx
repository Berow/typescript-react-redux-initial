// Core
import React, { FC } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  Formik,
  Form,
  Field,
  FormikHelpers,
} from 'formik';
import cx from 'classnames';

// Instruments
import Styles from './styles.module.css';
import { profileActions } from '../../bus/profile/actions';
import { ProfileType } from '../../bus/profile/types';

import { ProfileState } from '../../bus/profile/reducer';
import { AppState } from '../../init/rootReducer';

export const Profile: FC = () => {
    const dispatch = useDispatch();

  const _submit = (values: ProfileType, actions: FormikHelpers<ProfileType>) => {
        dispatch(profileActions.startFetching());
        actions.setSubmitting(false);
        dispatch(profileActions.fillProfile(values));
        dispatch(profileActions.stopFetching());
    };

    const profile = useSelector<AppState, ProfileState>((state) => state.profile);
    const { firstName, lastName } = profile.profile;
    const { isFetching } = profile;

    const buttonMessage = isFetching ? 'Обновляю' : 'Обновлено';

    const disabledStyle = cx({
        [Styles.disabled]: isFetching,
    });

    return (
      <section className={Styles.profile}>
        <h1>
          {firstName}
          {' '}
          {lastName}
        </h1>
        <Formik
          initialValues={{ firstName, lastName }}
          render={() => (
            <Form>
              <Field
                className={disabledStyle}
                disabled={isFetching}
                name="firstName"
                type="text"
              />
              <Field
                className={disabledStyle}
                disabled={isFetching}
                name="lastName"
                type="text"
              />
              <button
                className={disabledStyle}
                disabled={isFetching}
                type="submit"
              >
                {buttonMessage}
              </button>
            </Form>
                )}
          onSubmit={_submit}
        />
      </section>
    );
};
