/* eslint-disable camelcase */

/**
 * sum
 * @param {object} req
 * @param {object} res
 * @returns {object} reflection object
 */
 const sum = async (req, res) => {
  let errorMessage = {};
  // const {boilerMake, boilerModel, capacity} = req.body;
  const {
    number1,
    number2,
  } = req.query;


  let sum = parseInt(number1) + parseInt(number2);
  return res.send(JSON.stringify(sum));
};

/**
 * multiply
 * @param {object} req
 * @param {object} res
 * @returns {object} reflection object
 */
 const multiply = async (req, res) => {
  // const {boilerMake, boilerModel, capacity} = req.body;
  const {
    number1,
    number2,
  } = req.query;

  let multiply = parseInt(number1) * parseInt(number2);

  let reply = multiply; 
  return res.send(JSON.stringify(reply));
};


export {
  sum,
  multiply
};
