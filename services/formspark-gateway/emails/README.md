# Dreamy Cake enquiry notifications

All 19 public enquiry forms use the Dreamy Cake cream/gold design with a clickable cake icon, bold sans-serif headings, grouped fields and explicit empty values. Existing values, commercial descriptions and estimates are preserved; the gateway does not calculate prices.

## Provider resources

Shared Formspark workspace: `VVckLKghq`. All three Dreamy Cake destinations notify the existing `quotes@dreamycake.co.uk` recipient. Bondar Labs resources are unchanged.

| Forms | Formspark ID | Postcraft template | Source |
| --- | --- | --- | --- |
| Home Contact | kMiBpt8u8 | fj3zmYE3O0IZfBe6qKvoH | dreamy-email.html |
| Standard Cupcakes | QapOFnHa2 | xpoKoBokWmunG2fUi1bR7 | dreamy-email.html |
| All other 17 forms | IB5AFw6gt | UC2jTuKZufDxlrqlCkx_G | dreamy-all-email.html |

The other forms are Bespoke, Corporate Cakes, Celebration, Themed, Wedding, Mini/Bento, Classic, Express Bento, Express Cupcakes, Freshly Made Cookies, Postage Cookie and six seasonal collections. Corporate quote requests and quick questions have different fields. Bespoke supports cakes, cupcakes and combined requests.

## Schema and compatibility

`email-schemas.mjs` declares expected fields and aliases for existing frontend labels. `email-design.mjs` matches page path and form label. Empty text shows Not provided; unselected choices show Not selected; a missing file shows Not attached. Known empty-option prompts such as Choose frosting are treated as unselected. Unknown supplied fields appear under Additional details.

Templates use escaped Handlebars values. Customer URLs and original attachment URLs remain full visible text with query parameters. No image previews, conversions or shortened destinations are generated. Email apps can independently detect URLs. The general template also displays legacy flat messages and attachment URLs, so rollback preserves the email content.

The top-level email retains the customer Reply-To. The Worker supplies a subject containing Dreamy Cake, enquiry type, customer name and a unique DC- reference, with line breaks removed. The general template's legacy subject is `Dreamy Cake | {{data.subject}}`.

## Configuration and rollback

Keep the five existing Worker secrets. FORMSPARK_FORM_ID remains the original destination. FORMSPARK_CONTACT_FORM_ID and FORMSPARK_CUPCAKES_FORM_ID select the dedicated destinations; these IDs are routing identifiers, not authentication credentials.

FORMSPARK_ALL_EMAILS_ENABLED=true enables structured notifications for the other 17 forms. Set it to false to restore their original payload while retaining the compatible template. Removing a dedicated ID returns that type to the original destination and legacy payload.

Deploy the existing wrangler.jsonc to the same account and Worker. Preserve CAPTCHA, request/file checks, responses, observability, compatibility date and daily 0 6 * * * cleanup. Six-calendar-month file retention is unchanged. No static form markup, frontend behavior, prices, payment terms or tracking choices are changed by this rollout. No paid plan or new database is required.

## Verification boundaries

Task-local tests cover all 19 schemas, original Contact/Cupcakes behavior, retention and 22 scenarios running the real site form scripts. Real provider acceptance, browser CAPTCHA completion and final inbox delivery are separate checks and must be reported separately. Source-runtime tests do not prove Zoho inbox rendering.
