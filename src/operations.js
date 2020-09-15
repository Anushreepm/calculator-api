exports.addNumber = (req, res) => {
  const { num1, num2 } = req.body;

  if (typeof num1 === "string" || typeof num2 === "string") {
    return res.json({
      status: `error`,
      message: `Invalid data types`,
    });
  }

  let sum = num1 + num2;

  if (sum > 1000000) {
    return res.json({
      status: `error`,
      message: `Overflow`,
    });
  }

  return res.json({
    status: `success`,
    message: `the sum of given two numbers`,
    sum,
  });
};

exports.subNumber = (req, res) => {
  const { num1, num2 } = req.body;

  if (typeof num1 === "string" || typeof num2 === "string") {
    return res.json({
      status: `error`,
      message: `Invalid data types`,
    });
  }

  let difference = num1 - num2;

  if (difference > 1000000) {
    return res.json({
      status: `error`,
      message: `Overflow`,
    });
  } else if (difference < -1000000) {
    return res.json({
      status: `error`,
      message: `Underflow`,
    });
  }

  return res.json({
    status: `success`,
    message: `the difference of given two numbers`,
    difference,
  });
};

exports.mulNumber = (req, res) => {
  const { num1, num2 } = req.body;

  if (typeof num1 === "string" || typeof num2 === "string") {
    return res.json({
      status: `error`,
      message: `Invalid data types`,
    });
  }

  let result = num1 * num2;

  if (result > 1000000) {
    return res.json({
      status: `error`,
      message: `Overflow`,
    });
  }

  return res.json({
    status: `success`,
    message: `The product of given numbers`,
    result,
  });
};

exports.divNumber = (req, res) => {
  const { num1, num2 } = req.body;

  if (typeof num1 === "string" || typeof num2 === "string") {
    return res.json({
      status: `error`,
      message: `Invalid data types`,
    });
  }

  if (num2 === 0) {
    return res.json({
      status: `error`,
      message: `Cannot divide by zero`,
    });
  }
  let result = num1 / num2;

  if (result > 1000000) {
    return res.json({
      status: `error`,
      message: `Overflow`,
    });
  }

  return res.json({
    status: `success`,
    message: `The division of given numbers`,
    result,
  });
};
