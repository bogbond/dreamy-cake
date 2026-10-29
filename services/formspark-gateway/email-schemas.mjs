// Expected fields from all remaining public enquiry forms. Values are never calculated here.
export const emailSchemas={
  "/bespoke-order/": {
    "form": "Bespoke Order form",
    "heading": "Bespoke cake enquiry",
    "groups": [
      {
        "title": "Customer",
        "items": [
          {
            "name": "name",
            "label": "Full name",
            "aliases": [
              "Full Name",
              "Full name"
            ],
            "empty": "Not provided"
          },
          {
            "name": "email",
            "label": "Email address",
            "aliases": [
              "Email Address",
              "Email address"
            ],
            "empty": "Not provided"
          },
          {
            "name": "phone",
            "label": "Phone number",
            "aliases": [
              "Phone Number",
              "Phone number"
            ],
            "empty": "Not provided"
          },
          {
            "name": "instagram_handle",
            "label": "Instagram Handle",
            "aliases": [
              "Instagram Handle"
            ],
            "empty": "Not provided"
          }
        ]
      },
      {
        "title": "Event",
        "items": [
          {
            "name": "occasion",
            "label": "Occasion",
            "aliases": [
              "Occasion"
            ],
            "empty": "Not selected",
            "placeholders": [
              "Select an occasion"
            ]
          },
          {
            "name": "event_date",
            "label": "Event Date",
            "aliases": [
              "Event Date"
            ],
            "empty": "Not provided"
          },
          {
            "name": "preferred_time",
            "label": "Preferred time / delivery window",
            "aliases": [
              "Preferred time / delivery window"
            ],
            "empty": "Not provided"
          },
          {
            "name": "guest_count",
            "label": "Guests / servings",
            "aliases": [
              "Guests / servings"
            ],
            "empty": "Not provided"
          }
        ]
      },
      {
        "title": "Order details",
        "items": [
          {
            "name": "product_name",
            "label": "Product name",
            "aliases": [
              "Product name"
            ],
            "empty": "Not provided"
          },
          {
            "name": "selected_products",
            "label": "Selected products",
            "aliases": [
              "Selected products"
            ],
            "empty": "Not provided"
          },
          {
            "name": "order_type[]",
            "label": "What would you like to order?",
            "aliases": [
              "What would you like to order?"
            ],
            "empty": "Not selected"
          },
          {
            "name": "budget_from",
            "label": "Budget guide",
            "aliases": [
              "Budget guide"
            ],
            "empty": "Not provided"
          }
        ]
      },
      {
        "title": "Cake",
        "items": [
          {
            "name": "cake_category",
            "label": "Cake type",
            "aliases": [
              "Cake type"
            ],
            "empty": "Not selected"
          },
          {
            "name": "cake_size",
            "label": "Cake size / style",
            "aliases": [
              "Cake size / style"
            ],
            "empty": "Not selected",
            "placeholders": [
              "Select a cake size / style"
            ]
          },
          {
            "name": "cake_shape",
            "label": "Shape / format",
            "aliases": [
              "Shape / format"
            ],
            "empty": "Not selected",
            "placeholders": [
              "No preference"
            ]
          },
          {
            "name": "cake_flavour",
            "label": "Cake flavour",
            "aliases": [
              "Cake flavour"
            ],
            "empty": "Not selected",
            "placeholders": [
              "Choose your cake flavour"
            ]
          },
          {
            "name": "cake_message",
            "label": "Message / wording on cake",
            "aliases": [
              "Message / wording on cake"
            ],
            "empty": "Not provided"
          }
        ]
      },
      {
        "title": "Cupcakes",
        "items": [
          {
            "name": "cupcake_quantity",
            "label": "Box size / quantity",
            "aliases": [
              "Box size / quantity"
            ],
            "empty": "Not selected",
            "placeholders": [
              "Choose your box"
            ]
          },
          {
            "name": "cupcake_flavours[]",
            "label": "Cupcake Flavours",
            "aliases": [
              "Cupcake Flavours"
            ],
            "empty": "Not selected"
          },
          {
            "name": "cupcake_dietary_preference",
            "label": "Cupcake dietary preference",
            "aliases": [
              "Cupcake dietary preference"
            ],
            "empty": "Not selected"
          },
          {
            "name": "cupcake_frosting",
            "label": "Frosting type",
            "aliases": [
              "Frosting type"
            ],
            "empty": "Not selected",
            "placeholders": [
              "Choose frosting"
            ]
          },
          {
            "name": "cupcake_decoration_style",
            "label": "Decoration style",
            "aliases": [
              "Decoration style"
            ],
            "empty": "Not selected",
            "placeholders": [
              "Choose style"
            ]
          }
        ]
      },
      {
        "title": "Design & notes",
        "items": [
          {
            "name": "dietary_preference",
            "label": "Dietary preference",
            "aliases": [
              "Dietary preference"
            ],
            "empty": "Not selected"
          },
          {
            "name": "colour_palette",
            "label": "Colour palette",
            "aliases": [
              "Colour palette"
            ],
            "empty": "Not provided"
          },
          {
            "name": "theme_or_vibe",
            "label": "Theme / design vibe",
            "aliases": [
              "Theme / design vibe"
            ],
            "empty": "Not provided"
          },
          {
            "name": "personalisation",
            "label": "Personalisation",
            "aliases": [
              "Personalisation"
            ],
            "empty": "Not provided"
          },
          {
            "name": "addons[]",
            "label": "Add-ons & extras",
            "aliases": [
              "Add-ons & extras"
            ],
            "empty": "Not selected"
          },
          {
            "name": "reference_links",
            "label": "Reference links",
            "aliases": [
              "Reference links"
            ],
            "empty": "Not provided"
          },
          {
            "name": "anything_else",
            "label": "Anything else?",
            "aliases": [
              "Anything else?"
            ],
            "empty": "Not provided"
          }
        ]
      },
      {
        "title": "Collection & delivery",
        "items": [
          {
            "name": "delivery_summary",
            "label": "Delivery summary",
            "aliases": [
              "Delivery summary"
            ],
            "empty": "Not provided"
          },
          {
            "name": "fulfilment",
            "label": "How would you like to receive your order?",
            "aliases": [
              "How would you like to receive your order?"
            ],
            "empty": "Not selected"
          },
          {
            "name": "preferred_collection_time",
            "label": "Preferred collection time",
            "aliases": [
              "Preferred collection time"
            ],
            "empty": "Not provided"
          },
          {
            "name": "delivery_address",
            "label": "Full delivery address",
            "aliases": [
              "Full delivery address"
            ],
            "empty": "Not provided"
          },
          {
            "name": "delivery_postcode",
            "label": "Delivery postcode",
            "aliases": [
              "Delivery postcode"
            ],
            "empty": "Not provided"
          },
          {
            "name": "delivery_window",
            "label": "Preferred delivery window",
            "aliases": [
              "Preferred delivery window"
            ],
            "empty": "Not provided"
          },
          {
            "name": "delivery_recipient",
            "label": "Who will receive the order?",
            "aliases": [
              "Who will receive the order?"
            ],
            "empty": "Not selected"
          },
          {
            "name": "recipient_name",
            "label": "Recipient full name",
            "aliases": [
              "Recipient full name"
            ],
            "empty": "Not provided"
          },
          {
            "name": "recipient_phone",
            "label": "Recipient phone",
            "aliases": [
              "Recipient phone"
            ],
            "empty": "Not provided"
          },
          {
            "name": "gift_message",
            "label": "Gift message",
            "aliases": [
              "Gift message"
            ],
            "empty": "Not provided"
          }
        ]
      },
      {
        "title": "Order summary & estimates",
        "items": [
          {
            "name": "cupcake_estimate",
            "label": "Cupcake estimate",
            "aliases": [
              "Cupcake estimate"
            ],
            "empty": "Not provided"
          },
          {
            "name": "cake_estimate",
            "label": "Cake estimate",
            "aliases": [
              "Cake estimate"
            ],
            "empty": "Not provided"
          },
          {
            "name": "bundle_discount",
            "label": "Bundle discount",
            "aliases": [
              "Bundle discount"
            ],
            "empty": "Not provided"
          },
          {
            "name": "estimated_total",
            "label": "Estimated starting total",
            "aliases": [
              "Estimated starting total"
            ],
            "empty": "Not provided"
          }
        ]
      },
      {
        "title": "Acknowledgements",
        "items": [
          {
            "name": "delivery_availability_agreement",
            "label": "Recipient availability acknowledged",
            "aliases": [
              "I understand the recipient must be available at the delivery address during the agreed time window. Redelivery, waiting time or address changes may incur an additional fee.",
              "Recipient availability acknowledged"
            ],
            "empty": "Not selected"
          },
          {
            "name": "allergen_information_acknowledged",
            "label": "Allergen information acknowledged",
            "aliases": [
              "I have read the allergen information and will mention any dietary requirements in this form.",
              "Allergen information acknowledged"
            ],
            "empty": "Not selected"
          }
        ]
      }
    ]
  },
  "/corporate-cakes/": {
    "form": "Corporate Cakes enquiry form",
    "heading": "Corporate cakes enquiry",
    "groups": [
      {
        "title": "Customer",
        "items": [
          {
            "name": "name",
            "label": "Full name",
            "aliases": [
              "Your name",
              "Full name"
            ],
            "empty": "Not provided"
          },
          {
            "name": "company",
            "label": "Company / organisation",
            "aliases": [
              "Company / organisation"
            ],
            "empty": "Not provided"
          },
          {
            "name": "email",
            "label": "Email address",
            "aliases": [
              "Work email",
              "Email address"
            ],
            "empty": "Not provided"
          },
          {
            "name": "phone",
            "label": "Phone number",
            "aliases": [
              "Phone / WhatsApp",
              "Phone number"
            ],
            "empty": "Not provided"
          }
        ]
      },
      {
        "title": "Enquiry",
        "items": [
          {
            "name": "subject",
            "label": "What would you like to ask?",
            "aliases": [
              "What would you like to ask?"
            ],
            "empty": "Not provided"
          },
          {
            "name": "message",
            "label": "Your question",
            "aliases": [
              "Your question"
            ],
            "empty": "Not provided"
          }
        ]
      },
      {
        "title": "Event",
        "items": [
          {
            "name": "event_date",
            "label": "Event date",
            "aliases": [
              "Event date"
            ],
            "empty": "Not provided"
          },
          {
            "name": "event_type",
            "label": "Event type",
            "aliases": [
              "Event type"
            ],
            "empty": "Not selected",
            "placeholders": [
              "Choose one"
            ]
          },
          {
            "name": "guest_count",
            "label": "Guests / recipients",
            "aliases": [
              "Guests / recipients"
            ],
            "empty": "Not provided"
          }
        ]
      },
      {
        "title": "Order details",
        "items": [
          {
            "name": "inquiry_type",
            "label": "Enquiry type",
            "aliases": [
              "Enquiry type"
            ],
            "empty": "Not provided"
          },
          {
            "name": "services",
            "label": "Requested services",
            "aliases": [
              "Event essentials",
              "Requested services"
            ],
            "empty": "Not selected"
          },
          {
            "name": "quantities",
            "label": "Products and approximate quantities",
            "aliases": [
              "Products and approximate quantities"
            ],
            "empty": "Not provided"
          },
          {
            "name": "budget_range",
            "label": "Indicative budget",
            "aliases": [
              "Indicative budget"
            ],
            "empty": "Not selected",
            "placeholders": [
              "Prefer to discuss"
            ]
          }
        ]
      },
      {
        "title": "Design & notes",
        "items": [
          {
            "name": "branding_requirements",
            "label": "Branding and design direction",
            "aliases": [
              "Branding and design direction"
            ],
            "empty": "Not provided"
          },
          {
            "name": "dietary_requirements",
            "label": "Dietary requirements and allergens",
            "aliases": [
              "Dietary requirements and allergens"
            ],
            "empty": "Not provided"
          },
          {
            "name": "anything_else",
            "label": "Anything else we should know?",
            "aliases": [
              "Anything else we should know?"
            ],
            "empty": "Not provided"
          }
        ]
      },
      {
        "title": "Collection & delivery",
        "items": [
          {
            "name": "venue_postcode",
            "label": "Venue postcode",
            "aliases": [
              "Venue postcode"
            ],
            "empty": "Not provided"
          },
          {
            "name": "delivery_setup_requirements",
            "label": "Delivery and setup requirements",
            "aliases": [
              "Delivery and setup requirements"
            ],
            "empty": "Not provided"
          }
        ]
      },
      {
        "title": "Acknowledgements",
        "items": [
          {
            "name": "privacy_acknowledged",
            "label": "Privacy notice acknowledged",
            "aliases": [
              "I agree to the Privacy Policy and understand that submitting this form does not confirm a booking.",
              "Privacy notice acknowledged"
            ],
            "empty": "Not selected"
          }
        ]
      }
    ]
  },
  "/products/celebration-cake/": {
    "form": "Product order form - Celebration Cake",
    "heading": "Celebration Cake enquiry",
    "groups": [
      {
        "title": "Customer",
        "items": [
          {
            "name": "name",
            "label": "Full name",
            "aliases": [
              "Your name",
              "Full name"
            ],
            "empty": "Not provided"
          },
          {
            "name": "email",
            "label": "Email address",
            "aliases": [
              "Email",
              "Email address"
            ],
            "empty": "Not provided"
          },
          {
            "name": "phone",
            "label": "Phone number",
            "aliases": [
              "Phone",
              "Phone number"
            ],
            "empty": "Not provided"
          }
        ]
      },
      {
        "title": "Event",
        "items": [
          {
            "name": "date",
            "label": "Event date",
            "aliases": [
              "Event date"
            ],
            "empty": "Not provided"
          },
          {
            "name": "time",
            "label": "Time",
            "aliases": [
              "Time (optional)",
              "Time"
            ],
            "empty": "Not provided"
          },
          {
            "name": "event_type",
            "label": "Event type",
            "aliases": [
              "Event type (optional)",
              "Event type"
            ],
            "empty": "Not selected",
            "placeholders": [
              "Select event"
            ]
          }
        ]
      },
      {
        "title": "Order details",
        "items": [
          {
            "name": "product_name",
            "label": "Product name",
            "aliases": [
              "Product name"
            ],
            "empty": "Not provided"
          },
          {
            "name": "cake_size",
            "label": "Servings / Cake size",
            "aliases": [
              "Servings / Cake size · view size guide",
              "Servings / Cake size"
            ],
            "empty": "Not selected"
          },
          {
            "name": "cake_flavour",
            "label": "Cake flavour",
            "aliases": [
              "Cake flavour"
            ],
            "empty": "Not selected",
            "placeholders": [
              "Choose cake flavour"
            ]
          },
          {
            "name": "budget_from",
            "label": "Budget from",
            "aliases": [
              "Budget from (optional)",
              "Budget from"
            ],
            "empty": "Not provided"
          }
        ]
      },
      {
        "title": "Design & notes",
        "items": [
          {
            "name": "dietary_preference",
            "label": "Dietary preference",
            "aliases": [
              "Dietary preference"
            ],
            "empty": "Not selected"
          },
          {
            "name": "reference_links",
            "label": "Reference links",
            "aliases": [
              "Reference links (optional)",
              "Reference links"
            ],
            "empty": "Not provided"
          },
          {
            "name": "message",
            "label": "Notes / design ideas",
            "aliases": [
              "Notes / design ideas"
            ],
            "empty": "Not provided"
          }
        ]
      },
      {
        "title": "Collection & delivery",
        "items": [
          {
            "name": "delivery_option",
            "label": "Delivery or collection?",
            "aliases": [
              "Delivery or collection?"
            ],
            "empty": "Not selected",
            "placeholders": [
              "Choose option"
            ]
          },
          {
            "name": "postcode",
            "label": "Postcode / area",
            "aliases": [
              "Postcode / area"
            ],
            "empty": "Not provided"
          }
        ]
      },
      {
        "title": "Order summary & estimates",
        "items": [
          {
            "name": "cake_flavour_price_adjustment",
            "label": "Flavour price adjustment",
            "aliases": [
              "Cake Flavour Price Adjustment"
            ],
            "empty": "Not provided"
          }
        ]
      }
    ]
  },
  "/products/christmas-collection/": {
    "form": "Product order form - Christmas Collection",
    "heading": "Christmas Collection enquiry",
    "groups": [
      {
        "title": "Customer",
        "items": [
          {
            "name": "name",
            "label": "Full name",
            "aliases": [
              "Full name"
            ],
            "empty": "Not provided"
          },
          {
            "name": "email",
            "label": "Email address",
            "aliases": [
              "Email",
              "Email address"
            ],
            "empty": "Not provided"
          },
          {
            "name": "phone",
            "label": "Phone number",
            "aliases": [
              "Phone (optional, but helpful)",
              "Phone",
              "Phone number"
            ],
            "empty": "Not provided"
          }
        ]
      },
      {
        "title": "Event",
        "items": [
          {
            "name": "date",
            "label": "Date needed",
            "aliases": [
              "Date needed"
            ],
            "empty": "Not provided"
          }
        ]
      },
      {
        "title": "Order details",
        "items": [
          {
            "name": "product_name",
            "label": "Product name",
            "aliases": [
              "Product name"
            ],
            "empty": "Not provided"
          },
          {
            "name": "product_selection",
            "label": "Product selection",
            "aliases": [
              "Product selection"
            ],
            "empty": "Not selected",
            "placeholders": [
              "Choose an option"
            ]
          },
          {
            "name": "edible_photo",
            "label": "Edible photo",
            "aliases": [
              "Edible photo (optional)",
              "Edible photo"
            ],
            "empty": "Not selected"
          },
          {
            "name": "flavour",
            "label": "Flavour",
            "aliases": [
              "Flavour"
            ],
            "empty": "Not selected",
            "placeholders": [
              "Choco / Vanilla"
            ]
          }
        ]
      },
      {
        "title": "Design & notes",
        "items": [
          {
            "name": "message",
            "label": "Short message",
            "aliases": [
              "Short message (optional)",
              "Short message"
            ],
            "empty": "Not provided"
          }
        ]
      },
      {
        "title": "Collection & delivery",
        "items": [
          {
            "name": "delivery_option",
            "label": "Collection or delivery?",
            "aliases": [
              "Collection or delivery?"
            ],
            "empty": "Not selected",
            "placeholders": [
              "Choose option"
            ]
          },
          {
            "name": "postcode",
            "label": "Postcode / area",
            "aliases": [
              "Postcode / area"
            ],
            "empty": "Not provided"
          }
        ]
      }
    ]
  },
  "/products/classic-cake/": {
    "form": "Product order form - Classic Cake",
    "heading": "Classic Cake enquiry",
    "groups": [
      {
        "title": "Customer",
        "items": [
          {
            "name": "name",
            "label": "Full name",
            "aliases": [
              "Full name"
            ],
            "empty": "Not provided"
          },
          {
            "name": "email",
            "label": "Email address",
            "aliases": [
              "Email",
              "Email address"
            ],
            "empty": "Not provided"
          },
          {
            "name": "phone",
            "label": "Phone number",
            "aliases": [
              "Phone (optional, but helpful)",
              "Phone",
              "Phone number"
            ],
            "empty": "Not provided"
          }
        ]
      },
      {
        "title": "Event",
        "items": [
          {
            "name": "date",
            "label": "Date needed",
            "aliases": [
              "Date needed"
            ],
            "empty": "Not provided"
          }
        ]
      },
      {
        "title": "Order details",
        "items": [
          {
            "name": "product_name",
            "label": "Product name",
            "aliases": [
              "Product name"
            ],
            "empty": "Not provided"
          },
          {
            "name": "size_ui",
            "label": "Cake size",
            "aliases": [
              "Size Ui",
              "Cake size"
            ],
            "empty": "Not selected"
          },
          {
            "name": "style_ui",
            "label": "Cake style",
            "aliases": [
              "Style Ui",
              "Cake style"
            ],
            "empty": "Not selected"
          }
        ]
      },
      {
        "title": "Design & notes",
        "items": [
          {
            "name": "topper_ui",
            "label": "Personalised topper",
            "aliases": [
              "Personalised topper (on a stick) (+£4.50)",
              "Personalised topper"
            ],
            "empty": "Not selected"
          },
          {
            "name": "topper_text_ui",
            "label": "Topper text",
            "aliases": [
              "Topper text"
            ],
            "empty": "Not provided"
          }
        ]
      },
      {
        "title": "Collection & delivery",
        "items": [
          {
            "name": "delivery_option",
            "label": "Collection or delivery?",
            "aliases": [
              "Collection or delivery?"
            ],
            "empty": "Not selected",
            "placeholders": [
              "Choose option"
            ]
          },
          {
            "name": "postcode",
            "label": "Postcode / area",
            "aliases": [
              "Postcode / area"
            ],
            "empty": "Not provided"
          }
        ]
      },
      {
        "title": "Order summary & estimates",
        "items": [
          {
            "name": "order_summary",
            "label": "Order summary",
            "aliases": [
              "Order summary"
            ],
            "empty": "Not provided"
          }
        ]
      }
    ]
  },
  "/products/easter-collection/": {
    "form": "Product order form - Easter Collection",
    "heading": "Easter Collection enquiry",
    "groups": [
      {
        "title": "Customer",
        "items": [
          {
            "name": "name",
            "label": "Full name",
            "aliases": [
              "Full name"
            ],
            "empty": "Not provided"
          },
          {
            "name": "email",
            "label": "Email address",
            "aliases": [
              "Email",
              "Email address"
            ],
            "empty": "Not provided"
          },
          {
            "name": "phone",
            "label": "Phone number",
            "aliases": [
              "Phone (optional, but helpful)",
              "Phone",
              "Phone number"
            ],
            "empty": "Not provided"
          }
        ]
      },
      {
        "title": "Event",
        "items": [
          {
            "name": "date",
            "label": "Date needed",
            "aliases": [
              "Date needed"
            ],
            "empty": "Not provided"
          }
        ]
      },
      {
        "title": "Order details",
        "items": [
          {
            "name": "product_name",
            "label": "Product name",
            "aliases": [
              "Product name"
            ],
            "empty": "Not provided"
          },
          {
            "name": "cranberry_orange_easter_cake_qty",
            "label": "Cranberry Orange Easter Cake quantity",
            "aliases": [
              "Cranberry Orange Easter Cake Qty",
              "Cranberry Orange Easter Cake quantity"
            ],
            "empty": "Not provided"
          },
          {
            "name": "vanilla_pistachio_easter_cake_qty",
            "label": "Vanilla Pistachio Easter Cake quantity",
            "aliases": [
              "Vanilla Pistachio Easter Cake Qty",
              "Vanilla Pistachio Easter Cake quantity"
            ],
            "empty": "Not provided"
          },
          {
            "name": "easter_cupcakes_qty",
            "label": "Easter Cupcakes quantity",
            "aliases": [
              "Easter Cupcakes Qty",
              "Easter Cupcakes quantity"
            ],
            "empty": "Not provided"
          }
        ]
      },
      {
        "title": "Design & notes",
        "items": [
          {
            "name": "easter_notes",
            "label": "Extra Easter notes or short message",
            "aliases": [
              "Extra Easter notes or short message (optional)",
              "Extra Easter notes or short message"
            ],
            "empty": "Not provided"
          }
        ]
      },
      {
        "title": "Collection & delivery",
        "items": [
          {
            "name": "delivery_option",
            "label": "Collection or delivery?",
            "aliases": [
              "Collection or delivery?"
            ],
            "empty": "Not selected",
            "placeholders": [
              "Choose option"
            ]
          },
          {
            "name": "postcode",
            "label": "Postcode / area",
            "aliases": [
              "Postcode / area"
            ],
            "empty": "Not provided"
          }
        ]
      },
      {
        "title": "Order summary & estimates",
        "items": [
          {
            "name": "total_items",
            "label": "Total items",
            "aliases": [
              "Total Items",
              "Total items"
            ],
            "empty": "Not provided"
          },
          {
            "name": "order_summary",
            "label": "Order summary",
            "aliases": [
              "Order summary"
            ],
            "empty": "Not provided"
          }
        ]
      }
    ]
  },
  "/products/express-bento-cake/": {
    "form": "Product order form - Express Bento Cake",
    "heading": "Express Bento Cake enquiry",
    "groups": [
      {
        "title": "Customer",
        "items": [
          {
            "name": "name",
            "label": "Full name",
            "aliases": [
              "Full name"
            ],
            "empty": "Not provided"
          },
          {
            "name": "email",
            "label": "Email address",
            "aliases": [
              "Email",
              "Email address"
            ],
            "empty": "Not provided"
          },
          {
            "name": "phone",
            "label": "Phone number",
            "aliases": [
              "Phone (optional, but helpful)",
              "Phone",
              "Phone number"
            ],
            "empty": "Not provided"
          }
        ]
      },
      {
        "title": "Event",
        "items": [
          {
            "name": "date",
            "label": "Date needed",
            "aliases": [
              "Date needed"
            ],
            "empty": "Not provided"
          }
        ]
      },
      {
        "title": "Order details",
        "items": [
          {
            "name": "product_name",
            "label": "Product name",
            "aliases": [
              "Product name"
            ],
            "empty": "Not provided"
          },
          {
            "name": "flavour",
            "label": "Flavour",
            "aliases": [
              "Flavour"
            ],
            "empty": "Not selected",
            "placeholders": [
              "Choose flavour"
            ]
          }
        ]
      },
      {
        "title": "Design & notes",
        "items": [
          {
            "name": "cake_colour",
            "label": "Cake colour Included (+£0)",
            "aliases": [
              "Cake colour Included (+£0)"
            ],
            "empty": "Not selected"
          },
          {
            "name": "extra_topper",
            "label": "Lay-flat cake topper (+£3)",
            "aliases": [
              "Lay-flat cake topper (+£3)"
            ],
            "empty": "Not selected"
          },
          {
            "name": "extra_sprinkles",
            "label": "Sprinkles (+£2)",
            "aliases": [
              "Sprinkles (+£2)"
            ],
            "empty": "Not selected"
          },
          {
            "name": "extra_bow",
            "label": "Bow (+£2.50)",
            "aliases": [
              "Bow (+£2.50)"
            ],
            "empty": "Not selected"
          },
          {
            "name": "topper_text",
            "label": "Topper text",
            "aliases": [
              "Topper text"
            ],
            "empty": "Not provided"
          }
        ]
      },
      {
        "title": "Collection & delivery",
        "items": [
          {
            "name": "delivery_option",
            "label": "Collection or delivery?",
            "aliases": [
              "Collection or delivery?"
            ],
            "empty": "Not selected",
            "placeholders": [
              "Choose option"
            ]
          },
          {
            "name": "postcode",
            "label": "Postcode / area",
            "aliases": [
              "Postcode / area"
            ],
            "empty": "Not provided"
          }
        ]
      },
      {
        "title": "Order summary & estimates",
        "items": [
          {
            "name": "estimated_price",
            "label": "Estimated total",
            "aliases": [
              "Estimated total"
            ],
            "empty": "Not provided"
          },
          {
            "name": "extras_summary",
            "label": "Extras Summary",
            "aliases": [
              "Extras Summary"
            ],
            "empty": "Not provided"
          }
        ]
      }
    ]
  },
  "/products/express-cupcakes/": {
    "form": "Product order form - Express Cupcakes",
    "heading": "Express Cupcakes enquiry",
    "groups": [
      {
        "title": "Customer",
        "items": [
          {
            "name": "name",
            "label": "Full name",
            "aliases": [
              "Full name"
            ],
            "empty": "Not provided"
          },
          {
            "name": "email",
            "label": "Email address",
            "aliases": [
              "Email",
              "Email address"
            ],
            "empty": "Not provided"
          },
          {
            "name": "phone",
            "label": "Phone number",
            "aliases": [
              "Phone (optional, but helpful)",
              "Phone",
              "Phone number"
            ],
            "empty": "Not provided"
          }
        ]
      },
      {
        "title": "Event",
        "items": [
          {
            "name": "date",
            "label": "Date needed",
            "aliases": [
              "Date needed"
            ],
            "empty": "Not provided"
          }
        ]
      },
      {
        "title": "Order details",
        "items": [
          {
            "name": "product_name",
            "label": "Product name",
            "aliases": [
              "Product name"
            ],
            "empty": "Not provided"
          },
          {
            "name": "cupcake_quantity",
            "label": "Cupcake box size / quantity",
            "aliases": [
              "Cupcake box size / quantity"
            ],
            "empty": "Not provided"
          },
          {
            "name": "flavour",
            "label": "Flavour",
            "aliases": [
              "Flavour"
            ],
            "empty": "Not selected",
            "placeholders": [
              "Choose flavour"
            ]
          },
          {
            "name": "frosting_select",
            "label": "Frosting",
            "aliases": [
              "Frosting"
            ],
            "empty": "Not selected"
          }
        ]
      },
      {
        "title": "Design & notes",
        "items": [
          {
            "name": "extra_sprinkles",
            "label": "Sprinkles (+£1 per 6 cupcakes)",
            "aliases": [
              "Sprinkles (+£1 per 6 cupcakes)"
            ],
            "empty": "Not selected"
          },
          {
            "name": "extra_edible_print",
            "label": "Edible print (+£2 per 6 cupcakes)",
            "aliases": [
              "Edible print (+£2 per 6 cupcakes)"
            ],
            "empty": "Not selected"
          },
          {
            "name": "edible_print_details",
            "label": "Edible print details",
            "aliases": [
              "Edible print details (optional)",
              "Edible print details"
            ],
            "empty": "Not provided"
          }
        ]
      },
      {
        "title": "Collection & delivery",
        "items": [
          {
            "name": "delivery_option",
            "label": "Collection or delivery?",
            "aliases": [
              "Collection or delivery?"
            ],
            "empty": "Not selected",
            "placeholders": [
              "Choose option"
            ]
          },
          {
            "name": "postcode",
            "label": "Postcode / area",
            "aliases": [
              "Postcode / area"
            ],
            "empty": "Not provided"
          }
        ]
      },
      {
        "title": "Order summary & estimates",
        "items": [
          {
            "name": "order_summary",
            "label": "Order summary",
            "aliases": [
              "Order summary"
            ],
            "empty": "Not provided"
          }
        ]
      }
    ]
  },
  "/products/fathers-day-collection/": {
    "form": "Product order form - Father’s Day Cupcake & Brownie Boxes",
    "heading": "Father’s Day Cupcake & Brownie Boxes enquiry",
    "groups": [
      {
        "title": "Customer",
        "items": [
          {
            "name": "name",
            "label": "Full name",
            "aliases": [
              "Name",
              "Full name"
            ],
            "empty": "Not provided"
          },
          {
            "name": "email",
            "label": "Email address",
            "aliases": [
              "Email",
              "Email address"
            ],
            "empty": "Not provided"
          },
          {
            "name": "phone",
            "label": "Phone number",
            "aliases": [
              "Phone number"
            ],
            "empty": "Not provided"
          }
        ]
      },
      {
        "title": "Event",
        "items": [
          {
            "name": "date",
            "label": "Requested date",
            "aliases": [
              "Requested date"
            ],
            "empty": "Not provided"
          }
        ]
      },
      {
        "title": "Order details",
        "items": [
          {
            "name": "product_name",
            "label": "Product name",
            "aliases": [
              "Product name"
            ],
            "empty": "Not provided"
          },
          {
            "name": "product_selection",
            "label": "Product",
            "aliases": [
              "Product"
            ],
            "empty": "Not selected",
            "placeholders": [
              "Choose product"
            ]
          },
          {
            "name": "quantity",
            "label": "Quantity",
            "aliases": [
              "Quantity"
            ],
            "empty": "Not provided"
          },
          {
            "name": "cupcake_flavour",
            "label": "Cupcake flavour",
            "aliases": [
              "Cupcake flavour"
            ],
            "empty": "Not selected",
            "placeholders": [
              "Choose flavour"
            ]
          }
        ]
      },
      {
        "title": "Design & notes",
        "items": [
          {
            "name": "card_addon",
            "label": "Greeting card add-on",
            "aliases": [
              "Greeting card add-on"
            ],
            "empty": "Not selected"
          },
          {
            "name": "card_message",
            "label": "Card message",
            "aliases": [
              "Card message"
            ],
            "empty": "Not provided"
          },
          {
            "name": "notes_allergies",
            "label": "Notes / allergies",
            "aliases": [
              "Notes / allergies"
            ],
            "empty": "Not provided"
          }
        ]
      },
      {
        "title": "Collection & delivery",
        "items": [
          {
            "name": "fulfilment",
            "label": "Collection / delivery",
            "aliases": [
              "Collection / delivery"
            ],
            "empty": "Not selected",
            "placeholders": [
              "Choose option"
            ]
          },
          {
            "name": "postcode",
            "label": "Postcode",
            "aliases": [
              "Postcode"
            ],
            "empty": "Not provided"
          }
        ]
      },
      {
        "title": "Order summary & estimates",
        "items": [
          {
            "name": "base_price",
            "label": "Base product total",
            "aliases": [
              "Base product total"
            ],
            "empty": "Not provided"
          },
          {
            "name": "card_addon_price",
            "label": "Greeting card add-on total",
            "aliases": [
              "Greeting card add-on total"
            ],
            "empty": "Not provided"
          },
          {
            "name": "estimated_price",
            "label": "Estimated total",
            "aliases": [
              "Estimated total"
            ],
            "empty": "Not provided"
          },
          {
            "name": "order_summary",
            "label": "Order summary",
            "aliases": [
              "Order summary"
            ],
            "empty": "Not provided"
          }
        ]
      },
      {
        "title": "Acknowledgements",
        "items": [
          {
            "name": "payment_confirmation",
            "label": "Payment requirement acknowledged",
            "aliases": [
              "I understand full payment is required to secure the order.",
              "Payment requirement acknowledged"
            ],
            "empty": "Not selected"
          }
        ]
      }
    ]
  },
  "/products/freshly-made-cookies/": {
    "form": "Product order form - Freshly Made Cookies",
    "heading": "Freshly Made Cookies enquiry",
    "groups": [
      {
        "title": "Customer",
        "items": [
          {
            "name": "name",
            "label": "Full name",
            "aliases": [
              "Full name"
            ],
            "empty": "Not provided"
          },
          {
            "name": "email",
            "label": "Email address",
            "aliases": [
              "Email",
              "Email address"
            ],
            "empty": "Not provided"
          },
          {
            "name": "phone",
            "label": "Phone number",
            "aliases": [
              "Phone (optional, but helpful)",
              "Phone",
              "Phone number"
            ],
            "empty": "Not provided"
          }
        ]
      },
      {
        "title": "Event",
        "items": [
          {
            "name": "date",
            "label": "Date needed",
            "aliases": [
              "Date needed"
            ],
            "empty": "Not provided"
          }
        ]
      },
      {
        "title": "Order details",
        "items": [
          {
            "name": "product_name",
            "label": "Product name",
            "aliases": [
              "Product name"
            ],
            "empty": "Not provided"
          },
          {
            "name": "cookie_pack_ui",
            "label": "Cookie pack size",
            "aliases": [
              "Cookie Pack Ui",
              "Cookie pack size"
            ],
            "empty": "Not selected"
          },
          {
            "name": "flavour_ui",
            "label": "Flavour",
            "aliases": [
              "Flavour"
            ],
            "empty": "Not selected",
            "placeholders": [
              "Choose flavour"
            ]
          }
        ]
      },
      {
        "title": "Collection & delivery",
        "items": [
          {
            "name": "delivery_option_ui",
            "label": "Delivery or collection",
            "aliases": [
              "Collection or delivery?",
              "Delivery or collection"
            ],
            "empty": "Not selected",
            "placeholders": [
              "Choose option"
            ]
          },
          {
            "name": "postcode_ui",
            "label": "Postcode / area",
            "aliases": [
              "Postcode / area"
            ],
            "empty": "Not provided"
          }
        ]
      },
      {
        "title": "Order summary & estimates",
        "items": [
          {
            "name": "order_summary",
            "label": "Order summary",
            "aliases": [
              "Order summary"
            ],
            "empty": "Not provided"
          }
        ]
      }
    ]
  },
  "/products/halloween-collection/": {
    "form": "Product order form - Halloween Collection",
    "heading": "Halloween Collection enquiry",
    "groups": [
      {
        "title": "Customer",
        "items": [
          {
            "name": "name",
            "label": "Full name",
            "aliases": [
              "Full name"
            ],
            "empty": "Not provided"
          },
          {
            "name": "email",
            "label": "Email address",
            "aliases": [
              "Email",
              "Email address"
            ],
            "empty": "Not provided"
          },
          {
            "name": "phone",
            "label": "Phone number",
            "aliases": [
              "Phone (optional, but helpful)",
              "Phone",
              "Phone number"
            ],
            "empty": "Not provided"
          }
        ]
      },
      {
        "title": "Event",
        "items": [
          {
            "name": "date",
            "label": "Date needed",
            "aliases": [
              "Date needed"
            ],
            "empty": "Not provided"
          }
        ]
      },
      {
        "title": "Order details",
        "items": [
          {
            "name": "product_name",
            "label": "Product name",
            "aliases": [
              "Product name"
            ],
            "empty": "Not provided"
          },
          {
            "name": "product_selection",
            "label": "Product selection",
            "aliases": [
              "Product selection"
            ],
            "empty": "Not selected",
            "placeholders": [
              "Choose an option"
            ]
          },
          {
            "name": "edible_photo",
            "label": "Edible photo",
            "aliases": [
              "Edible photo (optional)",
              "Edible photo"
            ],
            "empty": "Not selected"
          },
          {
            "name": "flavour",
            "label": "Flavour",
            "aliases": [
              "Flavour"
            ],
            "empty": "Not selected",
            "placeholders": [
              "Choco / Vanilla"
            ]
          }
        ]
      },
      {
        "title": "Design & notes",
        "items": [
          {
            "name": "message",
            "label": "Short message",
            "aliases": [
              "Short message (optional)",
              "Short message"
            ],
            "empty": "Not provided"
          }
        ]
      },
      {
        "title": "Collection & delivery",
        "items": [
          {
            "name": "delivery_option",
            "label": "Collection or delivery?",
            "aliases": [
              "Collection or delivery?"
            ],
            "empty": "Not selected",
            "placeholders": [
              "Choose option"
            ]
          },
          {
            "name": "postcode",
            "label": "Postcode / area",
            "aliases": [
              "Postcode / area"
            ],
            "empty": "Not provided"
          }
        ]
      }
    ]
  },
  "/products/mini-bento-cake/": {
    "form": "Product order form - Mini / Bento Cake",
    "heading": "Mini / Bento Cake enquiry",
    "groups": [
      {
        "title": "Customer",
        "items": [
          {
            "name": "name",
            "label": "Full name",
            "aliases": [
              "Your name",
              "Full name"
            ],
            "empty": "Not provided"
          },
          {
            "name": "email",
            "label": "Email address",
            "aliases": [
              "Email",
              "Email address"
            ],
            "empty": "Not provided"
          },
          {
            "name": "phone",
            "label": "Phone number",
            "aliases": [
              "Phone",
              "Phone number"
            ],
            "empty": "Not provided"
          }
        ]
      },
      {
        "title": "Event",
        "items": [
          {
            "name": "date",
            "label": "Event date",
            "aliases": [
              "Event date"
            ],
            "empty": "Not provided"
          },
          {
            "name": "time",
            "label": "Time",
            "aliases": [
              "Time (optional)",
              "Time"
            ],
            "empty": "Not provided"
          },
          {
            "name": "event_type",
            "label": "Event type",
            "aliases": [
              "Event type (optional)",
              "Event type"
            ],
            "empty": "Not selected",
            "placeholders": [
              "Select event"
            ]
          }
        ]
      },
      {
        "title": "Order details",
        "items": [
          {
            "name": "product_name",
            "label": "Product name",
            "aliases": [
              "Product name"
            ],
            "empty": "Not provided"
          },
          {
            "name": "box_type",
            "label": "Box type",
            "aliases": [
              "Box type"
            ],
            "empty": "Not selected"
          },
          {
            "name": "cake_flavour",
            "label": "Cake flavour",
            "aliases": [
              "Cake flavour"
            ],
            "empty": "Not selected",
            "placeholders": [
              "Choose cake flavour"
            ]
          },
          {
            "name": "budget_from",
            "label": "Budget from",
            "aliases": [
              "Budget from (optional)",
              "Budget from"
            ],
            "empty": "Not provided"
          }
        ]
      },
      {
        "title": "Design & notes",
        "items": [
          {
            "name": "dietary_preference",
            "label": "Dietary preference",
            "aliases": [
              "Dietary preference"
            ],
            "empty": "Not selected"
          },
          {
            "name": "reference_links",
            "label": "Reference links",
            "aliases": [
              "Reference links (optional)",
              "Reference links"
            ],
            "empty": "Not provided"
          },
          {
            "name": "message",
            "label": "Notes / design ideas",
            "aliases": [
              "Notes / design ideas"
            ],
            "empty": "Not provided"
          }
        ]
      },
      {
        "title": "Collection & delivery",
        "items": [
          {
            "name": "delivery_option",
            "label": "Delivery or collection?",
            "aliases": [
              "Delivery or collection?"
            ],
            "empty": "Not selected",
            "placeholders": [
              "Choose option"
            ]
          },
          {
            "name": "postcode",
            "label": "Postcode / area",
            "aliases": [
              "Postcode / area"
            ],
            "empty": "Not provided"
          }
        ]
      },
      {
        "title": "Order summary & estimates",
        "items": [
          {
            "name": "cake_flavour_price_adjustment",
            "label": "Flavour price adjustment",
            "aliases": [
              "Cake Flavour Price Adjustment"
            ],
            "empty": "Not provided"
          }
        ]
      }
    ]
  },
  "/products/mothers-day-collection/": {
    "form": "Product order form - Mother’s Day Collection",
    "heading": "Mother’s Day Collection enquiry",
    "groups": [
      {
        "title": "Customer",
        "items": [
          {
            "name": "name",
            "label": "Full name",
            "aliases": [
              "Full name"
            ],
            "empty": "Not provided"
          },
          {
            "name": "email",
            "label": "Email address",
            "aliases": [
              "Email",
              "Email address"
            ],
            "empty": "Not provided"
          },
          {
            "name": "phone",
            "label": "Phone number",
            "aliases": [
              "Phone (optional, but helpful)",
              "Phone",
              "Phone number"
            ],
            "empty": "Not provided"
          }
        ]
      },
      {
        "title": "Event",
        "items": [
          {
            "name": "date",
            "label": "Date needed",
            "aliases": [
              "Date needed"
            ],
            "empty": "Not provided"
          }
        ]
      },
      {
        "title": "Order details",
        "items": [
          {
            "name": "product_name",
            "label": "Product name",
            "aliases": [
              "Product name"
            ],
            "empty": "Not provided"
          },
          {
            "name": "product_selection",
            "label": "Product selection",
            "aliases": [
              "Product selection"
            ],
            "empty": "Not selected",
            "placeholders": [
              "Choose an option"
            ]
          },
          {
            "name": "edible_photo",
            "label": "Edible photo",
            "aliases": [
              "Edible photo (optional)",
              "Edible photo"
            ],
            "empty": "Not selected"
          },
          {
            "name": "flavour",
            "label": "Flavour",
            "aliases": [
              "Flavour"
            ],
            "empty": "Not selected",
            "placeholders": [
              "Choco / Vanilla"
            ]
          }
        ]
      },
      {
        "title": "Design & notes",
        "items": [
          {
            "name": "message",
            "label": "Short message",
            "aliases": [
              "Short message (optional)",
              "Short message"
            ],
            "empty": "Not provided"
          }
        ]
      },
      {
        "title": "Collection & delivery",
        "items": [
          {
            "name": "delivery_option",
            "label": "Collection or delivery?",
            "aliases": [
              "Collection or delivery?"
            ],
            "empty": "Not selected",
            "placeholders": [
              "Choose option"
            ]
          },
          {
            "name": "postcode",
            "label": "Postcode / area",
            "aliases": [
              "Postcode / area"
            ],
            "empty": "Not provided"
          }
        ]
      }
    ]
  },
  "/products/postage-cookie/": {
    "form": "Product order form - Postage Cookie",
    "heading": "Postage Cookie enquiry",
    "groups": [
      {
        "title": "Customer",
        "items": [
          {
            "name": "name",
            "label": "Full name",
            "aliases": [
              "Your name",
              "Full name"
            ],
            "empty": "Not provided"
          },
          {
            "name": "email",
            "label": "Email address",
            "aliases": [
              "Email",
              "Email address"
            ],
            "empty": "Not provided"
          },
          {
            "name": "phone",
            "label": "Phone number",
            "aliases": [
              "Phone",
              "Phone number"
            ],
            "empty": "Not provided"
          }
        ]
      },
      {
        "title": "Event",
        "items": [
          {
            "name": "date",
            "label": "Event date",
            "aliases": [
              "Event date (optional)",
              "Event date"
            ],
            "empty": "Not provided"
          },
          {
            "name": "time",
            "label": "Time",
            "aliases": [
              "Time (optional)",
              "Time"
            ],
            "empty": "Not provided"
          }
        ]
      },
      {
        "title": "Order details",
        "items": [
          {
            "name": "product_name",
            "label": "Product name",
            "aliases": [
              "Product name"
            ],
            "empty": "Not provided"
          },
          {
            "name": "quantity",
            "label": "Quantity",
            "aliases": [
              "Quantity"
            ],
            "empty": "Not selected"
          },
          {
            "name": "flavour",
            "label": "Flavour",
            "aliases": [
              "Flavour"
            ],
            "empty": "Not selected",
            "placeholders": [
              "Choose a flavour"
            ]
          },
          {
            "name": "budget_from",
            "label": "Budget from",
            "aliases": [
              "Budget from (optional)",
              "Budget from"
            ],
            "empty": "Not provided"
          }
        ]
      },
      {
        "title": "Design & notes",
        "items": [
          {
            "name": "emboss_text",
            "label": "Text to emboss (names, date, initials)",
            "aliases": [
              "Text to emboss (names, date, initials)"
            ],
            "empty": "Not provided"
          },
          {
            "name": "reference_links",
            "label": "Reference links",
            "aliases": [
              "Reference links (optional)",
              "Reference links"
            ],
            "empty": "Not provided"
          },
          {
            "name": "notes",
            "label": "Notes / design ideas",
            "aliases": [
              "Notes / design ideas"
            ],
            "empty": "Not provided"
          }
        ]
      },
      {
        "title": "Collection & delivery",
        "items": [
          {
            "name": "delivery_option",
            "label": "Delivery or collection?",
            "aliases": [
              "Delivery or collection?"
            ],
            "empty": "Not selected",
            "placeholders": [
              "Choose option"
            ]
          },
          {
            "name": "postcode",
            "label": "Postcode / area",
            "aliases": [
              "Postcode / area"
            ],
            "empty": "Not provided"
          }
        ]
      }
    ]
  },
  "/products/themed-cake/": {
    "form": "Product order form - Themed Cake",
    "heading": "Themed Cake enquiry",
    "groups": [
      {
        "title": "Customer",
        "items": [
          {
            "name": "name",
            "label": "Full name",
            "aliases": [
              "Your name",
              "Full name"
            ],
            "empty": "Not provided"
          },
          {
            "name": "email",
            "label": "Email address",
            "aliases": [
              "Email",
              "Email address"
            ],
            "empty": "Not provided"
          },
          {
            "name": "phone",
            "label": "Phone number",
            "aliases": [
              "Phone",
              "Phone number"
            ],
            "empty": "Not provided"
          }
        ]
      },
      {
        "title": "Event",
        "items": [
          {
            "name": "date",
            "label": "Event date",
            "aliases": [
              "Event date"
            ],
            "empty": "Not provided"
          },
          {
            "name": "time",
            "label": "Time",
            "aliases": [
              "Time (optional)",
              "Time"
            ],
            "empty": "Not provided"
          },
          {
            "name": "event_type",
            "label": "Event type",
            "aliases": [
              "Event type (optional)",
              "Event type"
            ],
            "empty": "Not selected",
            "placeholders": [
              "Select event"
            ]
          }
        ]
      },
      {
        "title": "Order details",
        "items": [
          {
            "name": "product_name",
            "label": "Product name",
            "aliases": [
              "Product name"
            ],
            "empty": "Not provided"
          },
          {
            "name": "cake_size",
            "label": "Servings / Cake size",
            "aliases": [
              "Servings / Cake size · view size guide",
              "Servings / Cake size"
            ],
            "empty": "Not selected"
          },
          {
            "name": "cake_flavour",
            "label": "Cake flavour",
            "aliases": [
              "Cake flavour"
            ],
            "empty": "Not selected",
            "placeholders": [
              "Choose cake flavour"
            ]
          },
          {
            "name": "budget_from",
            "label": "Budget from",
            "aliases": [
              "Budget from (optional)",
              "Budget from"
            ],
            "empty": "Not provided"
          }
        ]
      },
      {
        "title": "Design & notes",
        "items": [
          {
            "name": "dietary_preference",
            "label": "Dietary preference",
            "aliases": [
              "Dietary preference"
            ],
            "empty": "Not selected"
          },
          {
            "name": "reference_links",
            "label": "Reference links",
            "aliases": [
              "Reference links (optional)",
              "Reference links"
            ],
            "empty": "Not provided"
          },
          {
            "name": "message",
            "label": "Notes / design ideas",
            "aliases": [
              "Notes / design ideas"
            ],
            "empty": "Not provided"
          }
        ]
      },
      {
        "title": "Collection & delivery",
        "items": [
          {
            "name": "delivery_option",
            "label": "Delivery or collection?",
            "aliases": [
              "Delivery or collection?"
            ],
            "empty": "Not selected",
            "placeholders": [
              "Choose option"
            ]
          },
          {
            "name": "postcode",
            "label": "Postcode / area",
            "aliases": [
              "Postcode / area"
            ],
            "empty": "Not provided"
          }
        ]
      },
      {
        "title": "Order summary & estimates",
        "items": [
          {
            "name": "cake_flavour_price_adjustment",
            "label": "Flavour price adjustment",
            "aliases": [
              "Cake Flavour Price Adjustment"
            ],
            "empty": "Not provided"
          }
        ]
      }
    ]
  },
  "/products/valentines-collection/": {
    "form": "Product order form - Valentine’s Day Collection",
    "heading": "Valentine’s Day Collection enquiry",
    "groups": [
      {
        "title": "Customer",
        "items": [
          {
            "name": "name",
            "label": "Full name",
            "aliases": [
              "Full name"
            ],
            "empty": "Not provided"
          },
          {
            "name": "email",
            "label": "Email address",
            "aliases": [
              "Email",
              "Email address"
            ],
            "empty": "Not provided"
          },
          {
            "name": "phone",
            "label": "Phone number",
            "aliases": [
              "Phone (optional, but helpful)",
              "Phone",
              "Phone number"
            ],
            "empty": "Not provided"
          }
        ]
      },
      {
        "title": "Event",
        "items": [
          {
            "name": "date",
            "label": "Date needed",
            "aliases": [
              "Date needed"
            ],
            "empty": "Not provided"
          }
        ]
      },
      {
        "title": "Order details",
        "items": [
          {
            "name": "product_name",
            "label": "Product name",
            "aliases": [
              "Product name"
            ],
            "empty": "Not provided"
          },
          {
            "name": "product_selection",
            "label": "Product selection",
            "aliases": [
              "Product selection"
            ],
            "empty": "Not selected",
            "placeholders": [
              "Choose an option"
            ]
          },
          {
            "name": "flavour",
            "label": "Flavour",
            "aliases": [
              "Flavour"
            ],
            "empty": "Not selected",
            "placeholders": [
              "Choco / Vanilla"
            ]
          }
        ]
      },
      {
        "title": "Collection & delivery",
        "items": [
          {
            "name": "delivery_option",
            "label": "Collection or delivery?",
            "aliases": [
              "Collection or delivery?"
            ],
            "empty": "Not selected",
            "placeholders": [
              "Choose option"
            ]
          },
          {
            "name": "postcode",
            "label": "Postcode / area",
            "aliases": [
              "Postcode / area"
            ],
            "empty": "Not provided"
          }
        ]
      }
    ]
  },
  "/products/wedding-cake/": {
    "form": "Product order form - Wedding Cakes",
    "heading": "Wedding Cakes enquiry",
    "groups": [
      {
        "title": "Customer",
        "items": [
          {
            "name": "name",
            "label": "Full name",
            "aliases": [
              "Your name",
              "Full name"
            ],
            "empty": "Not provided"
          },
          {
            "name": "email",
            "label": "Email address",
            "aliases": [
              "Email",
              "Email address"
            ],
            "empty": "Not provided"
          },
          {
            "name": "phone",
            "label": "Phone number",
            "aliases": [
              "Phone",
              "Phone number"
            ],
            "empty": "Not provided"
          }
        ]
      },
      {
        "title": "Event",
        "items": [
          {
            "name": "date",
            "label": "Event date",
            "aliases": [
              "Event date"
            ],
            "empty": "Not provided"
          },
          {
            "name": "time",
            "label": "Time",
            "aliases": [
              "Time (optional)",
              "Time"
            ],
            "empty": "Not provided"
          },
          {
            "name": "event_type",
            "label": "Event type",
            "aliases": [
              "Event type (optional)",
              "Event type"
            ],
            "empty": "Not selected",
            "placeholders": [
              "Select event"
            ]
          }
        ]
      },
      {
        "title": "Order details",
        "items": [
          {
            "name": "product_name",
            "label": "Product name",
            "aliases": [
              "Product name"
            ],
            "empty": "Not provided"
          },
          {
            "name": "cake_size",
            "label": "Servings / Size",
            "aliases": [
              "Servings / Size · view servings guide",
              "Servings / Size"
            ],
            "empty": "Not selected"
          },
          {
            "name": "cake_flavour",
            "label": "Cake flavour",
            "aliases": [
              "Cake flavour"
            ],
            "empty": "Not selected",
            "placeholders": [
              "Choose cake flavour"
            ]
          },
          {
            "name": "budget_from",
            "label": "Budget from",
            "aliases": [
              "Budget from (optional)",
              "Budget from"
            ],
            "empty": "Not provided"
          }
        ]
      },
      {
        "title": "Design & notes",
        "items": [
          {
            "name": "dietary_preference",
            "label": "Dietary preference",
            "aliases": [
              "Dietary preference"
            ],
            "empty": "Not selected"
          },
          {
            "name": "reference_links",
            "label": "Reference links",
            "aliases": [
              "Reference links (optional)",
              "Reference links"
            ],
            "empty": "Not provided"
          },
          {
            "name": "message",
            "label": "Notes / design ideas",
            "aliases": [
              "Notes / design ideas"
            ],
            "empty": "Not provided"
          }
        ]
      },
      {
        "title": "Collection & delivery",
        "items": [
          {
            "name": "delivery_option",
            "label": "Delivery, venue setup or collection?",
            "aliases": [
              "Delivery, venue setup or collection?"
            ],
            "empty": "Not selected",
            "placeholders": [
              "Choose option"
            ]
          },
          {
            "name": "postcode",
            "label": "Venue postcode / area",
            "aliases": [
              "Venue postcode / area"
            ],
            "empty": "Not provided"
          }
        ]
      },
      {
        "title": "Order summary & estimates",
        "items": [
          {
            "name": "cake_flavour_price_adjustment",
            "label": "Flavour price adjustment",
            "aliases": [
              "Cake Flavour Price Adjustment"
            ],
            "empty": "Not provided"
          }
        ]
      }
    ]
  }
};
