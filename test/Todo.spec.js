const Todo = require('../Todo');

describe("Test ToDo class", () => {

    let todo;

    beforeEach(() => {
        todo = new Todo();
    });

    test("Should return size of todo list", () => {
        todo.addTask("Buy bananas");
        todo.addTask("Lift weights");
        todo.addTask("Draw");

        expect(todo.length).toBe(3);
    })

    test("Empty todo should return 0 length", () => {
        expect(todo.length).toBe(0);
    })

    test('Should be able to add a task', () => {
        todo.addTask("Buy bananas");

        expect(todo.length).toBe(1);
    });

    test("Should be able to delete a task", () => {
        todo.addTask("Buy bananas");
        todo.addTask("Lift weights");

        todo.deleteTask("Buy bananas");

        expect(todo.length).toBe(1);
    });

    test("Should throw error if task to delete is not found", () => {
        todo.addTask("Buy bananas");

        expect(() => todo.deleteTask("Lift weights")).toThrow()
    })

    test("Should be able to remove most recent task", () => {

        todo.addTask("Buy bananas");
        todo.addTask("Lift weights");

        const popped = todo.popMostRecentTask();

        expect(todo.length).toBe(1);
        expect(popped).toBe("Lift weights");
    });

    test("Should throw error if there are no tasks to remove as the most recent", () => {
        expect(() => todo.popMostRecentTask()).toThrow();
    })

    test("Should be able to clear tasks", () => {

        todo.addTask("Buy bananas");
        todo.addTask("Lift weights");
        todo.clear();

        expect(todo.length).toBe(0);
    });

});
