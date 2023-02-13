//<----------IMPORTACIONES Y REQUERIMIENTOS------------>

const { DataTypes, UUIDV4 } = require('sequelize');

//<----------------------------------------------------

// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.

module.exports = (sequelize) => {

  // defino el modelo

  sequelize.define('videogame', {

    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
      defaultValue: UUIDV4,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },  
    image: {
      type: DataTypes.STRING,
      validate: {
        isUrl: {
          msg: 'url format: https://foo.com',
        },
      },
    },
    description: {
				type: DataTypes.TEXT,
				allowNull: false,
			},
			released: {
				type: DataTypes.DATEONLY,
				validate: {
					isDate: {
						msg: 'date format: YYYY-MM-DD',
					},
				},
			},
			rating: {
				type: DataTypes.FLOAT,
				validate: {
					min: 0,
					max: 5,
				},
			},
			platforms: {
				type: DataTypes.ARRAY(DataTypes.STRING),
			},
			createdInDb: {
				type: DataTypes.BOOLEAN,
				allowNull: false,
				defaultValue: true,
			},
		},
		{
			timestamps: false,
		}
	);
};