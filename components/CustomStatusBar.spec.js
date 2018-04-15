import React from 'react';
import renderer from 'react-test-renderer';
import CustomStatusBar from './CustomStatusBar';

describe('CustomStatusBar', () => {
  it('renders correctly', () => {
    const wrappper = renderer
      .create(<CustomStatusBar backgroundColor="red" />)
      .toJSON();
    expect(wrappper).toMatchSnapshot();
  });
});
