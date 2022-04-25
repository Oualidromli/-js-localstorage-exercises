function exercise07() {
  let users = [
    {
      name: 'alex',
      age: 24,
    },
    {
      name: 'ana',
      age: 34,
    },
  ];

  users = JSON.stringify(users);
  localStorage.setItem('ex-07-users', users);
}

export default exercise07;
