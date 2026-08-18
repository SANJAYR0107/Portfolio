import sys
from rembg import remove
from PIL import Image

input_path = sys.argv[1]
output_path = sys.argv[2]

print(f"Processing {input_path}...")
with open(input_path, 'rb') as i:
    with open(output_path, 'wb') as o:
        input_data = i.read()
        output_data = remove(input_data)
        o.write(output_data)

print(f"Successfully saved transparent image to {output_path}")
