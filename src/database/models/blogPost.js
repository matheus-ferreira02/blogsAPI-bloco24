module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define('BlogPost', {
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    published: DataTypes.DATE,
    updated: DataTypes.DATE,
  }, {
    timestamps: false,
  });

  Category.associate = ({ User }) => {
    Category.belongsTo(User, {
      foreignKey: 'id', as: 'user'
    });
  }

  return Category;
}