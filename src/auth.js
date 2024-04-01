// auth.js

const fakeAuthService = {
  login: async (username, password) => {
    // Simulating login with a fake delay
    await new Promise((resolve) => setTimeout(resolve, 1000));
    if (username === 'user' && password === 'password') {
      return { success: true, token: 'fake-auth-token' };
    } else {
      return { success: false, message: 'Invalid username or password' };
    }
  },
  register: async (username, password) => {
    // Simulating registration with a fake delay
    await new Promise((resolve) => setTimeout(resolve, 1000));
    // For simplicity, let's assume registration is always successful
    return { success: true };
  },
};

export default fakeAuthService;
