import {cn} from "@/lib/utils.ts";
import {Button} from "@Components/ui/button.tsx";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@Components/ui/card.tsx";
import { Input } from "@Components/ui/input.tsx"
import { Label } from "@Components/ui/label.tsx"
import {Link} from "react-router";

const LoginForm = ({
  className,
  ...props
}: React.ComponentProps<"div">) => {
  return (
    // <div className="w-full md:w-1/3 lg:w-1/3">
    <div className={cn("flex flex-col gap-6", className)} {...props}>

      <Card>
        <CardHeader>
          <CardTitle>Login to your account</CardTitle>
          <CardDescription>
            Enter your email below to login to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="flex flex-col gap-6">
              <div className="grid gap-3">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                />
              </div>
              <div className="grid gap-3">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                  {/*<a
                    href="#"
                    className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                  >
                    Forgot your password?
                  </a>*/}
                </div>
                <Input id="password" type="password" required />
              </div>
              <div className="flex flex-col gap-3">
                <Button type="submit" className="w-full">
                  Login
                </Button>
                {/*<Button variant="outline" className="w-full">
                  Login with Google
                </Button>*/}
              </div>
            </div>
            <div className="mt-4 text-center text-sm">
              Don&apos;t have an account?{" "}
              <Link to="/auth/register" className="underline underline-offset-4">
                Sign up
              </Link>
            </div>
          </form>
        </CardContent>
      </Card>

    </div>
  )
}

export default LoginForm;