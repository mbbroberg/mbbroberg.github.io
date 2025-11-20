#!/usr/bin/env python3
import os
import re
from collections import defaultdict

tags_by_file = {}
all_tags = set()

# Scan all markdown files
for root, dirs, files in os.walk('content'):
    for file in files:
        if file.endswith('.md'):
            filepath = os.path.join(root, file)
            try:
                with open(filepath, 'r', encoding='utf-8') as f:
                    content = f.read()
                    # Extract tags from frontmatter
                    match = re.search(r'^---\s*\n(.*?)\n---', content, re.DOTALL)
                    if match:
                        frontmatter = match.group(1)
                        # Look for tags section (both 'tags:' and 'tag:')
                        tags_match = re.search(r'^tags?:\s*\n((?:  - .+\n)*)', frontmatter, re.MULTILINE)
                        if not tags_match:
                            # Also try single-line format: tag: value or tags: value
                            tags_match = re.search(r'^tags?:\s*(.+)$', frontmatter, re.MULTILINE)
                            if tags_match:
                                tag_value = tags_match.group(1).strip()
                                tags = [tag_value] if tag_value else []
                                tags_by_file[filepath] = tags
                                all_tags.update(tags)
                            else:
                                tags_by_file[filepath] = []
                        else:
                            tags_section = tags_match.group(1)
                            tags = re.findall(r'  - (.+)', tags_section)
                            tags = [t.strip() for t in tags]
                            tags_by_file[filepath] = tags
                            all_tags.update(tags)
            except Exception as e:
                print(f'Error reading {filepath}: {e}')

# Print all unique tags
print(f"=== TOTAL UNIQUE TAGS: {len(all_tags)} ===\n")
sorted_tags = sorted(all_tags)
for tag in sorted_tags:
    print(f"  - {tag}")

# Print files with no tags or few tags
print(f"\n\n=== FILES WITH NO TAGS OR FEW TAGS (0-1 tags) ===\n")
for filepath, tags in sorted(tags_by_file.items()):
    if len(tags) <= 1:
        print(f"{filepath}: {len(tags)} tag(s) - {tags}")

