const characteristics = (characteristics = [], action) => {
  switch (action.type) {
    case 'CHANGE_CARAC' :
      return characteristics.map((currentChar) => {
        if(currentChar.title === action.char.title){
          currentChar.number = action.value;
        }
        return currentChar;
      });
    case 'GENERATE_CHARS':
      return characteristics.map((currentChar) => {
        currentChar.number = 0;
        currentChar.number +=  Math.floor(Math.random() * (6)) + 1;
        currentChar.number += 7;
        return currentChar;
      });
    default:
      return characteristics;
  }
};

export default characteristics;