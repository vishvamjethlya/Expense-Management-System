const mongoose = require("mongoose");

const transactionSchema = new mongoose.Schema(
  {
    userid: {
      type: String,
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    reference: {
      type: String,
    },
    description: {
      type: String,
    },
    date: {
      type: Date,
      required: true,
    },
  },
  { timestamps: true }
);

const transactionModel = mongoose.model("transactions", transactionSchema);

module.exports = transactionModel;
