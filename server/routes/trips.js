var express = require('express');
var router = express.Router();

/* GET trips listing. */
router.get('/', function(req, res, next) {
  res.json([{
      name: "NYC Trip Partayyy",
      dest: "NYC",
      startDate: "10-02-2019",
      endDate: "12/07/2019"
    },
    
    {
      name: "Catskills Vaykay",
      dest: "NYC",
      startDate: "10-02-2019",
      endDate: "12/07/2019",
    },

    {
      name: "Albany",
      dest: "NYC",
      startDate: "10-02-2019",
      endDate: "12/07/2019",
    }
  ]);
});

module.exports = router;
