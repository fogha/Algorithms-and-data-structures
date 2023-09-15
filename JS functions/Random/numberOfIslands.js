function numberOfIslands(grid) {
  let countIslands = 0;

  for (let row in grid) {
    for (let column in grid[row]) {
      if (grid[row][column] === '1') {
        countIslands += 1;
        teraform(parseInt(row), parseInt(column), grid);
      }
    }
  }


  return countIslands
}

const teraform = (row, col, grid) => {
  if (grid[row] === undefined || grid[row][col] === undefined || grid[row][col] === '0') return;

  grid[row][col] = '0';

  teraform(row + 1, col, grid)
  teraform(row - 1, col, grid)
  teraform(row, col + 1, grid)
  teraform(row, col - 1, grid)
}