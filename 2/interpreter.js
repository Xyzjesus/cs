const instructions = {
  SET: 0, // установка значения
  PRINT: 1, // печать
  RET: 3, // возврат
  IF: 5, // если
  JMP: 6, // перемещение
  ADD: 9, // добавление
};

const program = [
  instructions.SET,
  17,
  instructions.PRINT,
  instructions.SET,
  17,
  instructions.PRINT,
  instructions.ADD,
  instructions.PRINT,
  instructions.IF,
  instructions.SET,
  17,
  instructions.PRINT,
  instructions.SET,
  42,
  instructions.PRINT,
  instructions.ADD,
  instructions.PRINT,
  instructions.JMP,
  7,
  instructions.RET,
];

function executeProgram(program) {
  let pointer = 0; // Указатель на текущую инструкцию
  let stack = []; // Стек для хранения значений

  while (pointer < program.length) {
    const instruction = program[pointer];
    console.log(`Выполняется инструкция с кодом: ${instruction}`);

    switch (instruction) {
      case instructions.SET:
        stack.push(program[++pointer]); // Следующее значение после инструкции SET добавляем в стек
        console.log("stack:", stack);
        break;
      case instructions.PRINT:
        console.log("Текущее состояние стека:", stack);
        break;
      case instructions.ADD:
        let a = stack.pop();
        console.log("a", a);
        let b = stack.pop();
        console.log("b", b);
        stack.push(a + b); // Складываем два последних значения и кладем результат обратно в стек
        console.log("Стек после операции ADD:", stack);
        break;
      case instructions.IF:
        let conditionValue = stack.pop();
        console.log("condidtion value:", conditionValue);
        if (conditionValue > 50) {
          console.log("Успех");
          pointer = 32;
        } else {
          pointer = 8;
        }
        break;
      case instructions.JMP:
        pointer = program[++pointer] - 1;
        break;
      case instructions.RET:
        return stack.pop(); // Возвращаем значение суммы
    }

    pointer++; // Переходим к следующей инструкции
  }
}

executeProgram(program);
