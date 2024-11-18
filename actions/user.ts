"use server";
import { registerFormSchema } from "@/utils/register-validator";
import { ZodError } from "zod";
import { db } from "@/lib/db";
import { hash } from "bcryptjs";
import { userExist } from "@/utils/userExist";
import { signIn } from "@/auth";

export const registerUser = async (formData: FormData) => {
  // Extracting data from formData
  const fullname = formData.get("fullname") as string;
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  const phone = formData.get("phone") as string;

  const userData = {
    fullname,
    email,
    password,
    phone,
  };

  try {
    // Validate user data with Zod
    const validatedUser = registerFormSchema.parse(userData);

    // Check if user exists in the database
    const userExisting = await userExist(validatedUser.email)

    if (userExisting) {
      return {
        success: false,
        error: "User already exists.",
      };
    
    }

    // Hash the password
    const hashedPassword = await hash(validatedUser.password, 10);

    // Create a new user with the hashed password
    const user = await db.user.create({
      data: {
        ...validatedUser,
        password: hashedPassword,
      },
    });

    return { success: true, message: "User registered successfully." };
  } catch (error) {
    if (error instanceof ZodError) {
      return { success: false, errors: error.flatten().fieldErrors };
    } else {
      console.error("Unexpected error:", error);
      return { success: false, message: "An unexpected error occurred." };
    }
  }
};



export const login = async(formData:FormData)=>{
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  try {
    await signIn("credentials", {
      redirect: false,
      callbackUrl: "/",
      email,
      password,
    });
     return { success:true , message:"User Logged in successfully"}
    
  } catch (error) {
    if (error instanceof ZodError) {
      return { success: false, errors: error.flatten().fieldErrors };
    } else {
      console.error("Unexpected error:", error);
      return { success: false, error: "An unexpected error occurred." };
    }
  }
}


export const getAllUsers = async () => {
  try {
    const users = await db.user.findMany();
    return users; 
  } catch (error) {
    console.error("Unexpected error:", error);
    return { success: false, error: "An unexpected error occurred." };
  }
};




export const getSingleUser = async(id:string)=>{
  try {
     const user = await db.user.findFirst({
      where:{
        id
      }
     })
     if(!user){
      return { success: false, error: "An unable to find user" };
     }
     return user
  } catch (error) {
    console.error("Unexpected error:", error);
    return { success: false, error: "An unable to find user" };
  }
}



export const updateUserAmount = async (id: string, amount: number, profit:number) => {
  try {
    // Update user's amount in the database
    const updatedUser = await db.user.update({
      where: { id },
      data: {
        amount,
        profit
      }
    });

    // Return success response with updated user data
    return { success: true, message: "User amount updated successfully", user: updatedUser };
  } catch (error) {
    console.error("Error updating user amount:", error);
    return { success: false, error: "Unable to update user amount." };
  }
};



export const getUserById = async(id:string)=>{
  try {
     const user = await db.user.findFirst({
      where :{
        id
      }
     })
     return user
  } catch (error) {
     console.log(error)
     return { success: false, error: "Unable to update user amount." };
  }
}