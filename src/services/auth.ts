import { User } from "../types";

export const registerUser = async (
  userData: Omit<User, "id">
): Promise<User> => {
  // Simulate API call
  const newUser: User = {
    ...userData,
    id: Date.now().toString(), // Generate a unique ID
  };

  // Store in localStorage
  const users = JSON.parse(localStorage.getItem("users") || "[]");
  users.push(newUser);
  localStorage.setItem("users", JSON.stringify(users));

  return newUser;
};

export const loginUser = async (
  email: string,
  password: string
): Promise<User> => {
  // Get users from localStorage
  const users: User[] = JSON.parse(localStorage.getItem("users") || "[]");
  const user = users.find((u) => u.email === email);

  if (!user) {
    throw new Error("User not found");
  }

  // In a real app, you would hash the password and compare properly
  if (password !== user.password) {
    throw new Error("Invalid password");
  }

  return user;
};

export const resetPassword = (email: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const user = users.find((u: User) => u.email === email);

    if (user) {
      // In a real application, send reset email
      // For demo, just log to console
      console.log("Password reset email sent to:", email);
      resolve();
    } else {
      reject(new Error("User not found"));
    }
  });
};
