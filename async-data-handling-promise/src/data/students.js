const students = {
  john: {
    id: 1,
    dept: "EEE",
    block: "A block"
  },
  jack: {
    id: 2,
    dept: "CSE",
    block: "B block"
  },
  mary: {
    id: 3,
    dept: "ECE",
    block: "C block"
  },
  skillsafari: {
    id: 4,
    dept: "IT",
    block: "D block"
  }
};

export function getStudentsInformation(name) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(students[name]);
    }, 1000);
  });
}
