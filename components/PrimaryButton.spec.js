import React from 'react';
import renderer from 'react-test-renderer';
import ButtonDeckDetail from './ButtonDeckDetail';

describe('ButtonDeckDetail', () => {
  it('renders correctly', () => {
    const button = {
      title: 'Start Quiz',
      icon: 'play-arrow',
      path: 'Quiz',
    };
    const wrappper = renderer.create(<ButtonDeckDetail {...button} />).toJSON();
    expect(wrappper).toMatchSnapshot();
  });
});
