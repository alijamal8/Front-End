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
import { useAuthStore } from "@/stores/authStore";
import { RegisterSchema } from "@/validations/auth";
import { useState } from "react";
import VaildationError from "@/components/auth/validationError";
import { authService } from "@/services/api/auth";
import GuestOnlyRoute from "@/components/auth/GuestOnlyRoute";
import { useParams } from "next/navigation";
import { useTranslations } from "next-intl";
import Link from "next/link";

export default function RegisterPage() {
  const t = useTranslations("auth.register");
  const params = useParams();
  const locale = typeof params?.locale === "string" ? params.locale : "ar";
  const { registerForm, setRegisterForm, resetRegisterForm } = useAuthStore();
  const [clientError, setClientError] = useState("");

  async function hanleForm(e: React.FormEvent) {
    e.preventDefault();
    const validation = RegisterSchema.safeParse(registerForm);

    if (validation.success) {
      authService.register(registerForm);

      resetRegisterForm();
      setClientError("");
    } else {
      setClientError(() => validation.error.issues[0].message);
    }
  }

  return (
    <GuestOnlyRoute>
      <Card className="w-full max-w-lg mx-auto mt-8 max-sm:max-w-sm max-sm:my-25 max-lg:mt-35 2xl:mt-25">
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
                <Label htmlFor="name">{t("name")}</Label>
                <Input
                  id="name"
                  type="name"
                  placeholder={t("namePlaceholder")}
                  required
                  value={registerForm.name}
                  onChange={(e) => setRegisterForm("name", e.target.value)}
                />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="name">{t("phone")}</Label>
                <Input
                  id="phone number"
                  type="phone number"
                  placeholder={t("phonePlaceholder")}
                  required
                  value={registerForm.phone}
                  onChange={(e) => setRegisterForm("phone", e.target.value)}
                />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="email">{t("email")}</Label>
                <Input
                  id="new-email"
                  name="new-email"
                  type="email"
                  placeholder="m@example.com"
                  required
                  autoComplete="off"
                  value={registerForm.email}
                  onChange={(e) => setRegisterForm("email", e.target.value)}
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
                  value={registerForm.password}
                  onChange={(e) => setRegisterForm("password", e.target.value)}
                />
              </div>
            </div>
            {clientError && (
              <VaildationError type="error" message={clientError} />
            )}
          </form>
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
            {t("hasAccount")}{" "}
            <Link
              href={`/${locale}/login`}
              className="ml-auto inline-block text-sm underline-offset-4 hover:underline text-purple-800 font-bold"
            >
              {t("goLogin")}
            </Link>
          </CardDescription>
        </CardFooter>
      </Card>
      <Separator className="mt-5 max-w-7xl mx-auto max-sm:max-w-sm max-lg:max-w-xl" />
      <Footer />
    </GuestOnlyRoute>
  );
}
