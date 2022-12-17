import Color from "color";
import { render } from "~/lib/test";
import { SampleTestComponent } from "~/lib/test/sample/SampleTestComponent";
import { COLORS } from "~/styles/colors";

describe("SampleTestComponent Test", () => {
  test("should be rendered", () => {
    const { getByText } = render(<SampleTestComponent />);
    const box = getByText("샘플");
    const style = window.getComputedStyle(box);

    expect(style.fontSize).toBe("12px");
    expect(Color(style.color).toString()).toBe(Color(COLORS.MAIN).toString());
  });
});
