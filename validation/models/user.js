'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      // define association here
    }
  };
  User.init({
    name: {
      type: DataTypes.STRING,
      validate: {
        len: {
          args: [4, 20],
          msg: "characters should between 4 and 20"
        },
        notEmpty: {
          msg: "name is required"
        } 
      }
    },
    username: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: "name is required"
        } 
      }
    },
    password: {
      type: DataTypes.STRING,
      validate: {
        isAlphanumeric: {
          msg: "can't contain symbol"
        },
        notEmpty: {
          msg: "name is required"
        } 
      }
    },
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: {
          msg: "invalid email address"
        },
        notEmpty: {
          msg: "name is required"
        }       
      }
    },
    birthdate: {
      type: DataTypes.DATE,
      validate: {
        isMature: (val) => {
          if (new Date().getFullYear() - val.getFullYear() < 17) {
            throw new Error('Age restricted 17++')
          }
        }
      }
    }
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};