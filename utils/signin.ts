import { signIn } from "@/actions/signin";
import { loginSchema, LoginUserState } from "@/types/types";
import { redirect } from "next/navigation";
import { toast } from "sonner";



export async function onSubmitSignIn (_: LoginUserState, form: FormData): Promise<LoginUserState>{
  const result = loginSchema.safeParse(Object.fromEntries(form.entries()));
  if (!result.success) {
    toast.error("Invalid login data");
    return {
      user: null,
      success: false,
      error: "Invalid login data"
    };
  }

  const { email, password } = result.data!;
  const { success, message, user } = await signIn(email, password);

  if(!success) {
    toast.error(message)
    return {user: null, success: success, error: message}
  }
  redirect("/profile")
}