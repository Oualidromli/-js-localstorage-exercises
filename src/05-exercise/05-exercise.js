function exercise05() {
  // Complete the code of the function
  let name = document.getElementById('name');
  if (!localStorage.getItem('ex-05-city')) {
    localStorage.setItem('ex-05-city', 'Barcelona');
  }
  name.textContent = localStorage.getItem('ex-05-city');
}

export default exercise05;
