module.exports = (sequelize, DataTypes) => 
{
  const Questions = sequelize.define('Questions', {
    question: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    choices: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    answer: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
  return Questions;
};
