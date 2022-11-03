import { pxArray } from "~/lib/style";

describe("p()", () => {
  test("p()", () => {
    expect(pxArray(0)).toBe("0px");
    expect(pxArray(0, 1, 2)).toBe("0px 1px 2px");
    expect(pxArray(0, 1, 2, 3, 4)).toBe("0px 1px 2px 3px");
  });
});
