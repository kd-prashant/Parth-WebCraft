import os
from PIL import Image, ImageDraw, ImageFont

def create_id_card():
    # Card dimensions (portrait for lanyard)
    width = 1000
    height = 1500
    
    # Colors
    bg_color = (15, 23, 42)      # Slate 900 (Dark theme)
    teal_color = (45, 212, 191)  # Teal 400
    text_color = (255, 255, 255) # White
    
    # Create base image
    img = Image.new('RGB', (width, height), bg_color)
    draw = ImageDraw.Draw(img)
    
    # 1. Top Teal Bar
    draw.rectangle([0, 0, width, 40], fill=teal_color)
    
    # 2. Profile Photo
    profile_path = 'public/profile.png'
    try:
        profile_img = Image.open(profile_path).convert('RGBA')
        
        # Crop to square/circle logic (let's do a large square with teal border)
        p_size = 500
        # Resize profile image to fill the square, crop center
        w, h = profile_img.size
        aspect = w / h
        if aspect > 1:
            new_w = int(p_size * aspect)
            new_h = p_size
            profile_img = profile_img.resize((new_w, new_h), Image.Resampling.LANCZOS)
            left = (new_w - p_size) // 2
            profile_img = profile_img.crop((left, 0, left + p_size, p_size))
        else:
            new_w = p_size
            new_h = int(p_size / aspect)
            profile_img = profile_img.resize((new_w, new_h), Image.Resampling.LANCZOS)
            top = int((new_h - p_size) * 0.1) # 10% from top instead of 50%
            profile_img = profile_img.crop((0, top, p_size, top + p_size))
            
        # Draw teal border
        border_size = 15
        p_x = (width - p_size) // 2
        p_y = 200
        draw.rectangle([p_x - border_size, p_y - border_size, p_x + p_size + border_size, p_y + p_size + border_size], fill=teal_color)
        
        # Paste profile image
        # PIL paste with RGBA uses alpha channel
        bg_for_paste = Image.new('RGB', profile_img.size, (255, 255, 255))
        bg_for_paste.paste(profile_img, mask=profile_img.split()[3])
        img.paste(bg_for_paste, (p_x, p_y))
        
    except Exception as e:
        print(f"Error loading profile.png: {e}")
        # Draw placeholder
        p_size = 500
        p_x = (width - p_size) // 2
        p_y = 200
        draw.rectangle([p_x, p_y, p_x + p_size, p_y + p_size], fill=(100, 100, 100))
        
    # 3. Text
    # We will try to use default fonts if specific ones aren't available
    try:
        # Try to load a nice font, fallback to default
        name_font = ImageFont.truetype("arialbd.ttf", 70)
        title_font = ImageFont.truetype("arial.ttf", 45)
    except:
        name_font = ImageFont.load_default()
        title_font = ImageFont.load_default()
        print("Using default font. Name and title might look small.")
        
    name = "PRASHANT KANDPAL"
    title = "Software Engineer | Web3 & AI"
    
    # Center text
    # Pillow < 10 uses textsize, Pillow >= 10 uses textbbox
    if hasattr(draw, 'textbbox'):
        name_bbox = draw.textbbox((0, 0), name, font=name_font)
        name_w = name_bbox[2] - name_bbox[0]
        title_bbox = draw.textbbox((0, 0), title, font=title_font)
        title_w = title_bbox[2] - title_bbox[0]
    else:
        name_w, name_h = draw.textsize(name, font=name_font)
        title_w, title_h = draw.textsize(title, font=title_font)
        
    name_x = (width - name_w) // 2
    name_y = 800
    
    title_x = (width - title_w) // 2
    title_y = 900
    
    draw.text((name_x, name_y), name, fill=text_color, font=name_font)
    draw.text((title_x, title_y), title, fill=teal_color, font=title_font)
    
    # 3.5 QR Code for LinkedIn
    try:
        import qrcode
        qr_data = "https://www.linkedin.com/in/prashant-kandpal-1b4375282/"
        qr = qrcode.QRCode(box_size=10, border=1)
        qr.add_data(qr_data)
        qr.make(fit=True)
        # Using a slight off-white color or teal for the QR code
        qr_img = qr.make_image(fill_color=teal_color, back_color=bg_color).convert('RGB')
        
        target_qr_size = 280
        qr_img = qr_img.resize((target_qr_size, target_qr_size), Image.Resampling.NEAREST)
        qr_x = (width - target_qr_size) // 2
        qr_y = 1000
        
        img.paste(qr_img, (qr_x, qr_y))
    except ImportError:
        print("qrcode library not found. Skipping QR code generation.")

    # 4. Footer (Badge aesthetic)
    footer_y = 1350
    draw.line([100, footer_y, width-100, footer_y], fill=(100, 116, 139), width=2)
    
    try:
        badge_font = ImageFont.truetype("courbd.ttf", 35) # Courier bold
    except:
        badge_font = ImageFont.load_default()
        
    badge_text = "ACCESS LEVEL: ADMIN"
    if hasattr(draw, 'textbbox'):
        b_bbox = draw.textbbox((0, 0), badge_text, font=badge_font)
        b_w = b_bbox[2] - b_bbox[0]
    else:
        b_w, b_h = draw.textsize(badge_text, font=badge_font)
        
    draw.text(((width - b_w) // 2, footer_y + 40), badge_text, fill=(100, 116, 139), font=badge_font)
    
    # Save the output
    out_path = 'public/id_card.png'
    img.save(out_path)
    print(f"Successfully generated {out_path}")

if __name__ == "__main__":
    create_id_card()
