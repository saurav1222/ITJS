let myObj = {
  type: "ball",
  color: "green",
  delayTime() {
    setTimeout(
      function () {
        console.log(`The ${this.type}  is of color ${this.color}`);
      }.bind(this),
      1000
    );
  },
};

myObj.delayTime();
