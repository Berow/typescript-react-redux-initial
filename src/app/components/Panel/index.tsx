// Core
import React, { FC } from 'react';
import { useSelector, useDispatch } from 'react-redux';

// Instruments
import Styles from './styles.module.css';
import { feedActions } from '../../bus/feed/actions';
import { StarshipTile } from '../StarshipTile';

import { FeedState } from '../../bus/feed/reducer';
import { AppState } from '../../init/rootReducer';

export const Panel:FC = () => {
    const dispatch = useDispatch();
    const starships = useSelector<AppState, FeedState>((state) => state.feed);
    const isFetching = useSelector<AppState, FeedState>((state) => state.feed);

    const _fetchPostsAsync = () => dispatch(feedActions.fetchStarshipsAsync());

    const starshipsJSX = starships.starships.status.map((starship) => (
      <StarshipTile
        key={starship.name}
        {...starship}
      />
        ));

    const buttonMessage = isFetching
        ? '⏳ Вызываю...'
        : '📲 Вызвать корабли';

    return (
      <section className={Styles.panel}>
        <h1>🖥</h1>
        <button
          type="button"
          disabled={isFetching.isFetching}
          onClick={_fetchPostsAsync}
        >
          {buttonMessage}
        </button>
        <ul>{ starshipsJSX }</ul>
      </section>
    );
};
