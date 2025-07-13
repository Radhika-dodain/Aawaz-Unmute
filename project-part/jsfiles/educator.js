  function checkMCQ() {
      const options = document.getElementsByName('mcq');
      let selected;
      for (let o of options) {
        if (o.checked) selected = o.value;
      }
      if (selected === "3") {
        document.getElementById("mcq-result").innerText = "✅ Correct!";
      } else {
        document.getElementById("mcq-result").innerText = "❌ Nope.";
      }
    }

     function checkMCQ2() {
      const options = document.getElementsByName('mcq2');
      let selected;
      for (let o of options) {
        if (o.checked) selected = o.value;
      }
      if (selected === "3") {
        document.getElementById("mcq-result2").innerText = "✅ Correct!";
      } else {
        document.getElementById("mcq-result2").innerText = "❌ Nope.";
      }
    }