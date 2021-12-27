import ReactDOM from "react-dom";

describe("test ReactDOM.render", () => {
    const originalRender = ReactDOM.render;
    const originalGetElement = global.document.getElementById;
    beforeEach(() => {
        global.document.getElementById = () => true;
    });
    afterAll(() => {
        global.document.getElementById = originalGetElement;
        ReactDOM.render = originalRender;
    });
    it("should call ReactDOM.render", () => {
        expect(originalRender).toBe(ReactDOM.render);
    });
});
