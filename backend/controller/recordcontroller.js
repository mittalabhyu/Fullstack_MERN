const ExpenseModel = require('../models/Expenses');

const find = (req, res) => {
    res.send("FIND")
}

const insert = async(req, res) => {
    try {
        const { title,amount,type,date,email } = req.body;
       console.log("Add ",title,amount,type,date,email);
        const expenseModel = new ExpenseModel({ title,amount,type,date,email });
       

        await expenseModel.save();
        res.status(201)
            .json({
                message: "Expense Saved successfully",
                success: true
            })
    }
    catch(err) {
        console.log("Add1 ",err);
        res.status(500)
            .json({
                message: "Internal Server Error",
                success: false
            })

    }
}
const del = (req, res) => {
    res.send("Delete")
}

const modify = (req, res) => {
    res.send("Modify")
}

const reset = (req, res) => {
  
}

module.exports = {
    find, insert, del, modify, reset

}