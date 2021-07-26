'use strict';
module.exports = (req, res, next) => {
  //   const name = req.query.name;
  if (Object.keys(req.query).length) {
    // console.log('Object.keys(req.query)', Object.keys(req.query));
    next();
  } else {
    res.status(500).json({ error: '500 server error from middleware' });
  }
};
