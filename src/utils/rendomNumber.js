function getRandomInRange(min, max) {
  // Генеруємо випадкове число від 0 до 1
  const random = Math.random();
  // Маштабуємо і зміщуємо випадкове число у вказаний диапазон
  const range = max - min;
  const scaledRandom = random * range;
  const shiftedRandom = scaledRandom + min;
  const finalResult = Math.floor(shiftedRandom);
  
  return finalResult;
}

export default getRandomInRange;