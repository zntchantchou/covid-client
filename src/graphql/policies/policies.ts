
export const policies = {
  User: {
    fields: {
      status: {
        read() { // Read function for Rocket.description
          return 'busy';
        }
      },
    },
  },
}