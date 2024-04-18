import re
import requests
import boto3
import os

# Directory containing Markdown files
md_dir ="./PublicBlog" 

# S3 configuration
s3_bucket = "blog"
s3_access_key = 
s3_secret_key = 
s3_endpoint = 
s3_public_url = "https://blog.jimchen.me"

session = boto3.session.Session()
s3_client = session.client('s3', region_name='auto', endpoint_url=s3_endpoint,
                           aws_access_key_id=s3_access_key, aws_secret_access_key=s3_secret_key)

def upload_to_s3(file_content, file_name):
    """Uploads file to S3 bucket and returns the new URL."""
    try:
        s3_client.put_object(Bucket=s3_bucket, Key=file_name, Body=file_content)
        new_url = f"{s3_public_url}/{file_name}"
        print(f"Successfully uploaded {file_name} to S3. New URL: {new_url}")
        return new_url
    except Exception as e:
        print(f"Failed to upload {file_name}. Error: {e}")
        return None

def process_markdown_files(directory):
    """Processes each markdown file in the directory."""
    for filename in os.listdir(directory):
        if filename.endswith('.md'):
            filepath = os.path.join(directory, filename)
            print(f"Processing {filename}...")
            with open(filepath, 'r+', encoding='utf-8') as file:
                content = file.read()
                new_content, updated = process_content(content)
                if updated:
                    file.seek(0)
                    file.write(new_content)
                    file.truncate()
                    print(f"Updated {filename} with new URLs.")

def process_content(content):
    """Finds and replaces GitHub URLs with Cloudflare URLs."""
    updated = False
    pattern = r'https://github.com/jimchen2/nonimportant/assets/[^\)]+'
    matches = re.findall(pattern, content)
    for url in matches:
        file_name = url.split('/')[-1]
        print(f"Downloading {file_name} from {url}...")
        response = requests.get(url)
        if response.status_code == 200:
            file_content = response.content
            print(f"Downloaded {file_name}. Uploading to S3...")
            new_url = upload_to_s3(file_content, file_name)
            if new_url:
                content = content.replace(url, new_url)
                updated = True
                print(f"Replaced URL in Markdown: {url} -> {new_url}")
        else:
            print(f"Failed to download {url}. Status code: {response.status_code}")
    return content, updated

def main():
    if os.path.exists(md_dir):
        process_markdown_files(md_dir)
    else:
        print(f"Directory not found: {md_dir}")

if __name__ == "__main__":
    main()
