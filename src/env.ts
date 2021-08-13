export const DB = {
  mongo: {
    connect: "mongodb://0.0.0.0:27017",
    name: "test-on-event",
    name2: "test-on-event2",
    options: {
      useCreateIndex: true,
      useNewUrlParser: true,
      useFindAndModify: true,
    }
  }
};
