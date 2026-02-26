"use client";
import React from "react";
import Footer from "@/components/auth/Footer";
import { ModeToggle } from "@/components/global/ModeToggle";
import { Button } from "@/components/ui/button";
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
import { useAuthStore } from "@/stores/authStore";
import { loginSchema } from "@/validations/auth";
import { useState } from "react";
import VaildationError from "@/components/auth/validationError";
import { authService } from "@/services/api/auth";
import Link from "next/link";
import { useParams } from "next/navigation";
import GuestOnlyRoute from "@/components/auth/GuestOnlyRoute";
import { useTranslations } from "next-intl";

function LoginPage() {
  const t = useTranslations("auth.login");
  const params = useParams();
  const locale = typeof params?.locale === "string" ? params.locale : "ar";
  const { loginForm, setLoginForm, resetLoginForm } = useAuthStore();
  const [clientError, setClientError] = useState("");

  async function hanleForm(e: React.FormEvent) {
    e.preventDefault();
    const validation = loginSchema.safeParse(loginForm);

    if (validation.success) {
      authService.login(loginForm);
      resetLoginForm();
      setClientError("");
    } else {
      setClientError(() => validation.error.issues[0].message);
    }
  }

  return (
    <GuestOnlyRoute>
      <Card className="w-full max-w-lg mx-auto mt-30 max-sm:max-w-sm max-sm:my-25 max-lg:mt-35 2xl:mt-25">
        <CardHeader>
          <CardTitle className="text-4xl font-bold max-sm:text-3xl">
            {t("title")}
          </CardTitle>
          <CardDescription className="text-sm text-black my-2 dark:text-white max-sm:text-xs">
            {t("description")}
          </CardDescription>
          <CardAction>
            <ModeToggle />
          </CardAction>
        </CardHeader>
        <CardContent>
          <form autoComplete="off">
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="email">{t("email")}</Label>
                <Input
                  id="new-email"
                  name="new-email"
                  type="email"
                  placeholder="m@example.com"
                  required
                  autoComplete="off"
                  value={loginForm.email}
                  onChange={(e) => setLoginForm("email", e.target.value)}
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">{t("password")}</Label>
                </div>
                <Input
                  id="new-password"
                  name="new-password"
                  type="password"
                  required
                  autoComplete="off"
                  value={loginForm.password}
                  onChange={(e) => setLoginForm("password", e.target.value)}
                />
              </div>
            </div>
          </form>
          {clientError && (
            <VaildationError type="error" message={clientError} />
          )}
        </CardContent>

        <CardFooter className="flex-col gap-2">
          <Button
            onClick={hanleForm}
            type="submit"
            className="w-full bg-purple-800 dark:text-white hover:bg-purple-600"
          >
            {t("submit")}
          </Button>

          <CardDescription className="text-sm text-black my-2 dark:text-white">
            {t("noAccount")}{" "}
            <Link
              href={`/${locale}/register`}
              className="ml-auto inline-block text-sm underline-offset-4 hover:underline text-purple-800 font-bold"
            >
              {t("goRegister")}
            </Link>
          </CardDescription>
        </CardFooter>
      </Card>
      <Separator className="mt-15 max-w-7xl mx-auto max-sm:max-w-sm max-lg:max-w-xl" />
      <Footer />
    </GuestOnlyRoute>
  );
}

export default LoginPage;
