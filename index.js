document.addEventListener('DOMContentLoaded', () => {
    const boxes = document.querySelectorAll('.box');
    const messageDiv = document.getElementById('message');

    boxes.forEach(box => {
        box.addEventListener('click', () => {
            const boxId = box.id;
            const boxNumber = parseInt(boxId.replace('div', ''));

            // Assume 12 columns for consistent row/column indexing
            const columns = 12;

            // Calculate row and column indices based on a 12-column grid
            const rowIndex = Math.floor((boxNumber - 1) / columns);  // Row index (dynamic based on column count)
            const colIndex = (boxNumber - 1) % columns;              // Column index (dynamic based on column count)

            // Reset previous selections
            boxes.forEach(b => {
                b.classList.remove('selected');
                b.classList.remove('selected-row');
                b.classList.remove('selected-column');
            });

            // Select clicked box
            box.classList.add('selected');

            // Change row's divs background-color
            for (let i = rowIndex * columns; i < (rowIndex + 1) * columns; i++) {
                boxes[i].classList.add('selected-row');
            }

            // Change column's divs background-color
            for (let i = colIndex; i < 48; i += columns) {
                boxes[i].classList.add('selected-column');
            }

            // Display the selected box message
            messageDiv.textContent = `${boxId} is selected`;
        });
    });
});
