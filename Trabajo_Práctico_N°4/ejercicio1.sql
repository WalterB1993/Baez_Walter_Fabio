-- Crear la tabla ALUMNO
CREATE TABLE ALUMNO (
  cod_matricula INT PRIMARY KEY,
  nombre VARCHAR(100),
  dni VARCHAR(20),
  fecha_nac DATE,
  email VARCHAR(100)
);

-- Crear la tabla CURSO
CREATE TABLE CURSO (
  cod_curso INT PRIMARY KEY,
  nombre VARCHAR(100)
);

-- Crear la tabla PROFESOR
CREATE TABLE PROFESOR (
  profesor_id INT PRIMARY KEY,
  nombre VARCHAR(100),
  especialidad VARCHAR(100),
  email VARCHAR(100)
);

-- Crear la tabla de relación ALUMNO_CURSO (alumnos inscritos en cursos)
CREATE TABLE ALUMNO_CURSO (
  cod_matricula INT,
  cod_curso INT,
  FOREIGN KEY (cod_matricula) REFERENCES ALUMNO(cod_matricula),
  FOREIGN KEY (cod_curso) REFERENCES CURSO(cod_curso),
  PRIMARY KEY (cod_matricula, cod_curso)
);

-- Crear la tabla de relación PROFESOR_CURSO (profesores que imparten cursos)
CREATE TABLE PROFESOR_CURSO (
  profesor_id INT,
  cod_curso INT,
  FOREIGN KEY (profesor_id) REFERENCES PROFESOR(profesor_id),
  FOREIGN KEY (cod_curso) REFERENCES CURSO(cod_curso),
  PRIMARY KEY (profesor_id, cod_curso)
);
