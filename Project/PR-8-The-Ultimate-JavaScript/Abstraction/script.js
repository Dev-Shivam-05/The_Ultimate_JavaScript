class User {
  #adminName = "shivam";
  #adminPassword = 8514;
  #users = [
    { user_name_1: "sneh", user_password_1: 8611 },
    { user_name_2: "abhijit", user_password_2: 8380 },
    { user_name_3: "julu vaii", user_password_3: 9302 },
    { user_name_4: "nurul", user_password_4: 8133 },
    { user_name_5: "pratham", user_password_5: 8134 },
  ];

  constructor(username, password) {
    this.username = username;
    this.password = password;
    this.#isAdmin();
  }

  #isAdmin() {
    if (this.#adminName === this.username) {
      if (this.#adminPassword === this.password) {
        console.log("Welcome Admin! We Are Waiting For Your Command.");
      } else {
        console.log("Admin Password Is Wrong.");
      }
    } else {
      this.#isUser();
    }
  }

  #isUser(username, password) {
    for (let user of this.#users) {
      const keys = Object.keys(user);

      const userName = user[keys[0]];
      const userPassword = user[keys[1]];

      if (userName === this.username && userPassword === this.password) {
        console.log("Welcome User! How Can I Help You.");
        return;
      }
    }
    console.log("Username or Password is incorrect.");
  }
}

let user_obj = new User("shivam", 8514);