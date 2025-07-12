  function checkMCQ() {
      const options = document.getElementsByName('mcq');
      let selected;
      for (let o of options) {
        if (o.checked) selected = o.value;
      }
      if (selected === "2") {
        document.getElementById("mcq-result").innerText = "✅ Correct!";
      } else {
        document.getElementById("mcq-result").innerText = "❌ Nope. That's actually a myth.";
      }
    }