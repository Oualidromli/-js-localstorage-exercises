function exercise03() {
  // Complete the code of the function
  let h2 = document.getElementById('name');
  localStorage.setItem('ex-03-city', 'Madrid');

  h2.textContent = localStorage.getItem('ex-03-city');
  localStorage.removeItem('ex-03-city');
}

export default exercise03;
