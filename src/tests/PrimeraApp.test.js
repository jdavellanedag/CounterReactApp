import React from "react";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { shallow } from "enzyme";
import PrimeraApp from "../PrimeraApp";

describe("Test on <PrimeraApp />", () => {
  test("should show <PrimeraApp /> correctly", () => {
    const saludo = "Hola Soy Julian";
    const wrapper = shallow(<PrimeraApp saludo={saludo} />);
    expect(wrapper).toMatchSnapshot();
  });
  test("should show subtitle send by props", () => {
    const saludo = "Hola Soy Julian";
    const subtitle = "Mi primera app";
    const wrapper = shallow(
      <PrimeraApp saludo={saludo} subtitulo={subtitle} />
    );
    const textoParrafo = wrapper.find("p").text();
    expect(textoParrafo).toBe(subtitle);
  });

  /*   test("should show Hola Soy Julian", () => {
    const saludo = "Hola Soy Julian";
    const { getByText } = render(<PrimeraApp saludo="Hola Soy Julian" />);
    expect(getByText(saludo)).toBeInTheDocument();
  }); */
});
