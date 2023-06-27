CREATE TABLE PAIS (
  pais_id INT PRIMARY KEY AUTO_INCREMENT,
  nombre_pais VARCHAR(100) NOT NULL UNIQUE
);

CREATE TABLE PROVINCIA (
  provincia_id INT PRIMARY KEY AUTO_INCREMENT,
  nombre_provincia VARCHAR(100) NOT NULL,
  pais_id INT,
  FOREIGN KEY (pais_id) REFERENCES PAIS(pais_id)
);

CREATE TABLE LOCALIDAD (
  codigo_localidad INT PRIMARY KEY AUTO_INCREMENT,
  nombre VARCHAR(100) NOT NULL,
  codigo_postal VARCHAR(10) NOT NULL,
  provincia_id INT,
  FOREIGN KEY (provincia_id) REFERENCES PROVINCIA(provincia_id)
);

CREATE TABLE EMPLEADO (
  empleado_id INT PRIMARY KEY AUTO_INCREMENT,
  dni VARCHAR(20) NOT NULL,
  nombre VARCHAR(100) NOT NULL,
  telefono VARCHAR(20),
  email VARCHAR(100),
  fecha_alta DATE,
  localidad_id INT,
  FOREIGN KEY (localidad_id) REFERENCES LOCALIDAD(codigo_localidad)
);
