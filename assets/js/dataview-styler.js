document.addEventListener('DOMContentLoaded', function () {
    // Find all list items with Dataview-style syntax
    const dataviewItems = document.querySelectorAll('li');

    dataviewItems.forEach(item => {
        const text = item.textContent;
        // Check if it contains Dataview syntax
        if (text.includes('::')) {
            // Extract the key and value
            const match = text.match(/\[(.*?)::(.*?)\]/);
            if (match) {
                const key = match[1].trim();
                const value = match[2].trim();

                // Create new styled elements
                const keySpan = document.createElement('span');
                keySpan.className = 'dataview-key';
                keySpan.textContent = key;

                const valueSpan = document.createElement('span');
                valueSpan.className = 'dataview-value';
                valueSpan.textContent = value;

                // Clear the item and add the styled elements
                item.innerHTML = '';
                item.appendChild(keySpan);
                item.appendChild(valueSpan);
                item.className = 'dataview-item';
            }
        }
    });
});