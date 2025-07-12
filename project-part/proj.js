  const role = localStorage.getItem('userRole');

    if (role) {
      document.getElementById('role-select-modal').style.display = 'none';
      showSections(role);
    }

    function resetRole() {
  localStorage.removeItem('userRole');
  location.reload(); // reloads the page so role selection appears again
}


    function setRole(selectedRole) {
      localStorage.setItem('userRole', selectedRole);
      document.getElementById('role-select-modal').style.display = 'none';
      showSections(selectedRole);
    }

    // function showSections(role) {
    //   document.getElementById('audio-section').classList.remove('hidden');

    //   if (role === 'listener') {
    //     document.getElementById('feedback-form').classList.remove('hidden');
    //   } else if (role === 'educator') {
    //     document.getElementById('mcq-section').classList.remove('hidden');
    //   } else if (role === 'ngo') {
    //     document.getElementById('ngo-section').classList.remove('hidden');
    //   }
    // }

    // function checkMCQ() {
    //   const options = document.getElementsByName('mcq');
    //   let selected;
    //   for (let o of options) {
    //     if (o.checked) selected = o.value;
    //   }
    //   if (selected === "2") {
    //     document.getElementById("mcq-result").innerText = "✅ Correct!";
    //   } else {
    //     document.getElementById("mcq-result").innerText = "❌ Nope. That's actually a myth.";
    //   }
    // }