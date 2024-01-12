let clickCount = 0;

        function IncCounter() {
            clickCount++;
            document.getElementById('counter').innerText = clickCount;
        }

        function reset() 
        clickCount=0;
            document.getElementById('counter').innerText = 0;
        }
