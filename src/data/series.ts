/**
 * Series de posts que se leen en orden. Un post se declara miembro con
 * `series` + `seriesOrder` en su frontmatter; aquí solo vive el título y la
 * descripción que encabezan el índice.
 */
export const series = {
  "sql-basico": {
    title: "SQL básico",
    description:
      "Cuatro clases para pasar de no saber qué es una base de datos a consultar con varias condiciones.",
  },
} as const;

export type SeriesId = keyof typeof series;

export const isSeriesId = (value: string): value is SeriesId => value in series;
