'use strict';
import { Model } from 'sequelize';

/**
 * @type {function(Sequelize, DataTypes):Professional}
 */
export default (sequelize, DataTypes) => {
  class Professional extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.Professional.belongsTo(models.ProfessionalType, {
        as: 'type',
        foreignKey: 'professionalTypeId',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      });
    }
  }

  Professional.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: { notEmpty: true }
      },
      phoneNumber: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
          is: /^[0-9]+$|^$/
        }
      },
      mailAddress: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: { isEmail: true }
      },
      professionalTypeId: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      situation: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true
      }
    },
    {
      sequelize,
      underscored: true
    }
  );

  return Professional;
};
