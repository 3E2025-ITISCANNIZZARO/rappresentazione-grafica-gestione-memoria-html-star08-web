document.addEventListener("DOMContentLoaded", () => {
    const heap = document.getElementById("heap");
    const stack = document.getElementById("stack");
    const growHeapButton = document.getElementById("growHeap");
    const shrinkHeapButton = document.getElementById("shrinkHeap");
    const growStackButton = document.getElementById("growStack");
    const shrinkStackButton = document.getElementById("shrinkStack");
    
    growHeapButton.addEventListener("click", () => {
        const block = document.createElement("div");
        block.classList.add("heap-block");
        block.textContent = "Blocco Heap";
        heap.appendChild(block);
    });
    
    shrinkHeapButton.addEventListener("click", () => {
        const blocks = heap.getElementsByClassName("heap-block");
        if (blocks.length > 0) {
            heap.removeChild(blocks[blocks.length - 1]);
        }
    });
    
    growStackButton.addEventListener("click", () => {
        const block = document.createElement("div");
        block.classList.add("stack-block");
        block.textContent = "Frame Stack";
        stack.appendChild(block);
    });
    
    shrinkStackButton.addEventListener("click", () => {
        const blocks = stack.getElementsByClassName("stack-block");
        if (blocks.length > 0) {
            stack.removeChild(blocks[blocks.length - 1]);
        }
    });
});