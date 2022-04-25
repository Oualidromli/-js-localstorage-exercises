function exercise08() {
  let user = {
    name: 'mark',
    age: 44,
  };

  let data = localStorage.getItem('ex-08-users');
  data = JSON.parse(data);

  data.push(user);
  data = JSON.stringify(data);
  localStorage.setItem('ex-08-users', data);
}

export default exercise08;
