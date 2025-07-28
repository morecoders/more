import { signUp } from "@/actions/signup";
import { RegisterUserState, schema } from "@/types/types";
import { redirect } from "next/navigation";
import { toast } from "sonner";

export async function onSubmitSignUp(_: RegisterUserState, form: FormData): Promise<RegisterUserState> {
  const data = Object.fromEntries(form.entries());

  const parsed = schema.safeParse(data)

  if(!parsed.success) {
    toast.error("Validation failed...")
    return {success: false, error: "Validation failed"}
  }

  const {
    email,
    password,
    firstName,
    lastName,
    occupation,
    age
  } = parsed.data
  // Attempt sign up
  const { success, message} = await signUp(email, password, firstName, lastName, occupation, age);
   
  if(!success){
    return {success: false, error: message || "Validation failed"}
  } 

  redirect("/")
}
