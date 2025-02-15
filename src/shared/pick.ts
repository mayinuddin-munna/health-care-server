const pick = <T extends Record<string, unknown>, k extends keyof T>(
  object: T,
  keys: k[]
) => {
  const finalObj: Partial<T> = {};
  for (const key of keys) {
    if (object && Object.hasOwnProperty.call(object, key)) {
      finalObj[key] = object[key];
    }
  }
//   console.log(finalObj);
  return finalObj;
};

export default pick;
