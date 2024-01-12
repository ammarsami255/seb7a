let clickCount = 0;

        function IncCounter() {
            clickCount++;
            document.getElementById('counter').innerText = clickCount;
        }

        function reset() {
            document.getElementById('counter').innerText = 0;
        }