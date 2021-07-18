const createElem = (col:any) => {
    const elem = document.createElement('div');
    elem.classList.add('board');
    elem.style.display = 'inline-block';
    elem.style.marginLeft = '10px';
    elem.style.height = '6px';
    elem.style.width = '6px';
    elem.style['backgroundColor'] =
      col === 0
        ? 'white'
        : col === 1
        ? 'cornflowerblue'
        : col === 2
        ? 'gray'
        : 'silver';
    elem.style['borderRadius'] = '90%';
    return elem;
  };
  
  export const paint = (game: number[][], lives:any, score:any) => {
    document.body.innerHTML = `Lives: ${lives}, Score: ${score}`;
  
    game.forEach(row => {
      const rowContainer = document.createElement('div');
      row.forEach(col => rowContainer.appendChild(createElem(col)));
      document.body.appendChild(rowContainer);
    });
  };