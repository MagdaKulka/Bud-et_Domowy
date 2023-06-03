const budgetValueElement = document.getElementById('budgetValue');
const incomesValueElement = document.getElementById('incomesValue');
const expensesValueElement = document.getElementById('expensesValue');
const incomeForm = document.getElementById('incomeForm');
const expenseForm = document.getElementById('expenseForm');
const incomesList = document.getElementById('incomesList');
const expensesList = document.getElementById('expensesList');

let budget = 987;

incomeForm.addEventListener('submit', (event) => {
	event.preventDefault();

	const incomeTitle = document.getElementById('incomeTitle').value;
	const incomeValue = parseFloat(document.getElementById('incomeValue').value);

	const incomeItem = document.createElement('li');
	incomeItem.textContent = `${incomeTitle}: ${incomeValue} PLN`;
	incomesList.appendChild(incomeItem);

	budget += incomeValue;
	incomesValueElement.textContent = budget;

	incomeForm.reset();
});
expenseForm.addEventListener('submit', (event) => {
	event.preventDefault();

	const expenseTitle = document.getElementById('expenseTitle').value;
	const expenseValue = parseFloat(document.getElementById('expenseValue').value);

	const expenseItem = document.createElement('li');
	expenseItem.textContent = `${expenseTitle}: ${expenseValue} PLN`;
	expensesList.appendChild(expenseItem);

	budget -= expenseValue;
	expensesValueElement.textContent = budget;

	expenseForm.reset();
});
budgetValueElement.textContent = budget;
