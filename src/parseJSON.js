import { arrayBufferToString } from './util';

function convertToJsonArray(input) {
  if (!input || !input.head) return input;

  const head = input.head;
  const data = input.data;

  return data.map((row) => {
    const rowObject = {};
    row.forEach((cell, columnIndex) => {
      rowObject[head[columnIndex]] = convertToJsonArray(cell);
    });
    return rowObject;
  });
}

export default function parseJSON(input) {
  return Promise.resolve().then(() => {
    const json = input instanceof ArrayBuffer ? arrayBufferToString(input) : input;
    const response = JSON.parse(json);
    if (response.Err !== 0) {
      return response;
    }

    let data = response.Data;
    if (data.JsonTbl) {
      const tbl = convertToJsonArray(data.JsonTbl);
      const key = Object.keys(tbl[0])[0];
      const value = tbl[0][key];
      data = {
        Id: data.Id,
        [key]: value,
      };
    }

    return {
      Qid: response.Qid,
      Err: response.Err,
      Counter: response.Counter,
      Data: data,
    };
  });
}
