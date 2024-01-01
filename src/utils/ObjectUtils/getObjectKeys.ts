// Object.keys 타입 단언 추상화
export function getObjectKeys<T extends object>(obj: T) {
  return Object.keys(obj) as Array<keyof T>
}
