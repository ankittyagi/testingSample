import React from 'react';
import 'react-native';
import renderer from 'react-test-renderer';
import Average from '../components/average';
import { shallow } from 'enzyme';

// On running the test, a snapshot file is created within the __snapshots__ folder
// 'describe' function is used to write a test suite
describe('Average (Snapshot)', () => {
  // 'beforeEach' run before every test
  beforeEach(() => {
    app = shallow(<Average />);
    appy = new Average()
  })

  // 'it' function is used to define a test.
  it('avergae component renders ', () => {
    const component = renderer.create(<Average />);
    const json = component.toJSON();
    // 'expect' function is part of the assertion library exposed by Jest.
    expect(json).toMatchSnapshot();
  });

  it('Method checks', () => {
    expect(app.state().inputValueA).toBeDefined();
    expect(app.state().inputValueA).toBeDefined();
    expect(appy.calculateAverage(12,18)).toBe(15)
  });
});
