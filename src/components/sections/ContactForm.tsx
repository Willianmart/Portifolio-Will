"use client";

import { FormEvent, useMemo, useState } from "react";
import { contacts, copy } from "@/data/profile";
import { Button } from "@/components/ui/Button";

type Status = "idle" | "sending" | "success" | "error";

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export function ContactForm() {
  const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;
  const formConfigured = Boolean(accessKey && accessKey.trim().length > 0);

  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const fallbackMailto = useMemo(() => {
    const subject = encodeURIComponent("Contato pelo portfólio");
    return `${contacts.mailto}?subject=${subject}`;
  }, []);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const subject = String(data.get("subject") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    const nextErrors: Record<string, string> = {};
    if (!name) nextErrors.name = "Informe seu nome.";
    if (!email || !isValidEmail(email)) nextErrors.email = "Informe um e-mail válido.";
    if (!subject) nextErrors.subject = "Informe o assunto.";
    if (!message || message.length < 10) {
      nextErrors.message = "Escreva uma mensagem com pelo menos 10 caracteres.";
    }
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) return;

    if (!formConfigured) {
      setStatus("error");
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: accessKey,
          name,
          email,
          subject,
          message,
          from_name: "Portfólio Willian Martinez",
        }),
      });
      const json = (await res.json()) as { success?: boolean };
      if (!res.ok || !json.success) throw new Error("fail");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="rounded-3xl border border-line bg-surface/60 p-5 sm:p-7">
      {!formConfigured ? (
        <div
          className="mb-6 rounded-2xl border border-amber-500/30 bg-amber-500/10 p-4 text-sm text-ink"
          role="status"
        >
          <p className="font-medium">{copy.contact.form.fallbackTitle}</p>
          <p className="mt-1 text-muted">{copy.contact.form.fallbackBody}</p>
          <div className="mt-4 flex flex-wrap gap-3">
            <Button href={fallbackMailto} variant="soft">
              {copy.contact.form.openEmail}
            </Button>
            <Button href={contacts.whatsapp.url} external variant="ghost">
              {copy.contact.form.openWhatsApp}
            </Button>
          </div>
        </div>
      ) : null}

      <form onSubmit={onSubmit} noValidate className="space-y-4" aria-describedby="form-status">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm text-muted">
            {copy.contact.form.name}
          </label>
          <input
            id="name"
            name="name"
            autoComplete="name"
            className="min-h-11 w-full rounded-xl border border-line bg-canvas px-3 text-ink"
            aria-invalid={Boolean(errors.name)}
          />
          {errors.name ? <p className="mt-1 text-xs text-red-400">{errors.name}</p> : null}
        </div>
        <div>
          <label htmlFor="email" className="mb-1.5 block text-sm text-muted">
            {copy.contact.form.email}
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            className="min-h-11 w-full rounded-xl border border-line bg-canvas px-3 text-ink"
            aria-invalid={Boolean(errors.email)}
          />
          {errors.email ? <p className="mt-1 text-xs text-red-400">{errors.email}</p> : null}
        </div>
        <div>
          <label htmlFor="subject" className="mb-1.5 block text-sm text-muted">
            {copy.contact.form.subject}
          </label>
          <input
            id="subject"
            name="subject"
            className="min-h-11 w-full rounded-xl border border-line bg-canvas px-3 text-ink"
            aria-invalid={Boolean(errors.subject)}
          />
          {errors.subject ? (
            <p className="mt-1 text-xs text-red-400">{errors.subject}</p>
          ) : null}
        </div>
        <div>
          <label htmlFor="message" className="mb-1.5 block text-sm text-muted">
            {copy.contact.form.message}
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            className="w-full rounded-xl border border-line bg-canvas px-3 py-2 text-ink"
            aria-invalid={Boolean(errors.message)}
          />
          {errors.message ? (
            <p className="mt-1 text-xs text-red-400">{errors.message}</p>
          ) : null}
        </div>

        <Button
          type="submit"
          disabled={status === "sending" || !formConfigured}
          className={!formConfigured ? "opacity-60" : undefined}
        >
          {status === "sending" ? copy.contact.form.sending : copy.contact.form.submit}
        </Button>

        <div id="form-status" className="min-h-5 text-sm" aria-live="polite">
          {status === "success" ? (
            <p className="text-emerald-400">{copy.contact.form.success}</p>
          ) : null}
          {status === "error" && formConfigured ? (
            <p className="text-red-400">{copy.contact.form.error}</p>
          ) : null}
        </div>
      </form>
    </div>
  );
}
