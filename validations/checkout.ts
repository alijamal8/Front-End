import z from "zod";

export type CheckoutValidationField =
  | "first_name"
  | "last_name"
  | "phone_number"
  | "address"
  | "city"
  | "payment_method"
  | "card_number"
  | "card_cvv"
  | "card_expiration_date";

export type CheckoutValidationErrors = Partial<
  Record<CheckoutValidationField, string>
>;

export const checkoutSchema = z
  .object({
    delivery_method: z.enum(["ship", "pickup"]),
    payment_method: z
      .string()
      .trim()
      .min(1, { message: "validation.payment_method_required" }),
    first_name: z
      .string()
      .trim()
      .min(1, { message: "validation.first_name_required" }),
    last_name: z
      .string()
      .trim()
      .min(1, { message: "validation.last_name_required" }),
    phone_number: z
      .string()
      .trim()
      .min(1, { message: "validation.phone_required" }),
    address: z.string().trim().optional().default(""),
    city: z.string().trim().optional().default(""),
    card_number: z.string().trim().optional().default(""),
    card_cvv: z.string().trim().optional().default(""),
    card_expiration_date: z.string().optional().default(""),
  })
  .superRefine((data, ctx) => {
    const phone = data.phone_number.replace(/\D/g, "");
    if (!/^\d{10,15}$/.test(phone)) {
      ctx.addIssue({
        code: "custom",
        path: ["phone_number"],
        message: "validation.phone_invalid",
      });
    }

    if (data.delivery_method === "ship") {
      if (!data.address.trim()) {
        ctx.addIssue({
          code: "custom",
          path: ["address"],
          message: "validation.address_required",
        });
      }
      if (!data.city.trim()) {
        ctx.addIssue({
          code: "custom",
          path: ["city"],
          message: "validation.city_required",
        });
      }
    }

    if (data.payment_method === "card") {
      const cardNumber = data.card_number.replace(/\s+/g, "");
      if (!cardNumber) {
        ctx.addIssue({
          code: "custom",
          path: ["card_number"],
          message: "validation.card_number_required",
        });
      } else if (!/^\d{13,19}$/.test(cardNumber)) {
        ctx.addIssue({
          code: "custom",
          path: ["card_number"],
          message: "validation.card_number_invalid",
        });
      }

      if (!data.card_cvv) {
        ctx.addIssue({
          code: "custom",
          path: ["card_cvv"],
          message: "validation.card_cvv_required",
        });
      } else if (!/^\d{3,4}$/.test(data.card_cvv)) {
        ctx.addIssue({
          code: "custom",
          path: ["card_cvv"],
          message: "validation.card_cvv_invalid",
        });
      }

      if (!data.card_expiration_date) {
        ctx.addIssue({
          code: "custom",
          path: ["card_expiration_date"],
          message: "validation.card_expiration_required",
        });
      } else {
        const expiryDate = new Date(`${data.card_expiration_date}T23:59:59`);
        if (Number.isNaN(expiryDate.getTime()) || expiryDate < new Date()) {
          ctx.addIssue({
            code: "custom",
            path: ["card_expiration_date"],
            message: "validation.card_expiration_invalid",
          });
        }
      }
    }
  });

export function getCheckoutValidationErrors(error: z.ZodError): CheckoutValidationErrors {
  const fieldErrors: CheckoutValidationErrors = {};

  for (const issue of error.issues) {
    const field = issue.path[0] as CheckoutValidationField | undefined;
    if (!field || fieldErrors[field]) {
      continue;
    }
    fieldErrors[field] = issue.message;
  }

  return fieldErrors;
}
