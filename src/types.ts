import defaultDb from './db.json';

export interface Option {
  db: object,
  offset: number
}

export const defaults: Option = {
  db: defaultDb,
  offset: 0
};