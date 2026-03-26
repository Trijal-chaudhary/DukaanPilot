const mongoose = require("mongoose");

const OwnerDetails = mongoose.Schema({
  details: {
    type: Object,
    required: true
  }
})

module.exports = mongoose.model("OwnerDetails", OwnerDetails);