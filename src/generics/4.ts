type User = {
    name: string;
    surname: string;
    email: string;
    password: string;
  };
  
  function createOrUpdateUser(initialValues: Partial<User>): User {
    const defaultUser: User = {
      name: "Hanna",
      surname: "Tkachenko",
      email: "",
      password: "",
    };
    return { ...defaultUser, ...initialValues };
  }
  
  createOrUpdateUser({
    email: "hanna.tkachenko@mail.com",
    password: "hanna123",
  });