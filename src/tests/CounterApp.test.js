import "@testing-library/jest-dom";
import React from "react";
import { shallow } from "enzyme";
import CounterApp from "../CounterApp";

describe("Test on <CounterApp />", () => {
  let wrapper = shallow(<CounterApp />);
  beforeEach(() => {
    wrapper = shallow(<CounterApp />);
  });
  test("should show <CounterApp /> correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });
  test("should show default value - 100", () => {
    const wrapper = shallow(<CounterApp value={100} />);
    const counterText = wrapper.find("h2").text().trim();
    expect(counterText).toBe("100");
  });
  test("should add with button +1", () => {
    wrapper.find("button").at(0).simulate("click");
    const counterText = wrapper.find("h2").text().trim();
    expect(counterText).toBe("11");
  });
  test("should sub with button -1", () => {
    wrapper.find("button").at(2).simulate("click");
    const counterText = wrapper.find("h2").text().trim();
    expect(counterText).toBe("9");
  });
  test("should reset default value using button reset", () => {
    const wrapper = shallow(<CounterApp value={105} />);
    wrapper.find("button").at(0).simulate("click");
    wrapper.find("button").at(0).simulate("click");
    wrapper.find("button").at(0).simulate("click");
    wrapper.find("button").at(1).simulate("click");
    const counterText = wrapper.find("h2").text().trim();
    expect(counterText).toBe("105");
  });
});
