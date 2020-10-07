class Human {
  constructor(age, gender) {
    this.age = age;
    this.gender = gender;
  }

  setLanguage(array) {
    this.language = array[Math.floor(Math.random() * 10)];
  }

  talk() {
    if (this.language) {
      let gender = this.gender === "man" ? "guy's" : "girl's";

      return "This " + gender + " mother tongue is " + this.language;
    } else {
      return "It is only a baby and can not talk.";
    }
  }
}

export default Human;
