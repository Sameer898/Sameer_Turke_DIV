document.addEventListener('DOMContentLoaded', () => {
    const boxes = document.querySelectorAll('.box');
    const messageDiv = document.getElementById('message');

    boxes.forEach(box => {
        box.addEventListener('click', () => {
            const boxId = box.id;
            const boxNumber = parseInt(boxId.replace('div', ''));

            const rowIndex = Math.floor((boxNumber - 1) / 12);  // Row index (0-3)
            const colIndex = (boxNumber - 1) % 12;              // Column index (0-11)

            // Reset previous selections
            boxes.forEach(b => {
                b.classList.remove('selected');
                b.classList.remove('selected-row');
                b.classList.remove('selected-column');
            });

            // Select clicked box
            box.classList.add('selected');

            // Change row's divs (background-color)
            for (let i = rowIndex * 12; i < (rowIndex + 1) * 12; i++) {
                boxes[i].classList.add('selected-row');
            }

            // Change column's divs (background-color)
            for (let i = colIndex; i < 48; i += 12) {
                boxes[i].classList.add('selected-column');
            }

            // Display the selected box message
            messageDiv.textContent = `${boxId} is selected`;
        });
    });
});
