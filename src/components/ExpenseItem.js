// 

import './ExpenseItem.css';

function ExpenseItem() {
  return (
    // class attribute is written as className - class is a reserved word in javaScript
    <div className="expense-item">
      <div>Date</div>
      <div className="expense-item__description">
        <h2>Title</h2>
        <div className="expense-item__price">$200.50</div>
      </div>
    </div>
  );
}
export default ExpenseItem;