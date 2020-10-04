function arithmeticOperation (operator, operand1, operand2) {
    if (operator == '+') {
        return operand1 + operand2;
    }
    else if (operator == '/') {
        return operand1 / operand2;
    }
    else if (operator == '*') {
        return operand1 * operand2;
    }
}

arithmeticOperation('*', 3, 2);