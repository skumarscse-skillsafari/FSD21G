export function getStudentsInformation() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        name: "SkillSafari",
        dept: "CSE",
        block: "CSE block"
      });
    }, 2000);
  });
}
