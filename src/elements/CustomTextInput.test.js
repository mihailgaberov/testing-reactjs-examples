import CustomTextInput from "./CustomTextInput";

describe("CustomTextInput component", () => {
  it("renders correctly", () => {
    const wrapper = shallow(
      <CustomTextInput textInputValue={'test'} />
    );
  
    expect(wrapper).toMatchSnapshot();
  });
  
  it("should display proper text value", () => {
    const wrapper = shallow(
      <CustomTextInput textInputValue={'test'} />
    );
  
    expect((wrapper).find('input').props().value).toEqual('test');
  });
});