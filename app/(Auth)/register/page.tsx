"use client";
import Footer from "@/components/auth/Footer";
import { ModeToggle } from "@/components/global/ModeToggle";
import { Button } from "@/components/ui/button";
import { FaGoogle } from "react-icons/fa";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { useRegisterStore } from "@/stores/authStore";
import { RegisterSchema } from "@/validations/auth";
import { useState } from "react";
import VaildationError from "@/components/auth/validationError";
import { authService } from "@/services/auth/authApi";

export default function RegisterPage() {
  const { form, setForm, resetForm } = useRegisterStore();
  const [clientError, setClientError] = useState("");

  async function hanleForm(e: React.FormEvent) {
    e.preventDefault();
    const validation = RegisterSchema.safeParse(form);

    if (validation.success) {
      authService.register(form)
      
      resetForm();
      setClientError("");
    } else {
      setClientError(() => validation.error.issues[0].message);
    }
  }

  return (
    <>
      <Card className="w-full max-w-lg mx-auto mt-8 max-sm:max-w-sm max-sm:my-25 max-lg:mt-35 2xl:mt-25">
        <CardHeader>
          <CardTitle className="sm:text-4xl font-bold max-sm:text-3xl">
            Sing up
          </CardTitle>
          <CardDescription className="text-sm text-black my-2 dark:text-white max-sm:text-xs">
            Enter your details to create your account and get started
          </CardDescription>
          <CardAction>
            <ModeToggle />
          </CardAction>
        </CardHeader>
        <CardContent>
          <form autoComplete="off">
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  type="name"
                  placeholder="Enter Your Name"
                  required
                  value={form.name}
                  onChange={(e) => setForm("name", e.target.value)}
                />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="name">Phone Number</Label>
                <Input
                  id="phone number"
                  type="phone number"
                  placeholder="Enter Your Phone Number"
                  required
                  value={form.phone}
                  onChange={(e) => setForm("phone", e.target.value)}
                />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="new-email"
                  name="new-email"
                  type="email"
                  placeholder="m@example.com"
                  required
                  autoComplete="off"
                  value={form.email}
                  onChange={(e) => setForm("email", e.target.value)}
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                  <a
                    href="#"
                    className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                  >
                    Forgot your password?
                  </a>
                </div>
                <Input
                  id="new-password"
                  name="new-password"
                  type="password"
                  required
                  autoComplete="off"
                  value={form.password}
                  onChange={(e) => setForm("password", e.target.value)}
                />
              </div>

              {clientError && (
                <VaildationError type="error" message={clientError} />
              )}
            </div>
          </form>
        </CardContent>

        <CardFooter className="flex-col gap-2">
          <Button
            onClick={hanleForm}
            type="submit"
            className="w-full bg-purple-800 dark:text-white hover:bg-purple-600"
          >
            Sing up
          </Button>
          <Button variant="outline" className="w-full">
            Login with Google <FaGoogle />
          </Button>

          <CardDescription className="text-sm text-black my-2 dark:text-white">
            Already have an account?{" "}
            <a
              href="login"
              className="ml-auto inline-block text-sm underline-offset-4 hover:underline text-purple-800 font-bold"
            >
              Login
            </a>
          </CardDescription>
        </CardFooter>
      </Card>
      <Separator className="mt-10 max-w-7xl mx-auto max-sm:max-w-sm max-lg:max-w-xl" />
      <Footer />
    </>
  );
}
