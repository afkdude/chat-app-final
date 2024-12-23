import createTokenAndSaveCookie from "../Jwt/generateToken.js";
import User from "../Models/User.model.js";
import bcrypt from "bcryptjs";


export const signup = async (req, res) => {
  try {
    const { name, email, password, confirmPassword } = req.body;

    if (password !== confirmPassword) {
      return res.status(400).json({ message: "Password Does not match" })
    }

    //checking if the user alreadye exists

    const user = await User.findOne({ email });

    if (user) {
      return res.status(400).json({ message: "User Already Exists" });
    }


    //hashing the password for security 
    const hashPassword = await bcrypt.hash(password, 10);
    const newUser = await new User({
      name,
      email,
      password: hashPassword,
    });
    await newUser.save();
    if (newUser) {
      createTokenAndSaveCookie(newUser._id, res);
      res.status(201).json({
        message: "User Registered Succesfully", user: {
          _id: newUser._id,
          name: newUser.name,
          email: newUser.email,
        },
      });

    }


  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}



export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Input validation
    if (!email || !password) {
      return res.status(400).json({ message: "Please provide email and password" });
    }

    // Find the user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not Found" });
    }

    // Compare passwords
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid Password" });
    }

    // Generate JWT and save it as a cookie
    createTokenAndSaveCookie(user._id, res);

    // Return success response
    res.status(200).json({
      message: "User logged in successfully",
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
      },
    });

  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};



export const logout = async (req, res) => {
  try {

    res.clearCookie('jwt');
    res.status(200).json({ message: "user logged out successfully" })

  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}