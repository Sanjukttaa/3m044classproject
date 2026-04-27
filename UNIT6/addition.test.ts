import addition from "./addition";

test("addition test case", () => {
    expect(addition(2, 3)).toBe(5);
});

test("addition test case",()=>{
    expect(addition(2, 2)).toBe(4);
})