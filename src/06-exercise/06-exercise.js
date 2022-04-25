function exercise06() {
  // Complete the code of the function
  let list = document.querySelector('.ex-list');
  let data = localStorage.getItem('ex-06-data');
  data = JSON.parse(data);

  data.forEach((element) => {
    let li = document.createElement('li');
    li.textContent = element.name;
    list.appendChild(li);
  });
}

export default exercise06;
