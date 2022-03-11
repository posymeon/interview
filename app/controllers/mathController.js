/* eslint-disable camelcase */

/**
 * sum
 * @param {object} req
 * @param {object} res
 * @returns {object} reflection object
 */
 const sum = async (req, res) => {
  let errorMessage = {};

  const {
    number1,
    number2,
  } = req.query;


  let sum = parseInt(number1) + parseInt(number2);

  let reply = sum; 
  return res.status(200).send(JSON.stringify(reply));
};

/**
 * multiply
 * @param {object} req
 * @param {object} res
 * @returns {object} reflection object
 */
 const multiply = async (req, res) => {

  const {
    number1,
    number2,
  } = req.query;

  let multiply = parseInt(number1) * parseInt(number2);

  let reply = multiply; 
  return res.status(200).send(JSON.stringify(reply));
};


export {
  sum,
  multiply
};
