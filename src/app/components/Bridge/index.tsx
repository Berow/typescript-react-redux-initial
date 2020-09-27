// Core
import React, { FC } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { push } from 'connected-react-router';

import Styles from './styles.module.css';
import observatory from './observatory.jpg';
import { book } from '../../routes/book';

import { ProfileState } from '../../bus/profile/reducer';
import { AppState } from '../../init/rootReducer';

export const Bridge: FC = () => {
  const dispatch = useDispatch();
  const profile = useSelector<AppState, ProfileState>((state) => state.profile);
  const _proceed = () => dispatch(push(book.panel));

  return (
    <section className={Styles.bridge}>
      <h1>
        Добро пожаловать на борт,
        {' '}
        {profile.profile.firstName}
        &nbsp;
        {profile.profile.lastName}
        !
      </h1>
      <img src={observatory} alt="observatory" />
      <button type="button" onClick={_proceed}>Контрольная панель</button>
    </section>
  );
};
