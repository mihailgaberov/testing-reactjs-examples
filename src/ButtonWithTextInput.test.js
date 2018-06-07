import ButtonWithTextInput from "./ButtonWithTextInput";

it("renders correctly", () => {
  const wrapper = shallow(
    <ButtonWithTextInput btnLabel={"Sie buton"} textInputValue={"Zurich"} />
  );

  expect(wrapper).toMatchSnapshot();
});

it("renders correctly again", () => {
  const wrapper = render(
    <ButtonWithTextInput btnLabel={"Sie buton"} textInputValue={"Zurich"} />
  );

  expect(wrapper).toMatchSnapshot();
});

it("has correct button label", () => {
  const wrapper = mount(
    <ButtonWithTextInput btnLabel={"Sie buton"} textInputValue={"Zurich"} />
  );
  const text = wrapper.find("CustomButton").text();
  expect(text).toEqual("Sie buton");
});

it("has correct text input value", () => {
  const wrapper = mount(
    <ButtonWithTextInput btnLabel={"Sie buton"} textInputValue={"Zurich"} />
  );
  const text = wrapper.find("CustomTextInput").props().textInputValue;
  expect(text).toEqual("Zurich");
});

it("test visual result after click - call setNewCityName", () => {
  const wrapper = mount(
    <ButtonWithTextInput btnLabel={"Sie buton"} textInputValue={"Zurich"} />
  );

  wrapper
    .find("button")
    .first()
    .simulate("click");

  expect(wrapper.find("CustomTextInput").props().textInputValue).toEqual("Santa Maria");
});