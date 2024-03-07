let company = {
  sales: [
    { name: 'hampus', salary: 30000 },
    { name: 'marica', salary: 20000 },
  ],
  development: {
    sites: [
      { name: 'Peter', salary: 25000 },
      { name: 'Alex', salary: 18000 },
    ],
    internals: [{ name: 'Jack', salary: 13000 }],
  },
};

function sumSalaries(department) {
  if (Array.isArray(department)) {
    return department.reduce((prev, current) => prev + current.salary, 0);
  }
}
