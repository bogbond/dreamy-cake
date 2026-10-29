# Dreamy Cake notification design — stage 1

Only the home Contact form and standard `/Products/cupcakes/` form use this design. Other product, bespoke, corporate and express enquiries keep the original Formspark destination and payload.

## Provider resources

Shared Formspark workspace: `VVckLKghq`. Both new forms notify the existing recipient `quotes@dreamycake.co.uk`. Notifications and spam filtering are enabled. Grouping unrelated submissions into a single email thread is disabled; subjects include the customer name and a unique reference.

| Website form | Formspark ID | Postcraft template ID |
| --- | --- | --- |
| Contact form - Home page | kMiBpt8u8 | fj3zmYE3O0IZfBe6qKvoH |
| Product order form - Cupcakes | QapOFnHa2 | xpoKoBokWmunG2fUi1bR7 |

The original form `IB5AFw6gt` remains configured through the existing `FORMSPARK_FORM_ID` secret. Two ordinary Worker variables select the pilot forms: `FORMSPARK_CONTACT_FORM_ID` and `FORMSPARK_CUPCAKES_FORM_ID`. These IDs are routing identifiers, not authentication credentials. Removing either pilot variable restores that type to the original destination. Do not remove the original secret.

## Payload and template

`email-design.mjs` matches both the exact form label and page path. It groups validated fields into `Groups`, retaining every expected field. Empty text is `Not provided`, an empty choice is `Not selected`, and an absent attachment is `Not attached`. Unknown supplied fields appear under Additional details. Existing selected values, prices and commercial descriptions are preserved without calculations.

`dreamy-email.html` is the published Handlebars source for both templates. Root variables use `data.*`; group items use relative labels and values. Values are escaped. Customer reference links and original attachment URLs appear in full as plain text; no shortened destination or image preview is generated. Mail clients may independently detect URLs. The official cake icon and wordmark link to the website. The template contains no Formspark promotional block.

The top-level `email` keeps Formspark's customer Reply-To behavior. `_email.subject` supplies a readable enquiry type, customer name and unique `DC-` reference, with line breaks removed. The template subject is also configured as `Dreamy Cake | {{data.Heading}} — {{data.name}} [{{data.Reference}}]`.

## Boundaries and deployment

Deploy the gateway with its existing `wrangler.jsonc`. Preserve the five existing secrets, account, Worker name, daily 06:00 UTC cleanup, observability and compatibility date. Six-calendar-month retention, upload validation, CAPTCHA validation, response handling and website provider selection are unchanged. No static form HTML or frontend scripts are changed for this stage.

Local tests: `node work/dreamy-retention/test-email-design.mjs` and `node work/dreamy-retention/test-retention.mjs` from the task workspace. These mock provider requests. Separate synthetic website submissions verify live routing; inbox delivery and rendering in Zoho must be confirmed by the owner before extending the design to other forms.
