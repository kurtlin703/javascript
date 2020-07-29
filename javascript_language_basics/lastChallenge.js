//start by creating the john object

let john = {
  fullName: "john smith",
  bills: [124, 48, 268, 180, 42],
  calcTips: function () {
    this.tips = [];
    this.finalAmount = [];

    for (let i = 0; i < this.bills.length; i++) {
      let percentage;
      let bill = this.bills[i]

      if (bill < 50) {
        percentage = 0.2;
      } else if(bill >= 50 && bill < 200) {
        percentage = 0.15;
      }else
      { percentage = .1}
      this.tips[i] = bi
    }
  },
};
