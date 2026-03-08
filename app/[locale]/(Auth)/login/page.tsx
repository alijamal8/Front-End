"use client";
import React from "react";
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
      {/* Container Full Height */}
      <div className="relative min-h-screen flex items-center justify-center p-4 overflow-hidden bg-background">
        
        {/* Animated Gradient Background */}
        <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
          <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-purple-800 to-blue-500 opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" style={{ clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" }} />
        </div>
        <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
          <div className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-blue-500 to-purple-800 opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]" style={{ clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" }} />
        </div>

        {/* Card Component */}
        <Card className="relative z-10 w-full max-w-[520px] bg-background/60 backdrop-blur-2xl border-white/10 dark:border-white/5 shadow-[0_8px_30px_rgb(0,0,0,0.12)] dark:shadow-[0_8px_30px_rgb(255,255,255,0.04)] overflow-hidden rounded-3xl">
          {/* Top highlight bar */}
          <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-purple-600 via-blue-500 to-purple-600" />
          
          <CardHeader className="pt-10 pb-4 text-center relative">
            <div className="absolute right-6 top-6 rtl:left-6 rtl:right-auto">
              <ModeToggle />
            </div>
            
            <CardTitle className="text-3xl font-extrabold tracking-tight mt-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-500 dark:from-purple-400 dark:to-blue-400">
                {t("title")}
              </span>
            </CardTitle>
            <CardDescription className="text-base text-muted-foreground mt-2 font-medium">
              {t("description")}
            </CardDescription>
          </CardHeader>

          <CardContent className="px-8 flex-col gap-6">
            <form autoComplete="off" className="space-y-5">
              <div className="space-y-2 relative group">
                <Label htmlFor="new-email" className="font-bold text-foreground/80 transition-colors group-focus-within:text-purple-600 dark:group-focus-within:text-purple-400">
                  {t("email")}
                </Label>
                <div className="relative">
                  <Input
                    id="new-email"
                    name="new-email"
                    type="email"
                    placeholder="m@example.com"
                    required
                    autoComplete="off"
                    value={loginForm.email}
                    onChange={(e) => setLoginForm("email", e.target.value)}
                    className="peer h-12 bg-background/50 border-border/50 focus-visible:border-purple-500 focus-visible:ring-purple-500/20 transition-all rounded-xl pl-4 pr-10 shadow-sm"
                  />
                </div>
              </div>

              <div className="space-y-2 relative group">
                <div className="flex items-center justify-between">
                  <Label htmlFor="new-password" className="font-bold text-foreground/80 transition-colors group-focus-within:text-purple-600 dark:group-focus-within:text-purple-400">
                    {t("password")}
                  </Label>
                </div>
                <div className="relative">
                  <Input
                    id="new-password"
                    name="new-password"
                    type="password"
                    required
                    autoComplete="off"
                    value={loginForm.password}
                    onChange={(e) => setLoginForm("password", e.target.value)}
                    className="peer h-12 bg-background/50 border-border/50 focus-visible:border-purple-500 focus-visible:ring-purple-500/20 transition-all rounded-xl pl-4 pr-10 shadow-sm"
                  />
                </div>
              </div>
            </form>

            {clientError && (
              <div className="mt-4 animate-in fade-in zoom-in duration-300">
                <VaildationError type="error" message={clientError} />
              </div>
            )}
          </CardContent>

          <CardFooter className="px-8 pb-10 flex flex-col gap-5 mt-2">
            <Button
              onClick={hanleForm}
              type="submit"
              className="w-full h-12 text-base font-bold text-white bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 shadow-lg shadow-purple-500/25 transition-all rounded-xl border-0 hover:scale-[1.02] active:scale-[0.98]"
            >
              {t("submit")}
            </Button>

            <div className="text-sm font-medium text-muted-foreground text-center">
              {t("noAccount")}{" "}
              <Link
                href={`/${locale}/register`}
                className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-400 dark:to-blue-400 hover:opacity-80 transition-opacity ml-1"
              >
                {t("goRegister")}
              </Link>
            </div>
          </CardFooter>
        </Card>

       
    
      </div>
    </GuestOnlyRoute>
  );
}

export default LoginPage;
