import expensesApi from "../../services/expensesApi.js";
import Table from "../components/Table.js";

const Expenses = {
  allowAccess: async () => false, // 👈 Replace this with isAuthenticated check
  render: async () => {
    const expenses = await expensesApi.getReports();
    const view = /*html*/ `
    <h1>Expense Report</h1>
    <p id="user-greet">Hello, ${window.user.name}</p>
    <p>These are your expenses:</p>
    ${await Table.render(expenses)}
    `;
    return view;
  },
  postRender: async () => {},
};

export default Expenses;
