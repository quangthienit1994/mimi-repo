export const DB = {
  mongo: {
    connect: "mongodb://localhost:27017",
    name: "test-on-event",
    name2: "test-on-event2",
    options: {
      useCreateIndex: true,
      useNewUrlParser: true,
      useFindAndModify: true
    }
  }
};
