import os
import yaml
import json
import subprocess
from bson import ObjectId

# Directories for your files
markdown_dir = './markdown_documents'
output_json_file = './test/blogs.json'

# Initialize a list to hold all blog entries
blog_entries = []

for md_filename in os.listdir(markdown_dir):
    if md_filename.endswith('.md'):
        md_file_path = os.path.join(markdown_dir, md_filename)
        subprocess.run(["tohtml", md_file_path])  # This might need adjustment if "tohtml" expects different parameters

for md_filename in os.listdir(markdown_dir):
    if md_filename.endswith('.md'):
        md_file_path = os.path.join(markdown_dir, md_filename)
        html_filename = md_filename.replace('.md', '.html')
        html_file_path = os.path.join(markdown_dir, html_filename)
        # Extract YAML metadata from Markdown file
        with open(md_file_path, 'r', encoding='utf-8') as md_file:
            content = md_file.read().split('---', 2)
            if len(content) >= 3:
                metadata = yaml.safe_load(content[1])  # YAML metadata is between the first two '---'
            else:
                metadata = {}
                
        # Read HTML content
        try:
            with open(html_file_path, 'r', encoding='utf-8') as html_file:
                html_content = html_file.read()
        except FileNotFoundError:
            print(f"HTML file not found for {md_filename}, skipping.")
            continue
            
        # Create blog entry with metadata and HTML body
        blog_entry = metadata  # Start with YAML metadata
        blog_entry['body'] = html_content  # Add HTML content as 'body'
        
        # Generate a new ObjectId
        blog_entry['_id'] = str(ObjectId())
        
        # Add the blog entry to the list
        blog_entries.append(blog_entry)
        subprocess.run(["rm", html_file_path])  # This might need adjustment if "tohtml" expects different parameters


# Open and write the file in text mode, with each document on a separate line
with open(output_json_file, 'w', encoding='utf-8') as outfile:
    for entry in blog_entries:
        json.dump(entry, outfile)
        outfile.write('\n')

print(f"Converted Markdown and HTML documents to JSON: {output_json_file}")
