
module.exports = {
  auth: (req, res) => {
    if (req.user) {
      res.status(200).send(req.user)
    } else {
      res.status(400).send(false)
    }
  }
}
