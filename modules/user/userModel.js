const { DataTypes } = require('sequelize');
const sequelize = require('../../config/database');

const User = sequelize.define('User', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    username: {
        type: DataTypes.STRING(50),
        allowNull: false,
        unique: true
    },
    email: {
        type: DataTypes.STRING(255),
        allowNull: false,
        unique: true,
        validate: { isEmail: true }
    },
    password: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    fullName: {
        type: DataTypes.STRING(100),
        allowNull: true
    },
    profilePic: {
        type: DataTypes.STRING(255),
        allowNull: true,
        field: 'profile_pic'
    },
    bio: {
        type: DataTypes.TEXT,
        allowNull: true,
        validate: {
            len: [0, 255]
        }
    },
    followersCount: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    },
    followingCount: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    },
    videosCount: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    },
    isAdmin: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    isBlocked: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    }
}, {
    timestamps: true, 
    tableName: 'Users'
});

module.exports = User;