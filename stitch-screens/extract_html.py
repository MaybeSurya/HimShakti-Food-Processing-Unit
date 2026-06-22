import os

steps_dir = r"C:\Users\welcome\.gemini\antigravity-ide\brain\c597a02a-bc0d-4ab3-92bc-e501754b2408\.system_generated\steps"
dest_dir = r"d:\Codes\TBI-GEU\HimShakti\himshakti-d2c\stitch-screens\html"

os.makedirs(dest_dir, exist_ok=True)

mappings = {
    "133": "01-ai-recipe-generator.html",
    "134": "02-my-account.html",
    "135": "03-checkout.html",
    "136": "04-our-story.html",
    "140": "05-login-signup.html",
    "141": "06-order-history.html",
    "142": "07-product-details.html",
    "143": "08-shop-all-products.html"
}

for step, filename in mappings.items():
    src_path = os.path.join(steps_dir, step, "content.md")
    dest_path = os.path.join(dest_dir, filename)
    if os.path.exists(src_path):
        with open(src_path, "r", encoding="utf-8") as f:
            content = f.read()
        # Find where --- ends
        parts = content.split("---", 1)
        if len(parts) > 1:
            html = parts[1].strip()
            with open(dest_path, "w", encoding="utf-8") as f:
                f.write(html)
            print(f"Extracted {filename}")
        else:
            print(f"Skipped {step} (no separator)")
    else:
        print(f"Skipped {step} (path does not exist)")
