let obj = {
  title: "title",
  members: [1, 2, 3, 4],
  showMembers() {
    this.members.forEach(function (member) {
      console.log(this.title + ": " + member);
    });
  },
};

//with arrow syntax

let obj_with_arrow = {
  title: "title",
  members: [1, 2, 3, 4],
  showMembers() {
    this.members.forEach((member) => {
      console.log(this.title + ": " + member); //title :1 title :2 title:3 title :4
    });
  },
};

obj.showMembers(); //undefined :1 undefined :2 undefined :3undefined :4
obj_with_arrow.showMembers();
