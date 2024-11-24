function runLirik() {
    const lirik = [
      ["The same song", 0.1],
      ["on repeat...", 0.1],
      ["You can call me anything you want,", 0.1],
      ["It's fine,", 0.1],
      ["by me...", 0.1],
      ["Number two,", 0.1],
      ["out of three...", 0.1],
      ["He says that it's his favourite...", 0.1],
      ["and I can't disagree :(", 0.1],
    ];
  
    const delay = [0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9];
  
    console.log("\n == Anything You Want ==");
    setTimeout(() => {
      printLyrics(0); // Start printing lyrics after a 2 second delay
    }, 2000);
  
    function printLyrics(i) {
      if (i >= lirik.length) {
        console.log("// code by odli yak");
        return; // End the function when all lyrics have been printed
      }
  
      const [rowSong, delayStr] = lirik[i];
      let charIndex = 0;
  
      function printCharacter() {
        if (charIndex < rowSong.length) {
          process.stdout.write(rowSong[charIndex]);
          charIndex++;
          setTimeout(printCharacter, delayStr * 1000); // Delay between characters
        } else {
          console.log(""); // Move to next line after a row is finished
          setTimeout(() => {
            printLyrics(i + 1); // Move to the next row after a delay
          }, delay[i] * 1000); // Delay between rows
        }
      }
  
      printCharacter(); // Start printing a row
    }
  }
  
  // Start the process
  runLirik();
  