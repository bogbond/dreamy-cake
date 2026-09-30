# Dreamy Cake: third form provider

Provider 2 must only be enabled after the gateway and service accounts have been configured and verified.

## Accounts and setup

1. Formspark: create a free account and one form named Dreamy Cake enquiries. Set the notification recipient to the desired mailbox. Keep automatic spam filtering enabled. Do not publish its form ID in site HTML. In this architecture Turnstile is verified by the Worker; do not also enable Turnstile verification in Formspark because tokens are single-use.
2. Cloudinary: create a free account. No unsigned upload preset is required. The Worker sends signed uploads. Keep the cloud name, API key and API secret in Worker secrets only. Files will be stored under `dreamy-cake/enquiries/`. Their unlisted download URLs are included in the enquiry email. Check PDF delivery settings if PDFs are needed.
3. Cloudflare: create a free account. Create a Turnstile widget for `dreamycake.co.uk` and `www.dreamycake.co.uk`, with Managed mode. The public site key goes in `formspark-config.json`; the secret goes only in the Worker.
4. Create a Worker using `services/formspark-gateway/worker.mjs`. Set encrypted secrets named `FORMSPARK_FORM_ID`, `TURNSTILE_SECRET_KEY`, `CLOUDINARY_CLOUD_NAME`, `CLOUDINARY_API_KEY`, and `CLOUDINARY_API_SECRET`. Paste actual values directly in Cloudflare; do not put them in chat or GitHub.
5. Put `https://YOUR-WORKER.workers.dev/submit` in the public `gateway` field of `assets/data/formspark-config.json`. Put the Turnstile public site key in `turnstileSiteKey`.
6. Test denied requests without a CAPTCHA first. Then perform a clearly labelled enquiry with a small synthetic image and confirm the notification email and image link. After configuration and checks, publish the changes and set `assets/data/form-provider.txt` to `2`.

## Switch

- `0`: FormSubmit (existing path).
- `1`: Formly (existing path).
- `2`: protected gateway → signed Cloudinary upload if a file was selected → Formspark enquiry.

The gateway verifies the CAPTCHA, hostname, action, email, request size and file signature before contacting the two providers. Origins alone are not the security boundary. Missing settings or an unavailable configuration file stop sending rather than silently falling back to another provider.

Photos are sent as links, not email attachments. There are separate quotas for Formspark, Cloudinary and Cloudflare. CAPTCHA reduces automated abuse but is not an absolute guarantee against human-assisted attacks. Uploaded files are retained until removed in Cloudinary; establish a retention routine after launch.

## Current local validation

Run `node work/test-gateway.mjs` for mocked gateway checks. These do not send email or upload a file externally. Live configuration, notification delivery and the image download URL still require verification.
