const OwnerDetails = require('../store/Details.Schema');
exports.postOwnerDetails = async (req, res) => {
  console.log(req.body.data);
  const details = await OwnerDetails({
    details: req.body.data
  })
  await details.save();
  res.status(200).json({ mess: "hello" })
}
exports.postLogin = async (req, res) => {
  // console.log(req.body.data);
  const details = await OwnerDetails.findOne({ "details.username": req.body.data.username, "details.password": req.body.data.password });
  // console.log(details);
  if (details) {
    req.session.isLogged = true;
    req.session.userId = details._id;
    res.status(200).json({ message: "yes", details: details });
  } else {
    res.status(200).json({ message: "no" });
  }
}
exports.isLogged = async (req, res) => {
  // console.log(req.body);
  if (req.session.isLogged) {
    const details = await OwnerDetails.findById(req.session.userId)
    console.log(details)
    res.status(201).json({ message: "yes", details: details });
  } else {
    // console.log("not Found")
    res.status(200).json({ message: "no" });

  }

}
exports.postLogOut = async (req, res) => {
  req.session.destroy();
  res.status(200).json({ message: "no" });

}